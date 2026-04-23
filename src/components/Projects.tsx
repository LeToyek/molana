import { lazy, Suspense, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECTS, CATEGORIES, type Project, type ProjectCategory } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectModal = lazy(() => import('@/components/ProjectModal'));

const CATEGORY_LABEL: Record<string, string> = {
  ai: 'AI / ML',
  backend: 'Backend',
  fullstack: 'Full Stack',
};

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) => {
  const isFeatured = index === 0;
  const hasImage = !!project.image;

  return (
    <button
      onClick={onOpen}
      className={`group relative flex flex-col justify-end overflow-hidden glass-card text-left transition-all duration-500 hover:border-primary/30 ${
        isFeatured ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
      }`}
      style={{ minHeight: isFeatured ? '420px' : '220px' }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, hsl(215 100% 55% / 0.08), transparent 70%)',
        }}
      />

      {/* Thumbnail image */}
      {hasImage && (
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
        </div>
      )}

      {/* Index watermark */}
      <span className="absolute right-6 top-6 text-6xl font-bold text-foreground/[0.04] transition-colors duration-500 group-hover:text-primary/10 sm:text-7xl">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {project.liveLink && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Live
            </span>
          )}
          <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
            {CATEGORY_LABEL[project.category] ?? project.category}
          </span>
          {project.badge && (
            <Badge
              variant="outline"
              className="h-auto rounded-md border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary"
            >
              {project.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground">{project.subtitle}</p>

        <p className="mt-3 max-w-md font-mono text-xs leading-relaxed text-muted-foreground opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 sm:text-sm">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 opacity-100 transition-all duration-500 delay-100 md:opacity-0 md:group-hover:opacity-100">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/50 bg-muted/30 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      ref={ref}
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Selected Work
        </p>
        <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setShowAll(false);
              }}
              className={`rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border/50 bg-muted/30 text-muted-foreground hover:border-primary/30 hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-3 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {displayed.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {filtered.length > 4 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                View All {filtered.length} Projects <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      )}

      <Suspense fallback={null}>
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Suspense>
    </section>
  );
};

export default Projects;
