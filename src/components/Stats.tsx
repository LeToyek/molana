import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, Database, Brain, Briefcase, GraduationCap, Award } from 'lucide-react';

const STATS = [
  {
    icon: TrendingUp,
    value: 'IDR 600M+',
    label: 'Loss Opportunities Reduced',
    description: 'Developed systems that directly prevented significant revenue loss for enterprise clients.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: Database,
    value: '100K+',
    label: 'Data Records Handled',
    description: 'Engineered backend systems at scale with reliable data pipelines.',
    span: 'md:col-span-1',
  },
  {
    icon: Brain,
    value: 'RAG + AI',
    label: 'Innovation Focus',
    description: 'Built RAG-based chatbots and predictive analytics for manufacturing.',
    span: 'md:col-span-1',
  },
  {
    icon: GraduationCap,
    value: '3.96 / 4.00',
    label: 'GPA · Politeknik Negeri Malang',
    description: 'Best Informatics Engineering Graduate with near-perfect academic record.',
    span: 'md:col-span-1',
  },
  {
    icon: Briefcase,
    value: 'Delta HQ',
    label: 'Backend Engineer',
    description: 'Currently building a Japanese SaaS platform focused on operational efficiency.',
    span: 'md:col-span-1',
  },
  {
    icon: Award,
    value: 'Best Graduate',
    label: 'Recognized Excellence',
    description: 'Top of the class in Informatics Engineering — awarded Best Graduate.',
    span: 'md:col-span-2',
  },
];

const Stats = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="stats" ref={ref} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          By The Numbers
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Impact <span className="text-primary">&amp; Highlights</span>
        </h2>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-4 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`group relative flex flex-col justify-end overflow-hidden glass-card p-6 transition-all duration-500 hover:border-primary/30 sm:p-8 ${stat.span}`}
            style={{
              minHeight: stat.span.includes('row-span-2') ? '380px' : '200px',
              animationDelay: `${idx * 100}ms`,
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(ellipse at 50% 100%, hsl(215 100% 55% / 0.08), transparent 70%)',
              }}
            />

            <stat.icon
              className="absolute right-6 top-6 text-muted-foreground/10 transition-colors duration-500 group-hover:text-primary/20"
              size={stat.span.includes('row-span-2') ? 64 : 40}
            />

            <div className="relative z-10">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {stat.label}
              </h3>
              <p className="mt-2 max-w-md font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
