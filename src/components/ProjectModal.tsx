import { type Project } from '@/data/projects';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { ExternalLink, Github } from 'lucide-react';

const CATEGORY_LABEL: Record<string, string> = {
  ai: 'AI / ML',
  backend: 'Backend',
  fullstack: 'Full Stack',
};

const ProjectModal = ({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) => {
  if (!project) return null;

  const hasPreviews = project.previews && project.previews.length > 0;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 bg-background/95 backdrop-blur-xl sm:max-w-2xl">
        <DialogHeader>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
              {CATEGORY_LABEL[project.category] ?? project.category}
            </span>
            {project.badge && (
              <Badge className="bg-primary/20 text-primary border-primary/40 font-mono text-[10px] uppercase tracking-widest hover:bg-primary/30">
                {project.badge}
              </Badge>
            )}
            {project.liveLink && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Live
              </span>
            )}
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
            {project.title}
          </DialogTitle>
          <p className="font-mono text-sm text-muted-foreground">{project.subtitle}</p>
        </DialogHeader>

        {/* Image gallery */}
        {hasPreviews && (
          <div className="mt-4 overflow-hidden rounded-xl border border-border/50">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {project.previews!.map((src, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={src}
                      alt={`${project.title} preview ${i + 1}`}
                      loading="lazy"
                      className="h-56 w-full object-cover sm:h-72"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.previews!.length > 1 && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>
          </div>
        )}

        <div className="mt-4 space-y-6">
          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Challenge
            </h4>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Approach
            </h4>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {project.approach}
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Result
            </h4>
            <p className="font-mono text-sm leading-relaxed text-foreground/80">
              {project.result}
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col gap-3">
          {(project.liveLink || project.githubLink) && (
            <div className="flex gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-3 font-mono text-xs uppercase tracking-[0.15em] text-emerald-400 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
                >
                  <ExternalLink size={13} />
                  View Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/50 bg-muted/30 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                >
                  <Github size={13} />
                  View Code
                </a>
              )}
            </div>
          )}

          <a
            href="#contact"
            onClick={() => onClose()}
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            Have a similar project? Let's talk
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
