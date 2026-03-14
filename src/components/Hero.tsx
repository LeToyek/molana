import { useEffect, useState } from 'react';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { ArrowDown, Send } from 'lucide-react';

const TYPING_WORDS = [
  'High-Performance Backends',
  'Scalable SaaS Platforms',
  'AI-Driven Workflows',
  'Robust APIs',
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: exploreBtnRef, handleMouseMove: exploreMove, handleMouseLeave: exploreLeave } = useMagneticButton(0.35);
  const { ref: hireBtnRef, handleMouseMove: hireMove, handleMouseLeave: hireLeave } = useMagneticButton(0.35);
  const typedText = useTypingEffect(TYPING_WORDS, 80, 50, 2000);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section aria-label="Hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-4xl glass-card p-8 sm:p-12 lg:p-16">
        <p
          className={`mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-all duration-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          I build <span className="text-primary">{typedText}</span>
          <span className="animate-pulse text-primary">|</span>
        </p>

        <h1
          className={`max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl transition-all duration-700 delay-150 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Build SaaS Platforms That Scale.
          <br />
          <span className="text-primary">Integrate AI That Works.</span>
        </h1>

        <p
          className={`mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Fullstack developer specializing in Go, React, and AI solutions. I've helped 10+ enterprises reduce infrastructure costs and unlock new revenue through intelligent automation.
        </p>

        <div
          className={`mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground/80 transition-all duration-700 delay-400 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="border-b border-primary/30 pb-0.5">$40K+ ROI Generated</span>
          <span className="text-primary/50">•</span>
          <span className="border-b border-primary/30 pb-0.5">100K+ Records Processed</span>
          <span className="text-primary/50">•</span>
          <span className="border-b border-primary/30 pb-0.5">Backend Engineer at Japanese SaaS</span>
        </div>

        <div
          className={`mt-12 flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <a
            href="#contact"
            ref={hireBtnRef as React.Ref<HTMLAnchorElement>}
            onMouseMove={hireMove}
            onMouseLeave={hireLeave}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            <Send size={14} />
            Book a Free Architecture Review
          </a>
          <a
            href="#stats"
            ref={exploreBtnRef as React.Ref<HTMLAnchorElement>}
            onMouseMove={exploreMove}
            onMouseLeave={exploreLeave}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-primary/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Explore Work
            <ArrowDown size={14} />
          </a>
        </div>
      </div>

      <span
        className={`pointer-events-none absolute -right-10 bottom-10 select-none text-[12rem] font-bold leading-none text-foreground/[0.02] sm:text-[20rem] lg:text-[28rem] transition-all duration-1000 delay-500 ${
          loaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        01
      </span>
    </section>
  );
};

export default Hero;
