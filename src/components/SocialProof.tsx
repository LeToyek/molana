import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, GraduationCap, Users, Code, Briefcase, Award } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: '5+ National Wins',
    description: 'Champion in smart systems, app development, and IoT competitions at national level.',
  },
  {
    icon: GraduationCap,
    title: 'Best Graduate',
    description: 'Best Informatics Engineering Graduate with 3.96/4.00 GPA from Politeknik Negeri Malang.',
  },
  {
    icon: Code,
    title: '10+ Projects Delivered',
    description: 'Enterprise-grade applications across finance, healthcare, manufacturing, and education.',
  },
  {
    icon: Users,
    title: '20+ Students Mentored',
    description: 'Taught mobile programming with Flutter, resulting in successful real-world applications.',
  },
  {
    icon: Briefcase,
    title: 'International Team',
    description: 'Collaborating in English within an Agile/Scrum team at a Japanese SaaS startup.',
  },
  {
    icon: Award,
    title: 'PKM Funded',
    description: 'Secured funding in the 2023 Student Creativity Program for innovative research.',
  },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section aria-label="Social Proof" ref={ref} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Why Clients Trust Me
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Proven <span className="text-primary">Track Record</span>
        </h2>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {ACHIEVEMENTS.map((achievement, idx) => (
          <div
            key={achievement.title}
            className="group glass-card flex items-start gap-4 p-6 transition-all duration-500 hover:border-primary/30"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <achievement.icon size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">{achievement.title}</h3>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Metrics Bar */}
      <div
        className={`mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {[
          { value: '5+', label: 'Competition Wins' },
          { value: '#1', label: 'Best Graduate' },
          { value: '20+', label: 'Students Mentored' },
          { value: '10+', label: 'Projects Delivered' },
        ].map((metric) => (
          <div key={metric.label} className="glass-card p-4 text-center">
            <p className="text-2xl font-bold text-primary sm:text-3xl">{metric.value}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
