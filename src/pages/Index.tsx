import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import KineticEnergyShader from '@/components/ui/kinetic-energy-shader';

const Index = () => {
  return (
    <main className="relative min-h-screen text-foreground">
      <KineticEnergyShader />
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
