import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

const TRAIL_COUNT = 5;
const TRAIL_LENGTH = 80;
const LERP_BASE = 0.08;
const SWIRL_RADIUS = 0.15;
const SWIRL_SPEED = 3.0;

const COLORS = [
  new THREE.Color('#FF0000'),
  new THREE.Color('#FFD700'),
  new THREE.Color('#FF4D00'),
  new THREE.Color('#FF2200'),
  new THREE.Color('#FFAA00'),
];

const KineticEnergyShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const isIdleRef = useRef(false);
  const idleTimerRef = useRef<number>(0);
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

      const material = new THREE.LineBasicMaterial({
        color: COLORS[i % COLORS.length],
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.7,
        linewidth: 1,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      trails.push({
        points,
        geometry,
        line,
        phase: (i / TRAIL_COUNT) * Math.PI * 2,
        lerpFactor: LERP_BASE + i * 0.015,
      });
    }

    // Glow particles
    const particleCount = 60;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.015,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6,
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

      // Velocity tracking
      velocityRef.current.x = targetRef.current.x - prevMouseRef.current.x;
      velocityRef.current.y = targetRef.current.y - prevMouseRef.current.y;
      prevMouseRef.current.x = targetRef.current.x;
      prevMouseRef.current.y = targetRef.current.y;

      // Lerp mouse towards target
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.12;

      const t = timeRef.current;
      const idle = isIdleRef.current;

      // Update trails
      for (let ti = 0; ti < trails.length; ti++) {
        const trail = trails[ti];
        const pts = trail.points;
        const phase = trail.phase;
        const lerp = trail.lerpFactor;

        // Head position — add swirl offset when idle
        let headX = mouseRef.current.x;
        let headY = mouseRef.current.y;

        if (idle) {
          const swirlAngle = t * SWIRL_SPEED * (1 + ti * 0.4) + phase;
          const r = SWIRL_RADIUS * (0.5 + 0.5 * Math.sin(t * 1.5 + phase));
          headX += Math.cos(swirlAngle) * r;
          headY += Math.sin(swirlAngle) * r;
        } else {
          // Spread trails slightly based on velocity
          const spread = 0.08 * (ti - TRAIL_COUNT / 2);
          headX += velocityRef.current.y * spread;
          headY -= velocityRef.current.x * spread;
        }

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
        mat.opacity = idle ? 0.85 : 0.6;
      }

      // Update particles around the cursor
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + t * 2.0 + Math.sin(i) * 0.5;
        const dist = idle
          ? 0.04 + 0.12 * Math.sin(t * 3 + i * 0.7)
          : 0.02 + 0.06 * Math.sin(t * 2 + i);
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

      particleMat.opacity = idle ? 0.9 : 0.5;

      renderer.render(scene, camera);
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
