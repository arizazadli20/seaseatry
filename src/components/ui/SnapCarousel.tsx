import React, { useEffect, useRef, useState } from 'react';
import { cn } from './Button'; 

interface SnapCarouselProps {
  children: React.ReactNode[];
  desktopGridClassName: string;
  autoAdvance?: boolean;
  ariaLabel: string;
}

export function SnapCarousel({ children, desktopGridClassName, autoAdvance = false, ariaLabel }: SnapCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for visibility (pause when off-screen)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    visibilityObserver.observe(container);
    return () => visibilityObserver.disconnect();
  }, []);

  // Intersection Observer for active dot
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const activeElement = visibleEntries[0].target as HTMLElement;
          const index = parseInt(activeElement.dataset.index || '0', 10);
          setActiveIndex(index);
        }
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    const childrenElements = container.querySelectorAll('[data-carousel-item]');
    childrenElements.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children.length]);

  // Auto-advance logic
  useEffect(() => {
    if (!autoAdvance || !isVisible) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    // If user interacted, don't auto-advance for 5 seconds, then resume
    if (userInteracted) {
      const resumeTimeout = setTimeout(() => {
        setUserInteracted(false);
      }, 5000);
      return () => clearTimeout(resumeTimeout);
    }

    const intervalId = setInterval(() => {
      // Apply on mobile & tablet (below 1024px)
      if (window.innerWidth >= 1024) return;

      const childrenElements = container.querySelectorAll('[data-carousel-item]');
      if (childrenElements.length === 0) return;

      let nextIndex = activeIndex + 1;
      if (nextIndex >= childrenElements.length) nextIndex = 0;

      const nextElement = childrenElements[nextIndex] as HTMLElement;
      if (nextElement) {
        container.scrollTo({
          left: nextElement.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }, 2500); // Faster interval for a more dynamic feel

    return () => clearInterval(intervalId);
  }, [autoAdvance, userInteracted, activeIndex, isVisible]);

  const handleInteraction = () => {
    setUserInteracted(true);
  };

  return (
    <div className="relative w-full">
      <div 
        ref={scrollContainerRef}
        className={cn(
          "flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x w-full pb-4 px-[9vw] gap-4",
          "lg:grid lg:overflow-visible lg:pb-0 lg:px-0 lg:gap-0", 
          "scrollbar-none", 
          "[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] lg:[mask-image:none]",
          desktopGridClassName
        )}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onPointerDown={handleInteraction}
        onTouchStart={handleInteraction}
        onFocus={handleInteraction}
        onKeyDown={() => handleInteraction()}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          const isDesktopOnly = (child as any).props['data-desktop-only'] === true;
          
          if (isDesktopOnly) {
            return (
              <div className="hidden lg:block lg:col-span-full">
                {child}
              </div>
            );
          }

          return (
            <div 
              data-carousel-item 
              data-index={index}
              className="shrink-0 w-[82vw] max-w-[340px] snap-center lg:w-auto lg:shrink lg:max-w-none"
            >
              {child}
            </div>
          );
        })}
      </div>

      {/* Continuous Progress Line (Mobile/Tablet Only) */}
      <div className="flex lg:hidden justify-center px-[9vw] mt-6">
        <div className="relative w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-brand-primary rounded-full transition-all duration-300 ease-out"
            style={{ 
              width: `${((activeIndex + 1) / Math.max(1, React.Children.count(children) - (React.Children.toArray(children).some(c => (c as any).props?.['data-desktop-only']) ? 1 : 0))) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
}
