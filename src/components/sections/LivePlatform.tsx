import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteCopy } from '../../content/copy';

export function LivePlatform() {
  const containerRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(frameRef.current,
      { y: 60, scale: 0.96, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 relative z-20">
      <div className="container mx-auto px-[20px] md:px-6 max-w-7xl text-center">
        <h2 className="text-[13px] font-mono text-brand-primary tracking-widest uppercase mb-4">
          {siteCopy.livePlatform.label}
        </h2>
        <h3 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 tracking-tight max-w-2xl mx-auto mb-16 leading-[1.05]">
          {siteCopy.livePlatform.title}
        </h3>

        <a 
          href={siteCopy.global.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          aria-label="Open Dashboard Demo"
        >
          <div ref={frameRef} className="max-w-4xl mx-auto rounded-[28px] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
             <div className="absolute inset-0 bg-[#0B1121]">
               {shouldLoadVideo ? (
                 <video
                   ref={videoRef}
                   autoPlay
                   muted
                   loop
                   playsInline
                   preload="metadata"
                   poster="/dashboard-poster.jpg"
                   className="w-full h-full object-cover object-center"
                 >
                   <source src="/dashboard.webm" type="video/webm" />
                   <source src="/dashboard.mp4" type="video/mp4" />
                 </video>
               ) : (
                 <img
                   src="/dashboard-poster.jpg"
                   alt="Dashboard Interface Preview"
                   className="w-full h-full object-cover object-center"
                 />
               )}
               {/* Play/External Link Overlay Icon on Hover */}
               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                 <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                 </div>
               </div>
             </div>
          </div>
        </a>
      </div>
    </section>
  );
}
