import { lazy, Suspense } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import TechMarquee from '@/components/TechMarquee';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FloatingCTA from '@/components/FloatingCTA';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';

const KineticEnergyShader = lazy(() => import('@/components/ui/kinetic-energy-shader'));

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative min-h-screen text-foreground">
      {theme === 'dark' && (
        <Suspense fallback={null}>
          <KineticEnergyShader />
        </Suspense>
      )}
      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="relative z-10">
        <Hero />
        <About />
        <TechMarquee />
        <Services />
        <Projects />
        <Stats />
        <Contact />
      </div>
      <FloatingCTA />
    </main>
  );
};

export default Index;
