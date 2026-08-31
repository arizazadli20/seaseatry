import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'How it works', href: '#workflow' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Response', href: '#response' },
    { label: 'Future', href: '#future' },
    { label: 'Team', href: '#team' },
    { label: 'Demo', href: siteCopy.global.demoUrl }
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-colors ${scrolled ? 'border-b border-gray-200 bg-white md:bg-white/95 md:backdrop-blur-md' : 'border-b border-transparent bg-white md:bg-transparent'}`}>
        <div className="w-full px-[20px] md:px-6 h-[56px] md:h-20 flex items-center justify-between max-w-7xl mx-auto">
          
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
              <span className="hidden md:block text-[13px] font-medium text-gray-500 mt-1">
                {siteCopy.global.tagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Hamburger Menu Toggle (Mobile) */}
            <button 
              className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-gray-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button href={siteCopy.global.demoUrl} variant="primary" className="px-6 py-2 shadow-sm">
                {siteCopy.hero.primaryCta}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] z-40 bg-white h-[calc(100vh-56px)] overflow-y-auto">
          <div className="flex flex-col px-[20px] py-8 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-[24px] font-medium text-gray-900 block min-h-[44px] flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
