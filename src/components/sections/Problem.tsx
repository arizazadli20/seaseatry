import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function Problem() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Radius flatten
    gsap.fromTo(containerRef.current,
      { borderTopLeftRadius: '28px', borderTopRightRadius: '28px' },
      {
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        }
      }
    );

    // Line Mask C
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

    // Image Parallax (0.85x speed means it moves 15% relative to scroll)
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#0B1121] py-16 md:py-24 relative overflow-hidden z-20 shadow-2xl">
      <div className="w-full px-[20px] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Tile (Parallax) */}
          <div className="order-2 lg:order-1 h-[300px] lg:h-[500px] rounded-[28px] overflow-hidden relative bg-gray-900 border border-white/10 -mx-[20px] lg:mx-0 pr-[20px] lg:pr-0 pl-[20px] lg:pl-0">
             <div ref={imageRef} className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-gray-800 bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1a2436 0%, #0B1121 100%)' }}>
               {/* Abstract placeholder for the tile */}
               <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-full h-full" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none">
                    <circle cx="50" cy="50" r="20" />
                    <circle cx="50" cy="50" r="40" />
                 </svg>
               </div>
             </div>
          </div>

          <div ref={textRef} className="order-1 lg:order-2 flex flex-col justify-center text-white">
             {/* 4-point mark */}
             <div className="w-6 h-6 mb-8 text-brand-primary opacity-80">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
             </div>
             
             <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-[1.05] tracking-tighter mb-6">
               <div className="overflow-hidden"><div className="line-mask block">{siteCopy.problem.title}</div></div>
             </h2>
             
             <div className="text-[16px] leading-[1.55] text-gray-400 font-light max-w-md">
                {siteCopy.problem.description.split('. ').map((sentence, i, arr) => (
                   <div key={i} className="overflow-hidden">
                     <div className="line-mask block">{sentence}{i < arr.length - 1 ? '.' : ''}</div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
