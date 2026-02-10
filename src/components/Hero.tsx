import { useEffect, useState } from 'react';
import { useMagneticButton } from '@/hooks/useMagneticButton';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: btnRef, handleMouseMove, handleMouseLeave } = useMagneticButton(0.35);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-4xl rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
        {/* Overline */}
        <p
          className={`mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Fullstack Developer &amp; Digital Craftsman
        </p>

        {/* Headline */}
        <h1
          className={`font-serif text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl transition-all duration-700 delay-150 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Alex
          <br />
          <span className="text-primary">Mercer</span>
        </h1>

        {/* Tagline */}
        <p
          className={`mt-8 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground sm:text-base transition-all duration-700 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Roasting code. Fine-tuning the blend.
          <br />
          Crafting robust systems from the first commit to the final deploy.
        </p>

        {/* CTA */}
        <div
          className={`mt-12 transition-all duration-700 delay-[450ms] ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <a
            href="#projects"
            ref={btnRef as React.Ref<HTMLAnchorElement>}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block rounded-lg border border-primary/50 bg-primary/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View the Blend
          </a>
        </div>
      </div>

      {/* Large decorative number */}
      <span
        className={`pointer-events-none absolute -right-10 bottom-10 select-none font-serif text-[12rem] font-black leading-none text-white/[0.02] sm:text-[20rem] lg:text-[28rem] transition-all duration-1000 delay-500 ${
          loaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        01
      </span>
    </section>
  );
};

export default Hero;
