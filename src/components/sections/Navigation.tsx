import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-colors ${scrolled ? 'border-b border-gray-200 bg-white md:bg-white/95 md:backdrop-blur-md' : 'border-b border-transparent bg-white md:bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 h-[56px] md:h-20 flex items-center justify-between max-w-7xl">
        
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-brand-light flex items-center justify-center text-brand-primary relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-1.5 md:top-2 w-[16px] h-[16px] md:w-[20px] md:h-[20px]"><path d="m14.5 12 4-4"/><path d="m19 8-1.5-1.5"/><path d="m11 5-1.5-1.5"/><path d="m5 11-1.5-1.5"/><path d="m8 19-1.5-1.5"/><path d="m12 14.5-4 4"/><circle cx="12" cy="12" r="2.5"/><path d="m15.5 15.5 1.5 1.5"/><path d="m18 18 .5.5"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-0.5 md:bottom-1 text-[#4B5563] w-[20px] h-[20px] md:w-[24px] md:h-[24px]"><path d="M2 12h20"/><path d="M4 15h16"/><path d="M6 18h12"/></svg>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-none">
              {siteCopy.global.name}
            </span>
            <span className="hidden md:block text-[10px] font-medium text-gray-400 mt-1">
              {siteCopy.global.tagline}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button href={siteCopy.global.demoUrl} variant="primary" className="px-6 py-2 shadow-sm">
            {siteCopy.hero.primaryCta}
          </Button>
        </div>
      </div>
    </nav>
  );
}
