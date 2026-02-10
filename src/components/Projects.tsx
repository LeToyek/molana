import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Project {
  title: string;
  description: string;
  tags: string[];
  span: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Pulse API',
    description:
      'A high-throughput REST & GraphQL API gateway handling 50k+ requests/sec. Built with Go microservices, Redis caching, and Kubernetes orchestration.',
    tags: ['Go', 'GraphQL', 'Redis', 'K8s'],
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Vortex Dashboard',
    description:
      'Real-time analytics dashboard with WebSocket-driven live updates, complex data visualizations, and role-based access control.',
    tags: ['React', 'TypeScript', 'WebSockets', 'PostgreSQL'],
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Forge CLI',
    description:
      'A developer-first CLI tool for scaffolding, deploying, and managing fullstack applications with one command.',
    tags: ['Rust', 'Docker', 'CI/CD'],
    span: 'md:col-span-1 md:row-span-1',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-black/50 sm:p-8 ${project.span}`}
      style={{
        minHeight: project.span.includes('row-span-2') ? '420px' : '220px',
      }}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(0 100% 59% / 0.08), transparent 70%)',
        }}
      />

      {/* Index number */}
      <span className="absolute right-6 top-6 font-serif text-6xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-primary/10 sm:text-7xl">
        {String(PROJECTS.indexOf(project) + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-md font-mono text-xs leading-relaxed text-muted-foreground opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 sm:text-sm">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 opacity-100 transition-all duration-500 delay-100 md:opacity-0 md:group-hover:opacity-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          The Collection
        </p>
        <h2 className="mb-12 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Selected <span className="text-primary">Work</span>
        </h2>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
