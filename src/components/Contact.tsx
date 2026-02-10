import { Github, Linkedin, Twitter } from 'lucide-react';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const { ref: btnRef, handleMouseMove, handleMouseLeave } = useMagneticButton(0.3);
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-24 sm:py-32"
    >
      <div
        className={`mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-xl sm:p-12 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Let's Brew Something
        </p>
        <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Got an idea?
          <br />
          <span className="text-primary">Let's talk.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
          Always open to new projects, collaborations, and conversations over a
          fresh cup of coffee.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:hello@alexmercer.dev"
            ref={btnRef as React.Ref<HTMLAnchorElement>}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block rounded-lg border border-primary/50 bg-primary/10 px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Start a Conversation
          </a>
        </div>

        {/* Socials */}
        <div
          className={`mt-16 flex items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com', label: 'X / Twitter' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Footer line */}
        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          Brewed with precision · © 2026
        </p>
      </div>
    </section>
  );
};

export default Contact;
