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
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="w-full px-[20px] md:px-6 h-[56px] md:h-20 flex items-center justify-between max-w-7xl mx-auto">
          
          <div className="flex items-center">
            {/* Full Logo */}
            <div className="h-12 md:h-14 transition-all duration-300">
              <img 
                src="/logo.jpeg" 
                alt="SeaSentry Logo" 
                className={`h-full w-auto object-contain transition-all duration-300 ${scrolled ? 'mix-blend-multiply' : 'mix-blend-screen'}`} 
                style={!scrolled ? { filter: 'invert(1) grayscale(1) brightness(1.5)' } : {}} 
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Hamburger Menu Toggle (Mobile) */}
            <button 
              className={`md:hidden flex items-center justify-center w-11 h-11 -mr-2 transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
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
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] z-40 bg-[#0B1121] h-[calc(100vh-56px)] overflow-y-auto">
          <div className="flex flex-col px-[20px] py-8 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-[24px] font-medium text-white block min-h-[44px] flex items-center"
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
