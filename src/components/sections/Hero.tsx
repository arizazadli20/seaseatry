import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const tl = gsap.timeline();

    // Mask-reveal headline lines
    const lines = headlineRef.current?.querySelectorAll('.line-reveal');
    if (lines) {
      tl.fromTo(lines, 
        { y: '110%' }, 
        { y: '0%', duration: 0.9, stagger: 0.1, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );
    }

    // Scan line sweeps across graphic (2.4s, stops)
    const scanline = graphicRef.current?.querySelector('.scan-line');
    if (scanline) {
      tl.fromTo(scanline,
        { left: '-10%' },
        { left: '110%', duration: 2.4, ease: 'power2.inOut' },
        "-=0.5"
      );
    }

    // Sticky handoff out
    gsap.to(containerRef.current, {
      scale: 0.94,
      opacity: 0.4,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      }
    });

    gsap.to(headlineRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-[100svh] w-full bg-white relative overflow-hidden flex flex-col justify-center">
      <div className="w-full px-[20px] max-w-7xl mx-auto flex-grow flex flex-col pt-14 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
             <h1 ref={headlineRef} className="text-[clamp(2.5rem,10vw,3.25rem)] lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tighter mb-6">
               <div className="overflow-hidden"><div className="line-reveal block">See the spill.</div></div>
               <div className="overflow-hidden"><div className="line-reveal block">Understand the risk.</div></div>
               <div className="overflow-hidden"><div className="line-reveal block">Act.</div></div>
             </h1>
             
             <p className="text-[16px] leading-[1.55] text-gray-500 max-w-md font-light mb-8 lg:mb-12">
               {siteCopy.hero.supporting}
             </p>
          </div>

          <div ref={graphicRef} className="lg:col-span-5 h-[260px] lg:h-[400px] bg-gray-50 rounded-[28px] relative overflow-hidden flex flex-col shadow-sm">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm">
               {/* Decorative Marks */}
               <div className="absolute left-[15%] top-[25%] w-[70%] h-[50%] bg-brand-light/30 rounded-full blur-2xl"></div>
               {/* Sea Graphic */}
               <svg viewBox="0 0 100 100" className="w-full h-full opacity-20" preserveAspectRatio="none">
                 <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="#0B1121" />
                 <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="#4B5563" />
               </svg>
            </div>
            {/* Scan line */}
            <div className="scan-line absolute top-0 bottom-0 w-[4px] bg-brand-primary/50 blur-[2px] shadow-[0_0_12px_rgba(var(--brand-primary),0.8)] -left-[10%]"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
