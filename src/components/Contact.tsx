import { useState } from 'react';
import { Github, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojkwjlw';

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15);
  const { ref: btnRef, handleMouseMove, handleMouseLeave } = useMagneticButton(0.3);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please email me directly.');
      }
    } catch {
      setError('Network error. Please email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact" ref={sectionRef} className="px-6 py-24 sm:py-32">
      <div
        className={`mx-auto max-w-3xl glass-card p-8 sm:p-12 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Have a project that needs
            <br />
            <span className="text-primary">senior-level engineering?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
            I help startups and enterprises build scalable backends, AI-powered tools,
            and production-grade applications. Response time: under 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle className="text-primary" size={48} />
            <h3 className="text-xl font-bold">Message Sent!</h3>
            <p className="font-mono text-sm text-muted-foreground">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="border-border/50 bg-muted/20 font-mono text-sm backdrop-blur-sm focus:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="border-border/50 bg-muted/20 font-mono text-sm backdrop-blur-sm focus:border-primary/50"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Project Type
                </label>
                <Select name="project_type">
                  <SelectTrigger className="border-border/50 bg-muted/20 font-mono text-sm backdrop-blur-sm">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="ai">AI / ML Solution</SelectItem>
                    <SelectItem value="fullstack">Full Product Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Budget Range
                </label>
                <Select name="budget">
                  <SelectTrigger className="border-border/50 bg-muted/20 font-mono text-sm backdrop-blur-sm">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<1k">Less than $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k+">$15,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="border-border/50 bg-muted/20 font-mono text-sm backdrop-blur-sm focus:border-primary/50"
              />
            </div>

            {error && (
              <p className="font-mono text-sm text-destructive">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              ref={btnRef as React.Ref<HTMLButtonElement>}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}

        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="font-mono text-xs text-muted-foreground">
            Or email directly:
          </p>
          <a
            href="mailto:maulanatoyek@gmail.com"
            className="font-mono text-xs text-primary underline-offset-4 hover:underline"
          >
            maulanatoyek@gmail.com
          </a>
        </div>

        <div
          className={`mt-6 flex items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {[
            { icon: Github, href: 'https://github.com/LeToyek', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/maulana-arif', label: 'LinkedIn' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-muted/30 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          Crafted with precision · Maulana Arif Wijaya · 2026
        </p>
      </div>
    </section>
  );
};

export default Contact;
