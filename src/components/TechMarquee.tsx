import { useScrollReveal } from '@/hooks/useScrollReveal';

const TECH_ROW_1 = [
  'Go', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript', 'React', 'Redis', 'AWS',
  'GraphQL', 'Kubernetes', 'Node.js', 'Terraform',
];

const TECH_ROW_2 = [
  'Python', 'MongoDB', 'gRPC', 'Kafka', 'Next.js', 'Prisma', 'Nginx', 'CI/CD',
  'Elasticsearch', 'RabbitMQ', 'Rust', 'Linux',
];

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) => {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-container group overflow-hidden py-3">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-4 inline-block whitespace-nowrap font-mono text-lg font-medium text-foreground/40 transition-colors duration-300 group-hover:text-primary sm:mx-6 sm:text-2xl lg:text-3xl"
          >
            {tech}
            <span className="ml-4 text-primary/30 sm:ml-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className={`overflow-hidden border-y border-border py-10 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        The Roast Profile
      </p>
      <MarqueeRow items={TECH_ROW_1} />
      <MarqueeRow items={TECH_ROW_2} reverse />
    </section>
  );
};

export default TechMarquee;
