import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function Response() {
  const containerRef = useRef<HTMLElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

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

    // Status sequence illuminate
    const statuses = statusRef.current?.querySelectorAll('.status-item');
    if (statuses) {
      gsap.fromTo(statuses,
        { opacity: 0.2, filter: 'grayscale(1)' },
        {
          opacity: 1,
          filter: 'grayscale(0)',
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            once: true
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#0B1121] py-24 px-[20px] md:px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[13px] font-mono tracking-widest text-brand-primary uppercase mb-16">
          {siteCopy.response.title}
        </h2>
        
        <div ref={statusRef} className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center">
          {siteCopy.response.statuses.map((status, idx) => (
            <div key={idx} className="status-item flex items-center gap-4 border border-white/10 rounded-full px-6 py-4 bg-white/5">
              <div className={`w-3 h-3 rounded-full ${status.color} bg-current opacity-80 shadow-[0_0_12px_currentColor]`}></div>
              <span className="text-white font-medium tracking-tight text-lg">{status.label}</span>
              {idx < siteCopy.response.statuses.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-white/20 absolute -right-10 top-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
