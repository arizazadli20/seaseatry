import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function FinalCta() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

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

    const lines = textRef.current?.querySelectorAll('.mask-line');
    if (lines) {
      gsap.fromTo(lines,
        { y: '110%' },
        {
          y: '0%',
          duration: 0.9,
          stagger: 0.2,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }
    
    gsap.fromTo(btnRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        },
        delay: 0.6 // wait for text lines
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#0B1121] py-24 md:py-32 px-[20px] md:px-6 text-center flex flex-col items-center justify-center min-h-[60vh] relative z-20">
      <div ref={textRef} className="text-[clamp(2.25rem,8vw,4rem)] font-bold tracking-tighter text-white leading-[1.05] mb-12">
        {siteCopy.finalCta.lines.map((line, idx) => (
          <div key={idx} className="overflow-hidden">
            <div className="mask-line block">{line}</div>
          </div>
        ))}
      </div>
      
      <a 
        ref={btnRef}
        href={siteCopy.global.demoUrl} 
        className="inline-block border border-brand-primary/50 text-brand-primary font-medium px-8 py-3 rounded-full hover:bg-brand-primary/10 transition-colors duration-150 active:scale-[0.97]"
      >
        {siteCopy.livePlatform.cta}
      </a>
    </section>
  );
}
