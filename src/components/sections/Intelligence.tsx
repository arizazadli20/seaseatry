import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Intelligence() {
  const containerRef = useRef<HTMLElement>(null);
  const { ai, satellite, vessel } = siteCopy.intelligence;

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Clip wipe upward tied to scroll
    gsap.fromTo(containerRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true
        }
      }
    );
    
    // Cards tilt 3deg into place as they enter
    const cards = containerRef.current?.querySelectorAll('.intelligence-card');
    if (cards) {
       // Since it's a native scroll container, we use a simple IntersectionObserver to trigger the animation
       const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             gsap.fromTo(entry.target, 
               { rotate: 3, opacity: 0.8 }, 
               { rotate: 0, opacity: 1, duration: 0.8, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }
             );
           }
         });
       }, { threshold: 0.5 });
       
       cards.forEach(c => observer.observe(c));
       return () => observer.disconnect();
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="scroll-mt-14 md:scroll-mt-20 py-24 lg:py-32 bg-[#0B1121] relative z-20">
      <div className="container mx-auto px-0 lg:px-6 max-w-7xl">
        <SnapCarousel 
          ariaLabel="Intelligence Pillars" 
          desktopGridClassName="grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 lg:divide-x divide-white/10"
          autoAdvance={true}
        >
          {/* AI Intelligence */}
          <div className="intelligence-card flex flex-col h-full lg:pr-8 px-[20px] lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-brand-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{ai.title}</h3>
            <p className="text-gray-400 font-light text-base md:text-lg mb-6 flex-grow">{ai.description}</p>
          </div>

          {/* Satellite Observation */}
          <div className="intelligence-card flex flex-col h-full lg:px-8 px-[20px] lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 2 4 10-4 10-4-10z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{satellite.title}</h3>
            <p className="text-gray-400 font-light text-base md:text-lg mb-6 flex-grow">{satellite.description}</p>
            <div className="text-[13px] uppercase tracking-widest font-mono text-brand-primary">
              {satellite.note}
            </div>
          </div>

          {/* Vessel Intelligence */}
          <div className="intelligence-card flex flex-col h-full lg:pl-8 px-[20px] lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M5 12v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M10 20l2-2 2 2"/><path d="M12 18v4"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{vessel.title}</h3>
            <p className="text-gray-400 font-light text-base md:text-lg flex-grow">{vessel.description}</p>
          </div>

        </SnapCarousel>
      </div>
    </section>
  );
}
