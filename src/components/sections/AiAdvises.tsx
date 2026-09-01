import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function AiAdvises() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Clip wipe upward tied to scroll + parallax text slide
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
      }
    });

    tl.fromTo(containerRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', ease: 'none' },
      0
    ).fromTo(innerRef.current,
      { y: '25vh' },
      { y: '0vh', ease: 'none' },
      0
    );

    // Text mask-reveal sequence
    const lines = textRef.current?.querySelectorAll('.mask-line');
    if (lines) {
      gsap.fromTo(lines,
        { y: '110%' },
        {
          y: '0%',
          duration: 1,
          stagger: 0.12,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
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
    <section ref={containerRef} className="bg-[#0B1121] py-24 md:py-32 px-[20px] md:px-6 text-center flex flex-col items-center justify-center min-h-[50vh]">
      <div ref={innerRef}>
        <div ref={textRef} className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter text-white leading-tight">
          <div className="overflow-hidden"><div className="mask-line block">AI advises.</div></div>
          <div className="overflow-hidden"><div className="mask-line block text-brand-primary">Humans decide.</div></div>
        </div>
      </div>
    </section>
  );
}
