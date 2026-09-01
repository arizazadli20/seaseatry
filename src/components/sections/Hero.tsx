import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true);

  // Check for reduced motion / save-data / slow connection
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData;
    const slowConnection = conn?.effectiveType === '2g' || conn?.effectiveType === '3g';

    if (prefersReduced || saveData || slowConnection) {
      setShouldLoadVideo(false);
    }
  }, []);

  // Pause video when off-screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Mask-reveal text blocks staggered 120ms
    const blocks = containerRef.current?.querySelectorAll('.hero-reveal');
    if (blocks) {
      gsap.fromTo(blocks,
        { y: '110%' },
        { y: '0%', duration: 0.8, stagger: 0.12, ease: 'cubic-bezier(0.16, 1, 0.3, 1)', delay: 0.3 }
      );
    }

    // Grid hairlines draw from centre outward
    const hLines = containerRef.current?.querySelectorAll('.grid-line');
    if (hLines) {
      gsap.fromTo(hLines,
        { scaleX: 0, scaleY: 0 },
        { scaleX: 1, scaleY: 1, duration: 0.9, ease: 'power2.out', delay: 0.2, stagger: 0.05 }
      );
    }

    // Crosshair fade in
    const crosshair = containerRef.current?.querySelector('.crosshair');
    if (crosshair) {
      gsap.fromTo(crosshair, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.8 });
    }

    // Scroll-out: video scales 1 → 1.06, overlay darkens
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      }
    });

    tl.to(videoRef.current, { scale: 1.06, ease: 'none' }, 0)
      .to(overlayRef.current, { backgroundColor: 'rgba(11, 17, 33, 0.75)', ease: 'none' }, 0);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-[100svh] overflow-hidden">
      {/* Video / Poster */}
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'saturate(0.4) brightness(0.78)' }}
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'saturate(0.4) brightness(0.78)' }}
        />
      )}

      {/* Directional Scrims */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none transition-colors duration-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,26,35,0.88)_0%,rgba(11,26,35,0.55)_38%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,26,35,0.55),transparent_60%)]" />
      </div>

      {/* Technical Grid */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Vertical line at 50% */}
        <div className="grid-line absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] origin-center" />
        {/* Horizontal line at 62% */}
        <div className="grid-line absolute top-[62%] left-0 right-0 h-px bg-white/[0.08] origin-center" />
        {/* Crosshair at intersection */}
        <div className="crosshair absolute z-30" style={{ left: 'calc(50% - 10px)', top: 'calc(62% - 10px)' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
            <line x1="10" y1="0" x2="10" y2="20" />
            <line x1="0" y1="10" x2="20" y2="10" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between px-[20px] py-[20px]">

        {/* Upper-left block ~50% down */}
        <div className="mt-[50svh] md:mt-[45svh]">
          <div className="overflow-hidden">
            <div className="hero-reveal text-[12px] uppercase tracking-[0.06em] text-white/90 font-medium leading-[1.5] max-w-[280px] md:max-w-[320px] flex">
              <span className="text-brand-primary mr-1.5 shrink-0">/</span>
              <div>
                CASPIAN SEA — SATELLITE & AI<br />
                OIL SPILL INTELLIGENCE
              </div>
            </div>
          </div>
        </div>

        {/* Right-aligned block, below crosshair */}
        <div className="absolute right-[20px] top-[66%] text-right">
          <div className="overflow-hidden">
            <div className="hero-reveal text-[13px] uppercase tracking-[0.06em] text-white/90 font-medium leading-relaxed">
              AI ADVISES.<br />
              HUMANS DECIDE.
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Bottom headline */}
        <div className="mb-[90px]">
          <div className="overflow-hidden">
            <h1 className="hero-reveal text-[clamp(2.5rem,12vw,4rem)] font-bold uppercase leading-[0.92] tracking-tighter">
              <span className="text-white block">DETECT. TREAT.</span>
              <span className="text-brand-primary block">RECYCLE.</span>
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
}
