import React, { useEffect, useRef, useState } from 'react';
import { cn } from './Button'; // Reusing cn utility

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

  // Intersection Observer for dots
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to find the one most in view
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const activeElement = visibleEntries[0].target as HTMLElement;
          const index = parseInt(activeElement.dataset.index || '0', 10);
          setActiveIndex(index);
        }
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    const childrenElements = container.querySelectorAll('[data-carousel-item]');
    childrenElements.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children.length]);

  // Auto-advance logic
  useEffect(() => {
    if (!autoAdvance || userInteracted) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const intervalId = setInterval(() => {
      // Only auto-advance on mobile (where it actually scrolls)
      if (window.innerWidth >= 768) return;

      const childrenElements = container.querySelectorAll('[data-carousel-item]');
      if (childrenElements.length === 0) return;

      let nextIndex = activeIndex + 1;
      if (nextIndex >= childrenElements.length) {
        nextIndex = 0;
      }

      const nextElement = childrenElements[nextIndex] as HTMLElement;
      if (nextElement) {
        // Scroll to the next element
        container.scrollTo({
          left: nextElement.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [autoAdvance, userInteracted, activeIndex]);

  const handleInteraction = () => {
    setUserInteracted(true);
  };

  return (
    <div className="relative">
      <div 
        ref={scrollContainerRef}
        className={cn(
          "flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x",
          "md:grid md:overflow-visible", // Switch to grid on desktop
          "scrollbar-none", // Hide scrollbar (requires CSS update)
          "scroll-padding-inline", // Padding for snapping
          desktopGridClassName
        )}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onScroll={handleInteraction}
        onTouchStart={handleInteraction}
        onFocus={handleInteraction}
        onKeyDown={() => {
          handleInteraction();
          // Allow arrow keys to scroll natively
        }}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          const isDesktopOnly = (child as any).props['data-desktop-only'] === true;
          
          if (isDesktopOnly) {
            return (
              <div className="hidden md:block md:col-span-full">
                {child}
              </div>
            );
          }

          return (
            <div 
              data-carousel-item 
              data-index={index}
              className="shrink-0 w-[min(82vw,340px)] snap-center md:w-auto md:shrink"
            >
              {child}
            </div>
          );
        })}
      </div>

      {/* Dots Indicator (Mobile Only) */}
      <div className="flex md:hidden justify-center gap-2 mt-6">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-brand-primary w-4" : "bg-gray-300"
            )}
            onClick={() => {
              handleInteraction();
              const container = scrollContainerRef.current;
              const target = container?.querySelector(`[data-index="${index}"]`) as HTMLElement;
              if (target && container) {
                container.scrollTo({
                  left: target.offsetLeft - container.offsetLeft,
                  behavior: 'smooth'
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
