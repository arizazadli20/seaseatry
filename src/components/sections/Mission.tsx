import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function Mission() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Draw corner brackets
    const corners = contentRef.current?.querySelectorAll('.corner-bracket');
    if (corners) {
      gsap.fromTo(corners,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }

    // Stagger text elements
    const elements = contentRef.current?.querySelectorAll('.mission-reveal');
    if (elements) {
      gsap.fromTo(elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[90svh] flex items-center justify-center overflow-hidden bg-[#0B1121]">
      {/* Placeholder Background Image (User will provide final) */}
      <img
        ref={bgRef}
        src="/hero-poster.jpg"
        alt="Mission Background"
        className="absolute inset-0 w-full h-[115%] object-cover object-center -top-[7.5%]"
        style={{ filter: 'saturate(0.2) brightness(0.4)' }}
      />
      
      {/* Overlay to ensure legibility */}
      <div className="absolute inset-0 bg-[#0B1121]/60" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-[20px] md:px-6 w-full flex justify-center py-24">
        
        <div ref={contentRef} className="relative max-w-4xl w-full px-6 py-12 md:px-16 md:py-20 flex flex-col items-center text-center">
          
          {/* Animated Corner Brackets */}
          <div className="corner-bracket absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t border-l border-white/30 origin-top-left" />
          <div className="corner-bracket absolute top-0 right-0 w-6 h-6 md:w-10 md:h-10 border-t border-r border-white/30 origin-top-right" />
          <div className="corner-bracket absolute bottom-0 left-0 w-6 h-6 md:w-10 md:h-10 border-b border-l border-white/30 origin-bottom-left" />
          <div className="corner-bracket absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b border-r border-white/30 origin-bottom-right" />

          {/* Label */}
          <div className="mission-reveal text-[13px] font-mono tracking-widest text-white/70 uppercase mb-8">
            [ SEASENTRY ]
          </div>

          {/* Headline */}
          <h2 className="mission-reveal text-[clamp(2rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tighter mb-8 max-w-3xl">
            PROTECTING THE NEXT<br className="hidden md:block"/> GENERATION OF THE<br className="hidden md:block"/> CASPIAN SEA.
          </h2>

          {/* Description */}
          <p className="mission-reveal text-[16px] md:text-[18px] text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            SeaSentry — a satellite and AI platform for oil spill intelligence — turns orbital data into operational response. Through SAR detection, AI risk analysis, and bio-sorbent recovery, response teams act in hours instead of days.
          </p>

          {/* Button */}
          <a href={siteCopy.global.demoUrl} className="mission-reveal group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-[13px] font-medium tracking-widest text-white uppercase border border-white/30 hover:border-white transition-colors duration-300">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">LEARN MORE</span>
            <div className="absolute inset-0 bg-white scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />
          </a>

        </div>
      </div>
    </section>
  );
}
