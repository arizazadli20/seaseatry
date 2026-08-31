import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function CaspianContext() {
  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Line mask C for text
    const lines = textRef.current?.querySelectorAll('.line-mask');
    if (lines) {
      gsap.fromTo(lines,
        { y: '110%' },
        {
          y: '0%',
          duration: 0.9,
          stagger: 0.08,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }

    // SVG Draw
    const path = svgRef.current?.querySelector('.coastline') as SVGPathElement;
    const marker = svgRef.current?.querySelector('.marker');
    
    if (path && marker) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 75%',
          once: true
        }
      });

      tl.to(path, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' })
        .fromTo(marker, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }, "-=0.2")
        // Pulse twice and stop
        .to(marker, { scale: 1.5, opacity: 0.5, duration: 0.3, yoyo: true, repeat: 3, ease: 'power1.inOut' });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white relative z-20">
      <div className="container mx-auto px-[20px] md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={textRef} className="order-2 lg:order-1 flex flex-col justify-center">
             {/* 4-point mark */}
             <div className="w-6 h-6 mb-8 text-brand-primary">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
             </div>
             
             <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] font-bold text-gray-900 tracking-tighter mb-6 leading-[1.05]">
               <div className="overflow-hidden"><div className="line-mask block">{siteCopy.caspian.title}</div></div>
             </h2>
             
             <div className="text-[16px] leading-[1.55] text-gray-500 font-light mb-8 max-w-md">
               {siteCopy.caspian.description.split('. ').map((sentence, i, arr) => (
                 <div key={i} className="overflow-hidden">
                   <div className="line-mask block">{sentence}{i < arr.length - 1 ? '.' : ''}</div>
                 </div>
               ))}
             </div>

             <div className="space-y-4">
               {siteCopy.caspian.bullets.map((bullet, idx) => (
                 <div key={idx} className="flex items-start overflow-hidden">
                   <div className="line-mask flex items-start">
                     <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-primary mr-4 shrink-0"></div>
                     <p className="text-[16px] text-gray-900 font-medium">{bullet}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="order-1 lg:order-2 relative aspect-[4/3] w-full bg-gray-50 rounded-[28px] overflow-hidden -mx-[20px] lg:mx-0 pr-[20px] lg:pr-0 pl-[20px] lg:pl-0 flex items-center justify-center border border-gray-100">
            <svg ref={svgRef} viewBox="0 0 400 600" className="w-full h-full opacity-60" fill="none" stroke="currentColor">
              <path 
                className="coastline"
                d="M150,50 Q180,80 190,120 T210,180 Q230,220 220,260 T190,320 Q160,380 180,450 T200,520 Q220,550 250,540 T300,500 Q320,450 300,400 T270,330 Q250,280 280,240 T310,180 Q320,120 280,80 T200,40 Z" 
                stroke="#1E2A40" strokeWidth="1.5" fill="#F9FAFB" 
              />
              <circle className="marker" cx="210" cy="180" r="4" fill="#00E5FF" />
            </svg>
            <div className="absolute bottom-6 left-6 text-[13px] font-mono text-gray-500 uppercase tracking-widest">
              VECTOR RENDERING
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
