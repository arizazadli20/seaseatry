import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function LivePlatform() {
  const containerRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(frameRef.current,
      { y: 60, scale: 0.96, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 relative z-20">
      <div className="container mx-auto px-[20px] md:px-6 max-w-7xl text-center">
        <h2 className="text-[13px] font-mono text-brand-primary tracking-widest uppercase mb-4">
          {siteCopy.livePlatform.label}
        </h2>
        <h3 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 tracking-tight max-w-2xl mx-auto mb-16 leading-[1.05]">
          {siteCopy.livePlatform.title}
        </h3>

        <div ref={frameRef} className="max-w-4xl mx-auto rounded-[28px] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] relative flex items-center justify-center">
           <div className="absolute inset-0 bg-[#0B1121] flex flex-col items-center justify-center text-white/50">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
             <span className="text-sm font-mono tracking-widest uppercase">Dashboard Interface Preview</span>
           </div>
        </div>
      </div>
    </section>
  );
}
