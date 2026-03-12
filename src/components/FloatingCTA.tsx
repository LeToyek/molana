import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (~100vh)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <a
        href="#contact"
        className="group flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
      >
        <MessageSquare size={16} />
        <span className="hidden sm:inline">Get a Quote</span>
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/80 text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-muted hover:text-foreground"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default FloatingCTA;
