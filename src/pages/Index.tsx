import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import KineticEnergyShader from '@/components/ui/kinetic-energy-shader';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative min-h-screen text-foreground">
      {theme === 'dark' && <KineticEnergyShader />}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <Stats />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
