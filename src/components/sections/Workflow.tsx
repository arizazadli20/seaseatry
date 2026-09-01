import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function Workflow() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Timeline draw animation on desktop
    const line = containerRef.current?.querySelector('.timeline-track');
    const nodes = containerRef.current?.querySelectorAll('.timeline-node');
    const texts = containerRef.current?.querySelectorAll('.timeline-content');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        once: true
      }
    });

    if (line) {
      gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });
      tl.to(line, { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }, 0);
    }

    if (nodes) {
      tl.fromTo(nodes,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' },
        0.2
      );
    }

    if (texts) {
      tl.fromTo(texts,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        0.3
      );
    }

    // Mobile Auto-scroll hint
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      // Wait for the intro animation to finish, then slowly auto-scroll to the right
      gsap.to(scrollContainerRef.current, {
        scrollLeft: 800, // Scroll enough to show the next steps
        duration: 15,
        ease: 'none',
        delay: 2.5,
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: 'top 80%',
        }
      });
      
      // Stop auto-scrolling if the user touches the container
      const stopScroll = () => gsap.killTweensOf(scrollContainerRef.current);
      scrollContainerRef.current.addEventListener('touchstart', stopScroll, { once: true });
      scrollContainerRef.current.addEventListener('mousedown', stopScroll, { once: true });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="workflow" className="py-24 md:py-32 bg-[#F9FAFB] relative z-20 border-y border-gray-100">
      <div className="container mx-auto max-w-7xl px-[20px] md:px-6">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-[clamp(2.25rem,6vw,3.5rem)] font-bold text-[#2A2B3B] tracking-tight mb-4 leading-tight">
            {siteCopy.workflow.title}
          </h2>
          <p className="text-[18px] text-gray-500 max-w-3xl leading-relaxed">
            {siteCopy.workflow.description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-[28px] left-[28px] right-[28px] h-[2px] bg-gray-200 timeline-track z-0"></div>

          {/* Mobile scroll container / Desktop grid */}
          <div 
            ref={scrollContainerRef}
            className="flex md:grid md:grid-cols-5 gap-6 md:gap-4 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-[20px] px-[20px] md:mx-0 md:px-0"
          >
            {/* Mobile connecting line (only visible on mobile, moves with scroll) */}
            <div className="md:hidden absolute top-[28px] left-[20px] h-[2px] bg-gray-200 z-0 timeline-track" style={{ width: '400vw' }}></div>

            {siteCopy.workflow.steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col shrink-0 w-[85vw] sm:w-[50vw] md:w-auto snap-center md:snap-align-none">
                
                {/* Node Circle */}
                <div 
                  className="timeline-node w-[56px] h-[56px] rounded-full flex items-center justify-center text-[18px] font-semibold mb-6 border-[2px]"
                  style={{ 
                    borderColor: step.color,
                    backgroundColor: step.bgColor,
                    color: step.color
                  }}
                >
                  {step.id}
                </div>

                {/* Content */}
                <div className="timeline-content pr-8 md:pr-4">
                  <h3 className="text-[20px] font-bold text-[#2A2B3B] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
