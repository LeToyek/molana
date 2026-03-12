import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Award, Users, Zap } from 'lucide-react';

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: '3.96 / 4.00 GPA',
    subtitle: 'Politeknik Negeri Malang',
  },
  {
    icon: Award,
    title: 'Best Graduate',
    subtitle: 'Informatics Engineering',
  },
  {
    icon: Zap,
    title: '5+ Competition Wins',
    subtitle: 'National Level IT',
  },
  {
    icon: Users,
    title: '20+ Students Mentored',
    subtitle: 'Mobile Programming',
  },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" aria-label="About" ref={ref} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          About Me
        </p>
        <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Engineering that <span className="text-primary">delivers results</span>
        </h2>
      </div>

      <div
        className={`grid gap-12 md:grid-cols-2 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Narrative */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a fullstack developer with a deep focus on backend architecture and AI integration.
            My work isn't about writing clever code it's about solving real business problems
            that drive measurable outcomes for clients.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From building predictive analytics that generated $40,000+ in value for a manufacturing client to
            engineering zero-downtime migrations for a Japanese SaaS platform, I bring the same
            principle to every project: <span className="text-foreground font-medium">ship reliable systems that deliver impact.</span>
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Currently working as a Backend Engineer at Delta HQ, where I build property management
            systems with real-time OTA integrations for global platforms like Rakuten and Airbnb.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 gap-4">
          {CREDENTIALS.map((cred, idx) => (
            <div
              key={cred.title}
              className="glass-card flex flex-col items-start gap-3 p-5 transition-all duration-500 hover:border-primary/30"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <cred.icon className="text-primary" size={24} />
              <div>
                <p className="text-lg font-bold tracking-tight">{cred.title}</p>
                <p className="font-mono text-xs text-muted-foreground">{cred.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
