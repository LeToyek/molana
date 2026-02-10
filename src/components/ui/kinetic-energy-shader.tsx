import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const TRAIL_COUNT = 7;
const TRAIL_LENGTH = 30;
const LERP_BASE = 0.22;
const SWIRL_RADIUS = 0.15;
const SWIRL_SPEED = 2.0; // slower idle movement
const IDLE_BLEND_SPEED = 1.8; // how fast we transition to/from idle

// Interpolated palette: Red → Orange → Yellow → Gold with greens/pinks for vibrancy
const COLORS = [
  new THREE.Color('#FF0030'),
  new THREE.Color('#FF1500'),
  new THREE.Color('#FF4400'),
  new THREE.Color('#FF6600'),
  new THREE.Color('#FF8800'),
  new THREE.Color('#FFAA00'),
  new THREE.Color('#FF0060'),
];

const KineticEnergyShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const isIdleRef = useRef(false);
  const idleTimerRef = useRef<number>(0);
  const idleBlendRef = useRef(0); // 0 = moving, 1 = fully idle
  const timeRef = useRef(0);

  const setup = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Post-processing bloom
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      2.2,   // strength - more intense
      0.5,   // radius
      0.15   // threshold - lower for more glow
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Create trails
    const trails: {
      points: Float32Array;
      geometry: THREE.BufferGeometry;
      line: THREE.Line;
      phase: number;
      lerpFactor: number;
    }[] = [];

    for (let i = 0; i < TRAIL_COUNT; i++) {
      const points = new Float32Array(TRAIL_LENGTH * 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));

      // Create a glow layer — two lines per trail for soft luminosity
      const material = new THREE.LineBasicMaterial({
        color: COLORS[i % COLORS.length],
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.85,
        linewidth: 1,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      // Second glow pass — wider, dimmer for soft bloom
      const glowMat = new THREE.LineBasicMaterial({
        color: COLORS[i % COLORS.length],
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.3,
        linewidth: 1,
      });
      const glowLine = new THREE.Line(geometry, glowMat);
      glowLine.scale.set(1.03, 1.03, 1);
      scene.add(glowLine);

      trails.push({
        points,
        geometry,
        line,
        phase: (i / TRAIL_COUNT) * Math.PI * 2,
        lerpFactor: LERP_BASE + i * 0.012,
      });
    }

    // Glow particles
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.02,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    const aspect = container.clientWidth / container.clientHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRef.current.x = nx * aspect;
      targetRef.current.y = ny;
      isIdleRef.current = false;
      idleTimerRef.current = 0;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      const a = w / h;
      camera.left = -a;
      camera.right = a;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const dt = 0.016;
      timeRef.current += dt;
      idleTimerRef.current += dt;

      if (idleTimerRef.current > 0.15) {
        isIdleRef.current = true;
      }

      // Smooth blend factor: ramp up when idle, ramp down when moving
      const targetBlend = isIdleRef.current ? 1 : 0;
      idleBlendRef.current += (targetBlend - idleBlendRef.current) * dt * IDLE_BLEND_SPEED;
      const blend = idleBlendRef.current;

      // Velocity tracking
      velocityRef.current.x = targetRef.current.x - prevMouseRef.current.x;
      velocityRef.current.y = targetRef.current.y - prevMouseRef.current.y;
      prevMouseRef.current.x = targetRef.current.x;
      prevMouseRef.current.y = targetRef.current.y;

      // Lerp mouse towards target
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.22;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.22;

      const t = timeRef.current;

      // Update trails
      for (let ti = 0; ti < trails.length; ti++) {
        const trail = trails[ti];
        const pts = trail.points;
        const phase = trail.phase;
        const lerp = trail.lerpFactor;

        // Head position — blend between moving spread and idle swirl
        let headX = mouseRef.current.x;
        let headY = mouseRef.current.y;

        // Idle swirl offset (Lissajous), scaled by blend
        const baseAngle = t * SWIRL_SPEED * (1 + ti * 0.3) + phase;
        const r = SWIRL_RADIUS * (0.4 + 0.6 * Math.sin(t * 1.8 + phase)) * blend;
        const freqX = 2 + Math.sin(ti * 0.7) * 0.5;
        const freqY = 3 + Math.cos(ti * 0.5) * 0.5;
        headX += Math.cos(baseAngle * freqX) * r + Math.sin(t * 2.5 + phase) * r * 0.3;
        headY += Math.sin(baseAngle * freqY) * r + Math.cos(t * 1.7 + phase) * r * 0.4;

        // Moving spread offset, scaled by (1 - blend)
        const spread = 0.08 * (ti - TRAIL_COUNT / 2) * (1 - blend);
        headX += velocityRef.current.y * spread;
        headY -= velocityRef.current.x * spread;

        // Set head
        pts[0] = headX;
        pts[1] = headY;
        pts[2] = 0;

        // Each subsequent point follows the previous
        for (let j = 1; j < TRAIL_LENGTH; j++) {
          const idx = j * 3;
          const prevIdx = (j - 1) * 3;
          const segLerp = lerp * (1 - j / TRAIL_LENGTH * 0.5);
          pts[idx] += (pts[prevIdx] - pts[idx]) * segLerp;
          pts[idx + 1] += (pts[prevIdx + 1] - pts[idx + 1]) * segLerp;
          pts[idx + 2] = 0;
        }

        trail.geometry.attributes.position.needsUpdate = true;

        // Animate opacity based on idle state
      const mat = trail.line.material as THREE.LineBasicMaterial;
        mat.opacity = 0.75 + blend * 0.2;
      }

      // Update particles around the cursor
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + t * 2.0 + Math.sin(i) * 0.5;
        const distIdle = 0.03 + 0.15 * Math.sin(t * 3 + i * 0.7);
        const distMove = 0.02 + 0.08 * Math.sin(t * 2 + i);
        const dist = distMove + (distIdle - distMove) * blend;
        particlePositions[i * 3] = mouseRef.current.x + Math.cos(angle) * dist;
        particlePositions[i * 3 + 1] = mouseRef.current.y + Math.sin(angle) * dist;
        particlePositions[i * 3 + 2] = 0;

        const c = COLORS[i % COLORS.length];
        particleColors[i * 3] = c.r;
        particleColors[i * 3 + 1] = c.g;
        particleColors[i * 3 + 2] = c.b;
      }
      particleGeom.attributes.position.needsUpdate = true;
      particleGeom.attributes.color.needsUpdate = true;

      particleMat.opacity = 0.6 + blend * 0.4;

      composer.render();
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      trails.forEach((trail) => {
        trail.geometry.dispose();
        (trail.line.material as THREE.Material).dispose();
      });
      particleGeom.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = setup();
    return cleanup;
  }, [setup]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ touchAction: 'none' }}
    />
  );
};

export default KineticEnergyShader;
