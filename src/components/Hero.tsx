import { useEffect, useState } from 'react';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { ArrowDown, Send } from 'lucide-react';

const TYPING_WORDS = [
  'Scalable Backends',
  'AI-Powered Solutions',
  'Production-Grade Apps',
  'Real-Time Systems',
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
          className={`mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          I build <span className="text-primary">{typedText}</span>
          <span className="animate-pulse text-primary">|</span>
        </p>

        <h1
          className={`text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl transition-all duration-700 delay-150 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Maulana
          <br />
          <span className="text-primary">Arif Wijaya</span>
        </h1>

        <p
          className={`mt-8 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground sm:text-base transition-all duration-700 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Backend Engineer at Delta HQ (Japan) · 10+ Enterprise Projects
          <br />
          <span className="text-primary font-medium">IDR 600M+ in measurable client savings</span>
        </p>

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
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            <Send size={14} />
            Hire Me
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
