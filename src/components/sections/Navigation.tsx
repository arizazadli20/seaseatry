import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="w-full px-[20px] md:px-6 h-[56px] md:h-20 flex items-center justify-center max-w-7xl mx-auto">
          
          <div className="flex items-center">
            {/* Full Logo */}
            <div className="h-12 md:h-14 transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="SeaSentry Logo" 
                className="h-full w-auto object-contain transition-all duration-300" 
                style={!scrolled ? { filter: 'brightness(0) invert(1)' } : { filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.1))' }} 
              />
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}
