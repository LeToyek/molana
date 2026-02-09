import KineticEnergyShader from '@/components/ui/kinetic-energy-shader';
import { Github, Linkedin, Mail, Sparkles, Zap } from 'lucide-react';

const KineticDemo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <KineticEnergyShader />

      {/* Glass card overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl sm:p-10">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Zap className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">
                Kinetic Energy
              </h1>
              <p className="font-mono text-xs text-muted-foreground">
                WebGL Shader Demo
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 font-mono text-sm leading-relaxed text-muted-foreground">
            Move your cursor to guide the energy trails. Stop moving to see them
            concentrate into a swirling sphere of light.
          </p>

          {/* Feature list */}
          <div className="mb-8 space-y-3">
            {[
              { icon: Sparkles, label: 'Additive blending for white-hot glow' },
              { icon: Zap, label: 'Organic cursor-following with lerp' },
              { icon: Sparkles, label: 'Idle swirl concentration effect' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 shrink-0 text-orange-400" />
                <span className="font-mono text-xs text-foreground/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mb-6 h-px w-full bg-white/10" />

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-orange-400/30 hover:bg-orange-400/10"
              >
                <link.icon className="h-4 w-4 text-foreground/70" />
              </a>
            ))}
            <a
              href="/"
              className="ml-auto font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KineticDemo;
