import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TechMarquee />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
