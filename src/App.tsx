import { SmoothScroll } from './components/ui/SmoothScroll';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Workflow } from './components/sections/Workflow';
import { AiAdvises } from './components/sections/AiAdvises';
import { CaspianContext } from './components/sections/CaspianContext';
import { Intelligence } from './components/sections/Intelligence';
import { LivePlatform } from './components/sections/LivePlatform';
import { Response } from './components/sections/Response';
import { Team } from './components/sections/Team';
import { FinalCta } from './components/sections/FinalCta';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    // Start hidden (translateY 100%)
    gsap.set(stickyBarRef.current, { yPercent: 120 });

    // Show when scrolling past the first 100vh, hide when reaching the bottom
    gsap.to(stickyBarRef.current, {
      yPercent: 0,
      ease: 'power3.out',
      duration: 0.4,
      scrollTrigger: {
        trigger: document.body,
        start: '100vh top', // When body scrolls 100vh
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse'
      }
    });
  }, { scope: containerRef });

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary bg-white">
        <Navigation />
        <main className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0 relative z-10 bg-white">
          <Hero />
          <Problem />
          <Workflow />
          <AiAdvises />
          <CaspianContext />
          <Intelligence />
          <LivePlatform />
          <Response />
          <Team />
          <FinalCta />
        </main>
        
        {/* Sticky Bottom Bar for Mobile CTA */}
        <div ref={stickyBarRef} className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a href="https://pelagosdemo.vercel.app/" className="flex items-center justify-center w-full bg-brand-primary text-white font-medium py-3 rounded-full shadow-md active:scale-[0.97] transition-transform duration-150">
            Explore the demo
          </a>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
