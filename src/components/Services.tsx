import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Server, Brain, Layers } from 'lucide-react';

const SERVICES = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable APIs, microservices, and database architecture built for production.',
    bullets: [
      'Go, NestJS, .NET, Laravel',
      'RESTful & gRPC API design',
      'PostgreSQL, MongoDB, Redis',
      'Docker & CI/CD pipelines',
    ],
  },
  {
    icon: Brain,
    title: 'AI / ML Solutions',
    description: 'Intelligent systems that automate workflows and unlock insights from data.',
    bullets: [
      'RAG chatbots & LLM integration',
      'Predictive analytics & forecasting',
      'OCR & document processing',
      'LangChain & vector databases',
    ],
  },
  {
    icon: Layers,
    title: 'Full Product Development',
    description: 'End-to-end from architecture to deployment — web and mobile.',
    bullets: [
      'React, Next.js, Angular frontends',
      'Flutter mobile applications',
      'Real-time features (WebSocket, Pusher)',
      'Payment gateway integration',
    ],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" aria-label="Services" ref={ref} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          What I Do
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Services <span className="text-primary">I Offer</span>
        </h2>
      </div>

      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-3 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {SERVICES.map((service, idx) => (
          <div
            key={service.title}
            className="group glass-card flex flex-col p-8 transition-all duration-500 hover:border-primary/30"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon size={24} />
            </div>

            <h3 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
              {service.title}
            </h3>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <ul className="mb-8 flex-1 space-y-2">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 font-mono text-xs text-muted-foreground"
                >
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-primary/30 bg-primary/5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Discuss Your Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
