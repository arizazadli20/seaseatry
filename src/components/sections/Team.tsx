import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { teamMembers } from '../../content/team';

export function Team() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Continuous Marquee (Left to Right) for Team
    const track = trackRef.current;
    if (track) {
      // Calculate total width of one set of cards
      const scrollWidth = track.scrollWidth / 2;
      
      gsap.to(track, {
        x: -scrollWidth,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

      // Grayscale to Color intersection observer (keep the cool effect)
      const cards = containerRef.current?.querySelectorAll('.team-card');
      if (cards) {
         const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
             const img = entry.target.querySelector('img');
             if (!img) return;
             
             if (entry.isIntersecting) {
               gsap.to(img, { filter: 'grayscale(0%)', duration: 0.6, ease: 'power2.out' });
             } else {
               gsap.to(img, { filter: 'grayscale(100%)', duration: 0.6, ease: 'power2.out' });
             }
           });
         }, { threshold: 0.6, rootMargin: '0px -10% 0px -10%' });
         
         cards.forEach(c => observer.observe(c));
         return () => observer.disconnect();
      }
    }
  }, { scope: containerRef });

  // Double the team members for seamless looping
  const doubledMembers = [...teamMembers, ...teamMembers];

  return (
    <section ref={containerRef} id="team" className="py-24 bg-white relative z-20 overflow-hidden">
      <div className="container mx-auto px-0 lg:px-6 max-w-7xl">
        <div className="text-center mb-16 px-[20px]">
          <div className="w-6 h-6 mx-auto mb-6 text-brand-primary">
             <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
          </div>
        </div>
        
        {/* Continuous Marquee Track */}
        <div className="relative w-full overflow-hidden">
           {/* Fade masks on edges for modern feel */}
           <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
           <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
           
           <div 
             ref={trackRef} 
             className="flex w-max gap-8 md:gap-16 px-[20px] md:px-0"
           >
             {doubledMembers.map((member, idx) => (
               <div key={`${member.id}-${idx}`} className="team-card w-[240px] md:w-[280px] shrink-0 flex flex-col items-center text-center">
                 <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-gray-400 overflow-hidden shrink-0 border border-gray-200">
                   {member.photoUrl === '/placeholder-avatar.svg' ? (
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                   ) : (
                     <img 
                       src={member.photoUrl} 
                       alt={member.name} 
                       className="w-full h-full object-cover object-top"
                       loading="lazy"
                     />
                   )}
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">{member.name}</h3>
                 <p className="text-[13px] font-mono text-brand-primary mb-3 uppercase tracking-wider">{member.role}</p>
                 <p className="text-base text-gray-500 font-light">{member.responsibility}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
