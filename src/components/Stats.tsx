import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { TrendingUp, Database, Brain, Briefcase, Trophy, Code } from 'lucide-react';

const CountUpStat = ({
  target,
  suffix = '',
  prefix = '',
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <span ref={ref as React.Ref<HTMLSpanElement>}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const STATS = [
  {
    icon: TrendingUp,
    value: <CountUpStat target={40} prefix="$" suffix="K+" />,
    label: 'Generated for Manufacturing Client',
    description: 'Built predictive analytics and real-time monitoring that identified loss patterns before they escalated.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: Database,
    value: <CountUpStat target={100} suffix="K+" />,
    label: 'Records Processed in Production',
    description: 'Engineered data pipelines handling 100K+ CDR and production records with high reliability.',
    span: 'md:col-span-1',
  },
  {
    icon: Brain,
    value: 'RAG + AI',
    label: 'Innovation Focus',
    description: 'Built RAG chatbots, predictive analytics, and OCR systems for enterprise clients.',
    span: 'md:col-span-1',
  },
  {
    icon: Code,
    value: <CountUpStat target={10} suffix="+" />,
    label: 'Enterprise Projects Delivered',
    description: 'From billing systems to hospital platforms — across finance, healthcare, and manufacturing.',
    span: 'md:col-span-1',
  },
  {
    icon: Briefcase,
    value: 'Delta HQ',
    label: 'Backend Engineer',
    description: 'Currently building property management SaaS with zero-downtime migrations and OTA integrations.',
    span: 'md:col-span-1',
  },
  {
    icon: Trophy,
    value: <CountUpStat target={5} suffix="+" />,
    label: 'National Competition Wins',
    description: 'Champion in smart systems, app development, and IoT at national level.',
    span: 'md:col-span-2',
  },
];

const Stats = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="stats" aria-label="Results and Impact" ref={ref} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Proven Track Record
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Results <span className="text-primary">I Deliver</span>
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
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
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
