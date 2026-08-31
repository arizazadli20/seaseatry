import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Workflow() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Numbers fade from 0.15 to 1
    const cards = containerRef.current?.querySelectorAll('.workflow-card');
    if (cards) {
       const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
           const num = entry.target.querySelector('.workflow-num');
           if (entry.isIntersecting && num) {
             gsap.to(num, { opacity: 1, duration: 0.6, ease: 'power2.out' });
           } else if (num) {
             gsap.to(num, { opacity: 0.15, duration: 0.6, ease: 'power2.out' });
           }
         });
       }, { threshold: 0.6 });
       
       cards.forEach(c => observer.observe(c));
       return () => observer.disconnect();
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="workflow" className="py-24 bg-gray-50 border-y border-gray-100 relative z-20">
      <div className="container mx-auto px-0 md:px-6">
        <div className="max-w-5xl mx-auto relative">
          <SnapCarousel 
            ariaLabel="Workflow stages" 
            desktopGridClassName="grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
            autoAdvance={false}
          >
            {siteCopy.workflow.steps.map((step, idx) => (
              <div key={step.id} className="workflow-card relative flex flex-col h-full px-[20px] lg:px-0">
                <div className="flex items-center mb-8">
                  <div className="workflow-num w-16 h-16 shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center text-2xl font-mono text-gray-900 z-10 opacity-[0.15]">
                    {step.id}
                  </div>
                  {(idx !== 2 && idx !== 5) && <div className="hidden lg:block h-px bg-gray-200 flex-grow ml-6"></div>}
                </div>
                
                {step.id === "04" && (
                   <div className="text-[13px] font-mono tracking-widest text-brand-primary uppercase mb-3">
                     AI advises. Humans decide.
                   </div>
                )}
                
                <h3 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-gray-900 mb-4 leading-tight tracking-tight">{step.title}</h3>
                <p className="text-gray-500 leading-[1.55] text-[16px] font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  );
}
