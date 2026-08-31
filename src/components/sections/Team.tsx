import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { teamMembers } from '../../content/team';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Team() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
       }, { threshold: 0.6 });
       
       cards.forEach(c => observer.observe(c));
       return () => observer.disconnect();
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-0 lg:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-6 h-6 mx-auto mb-6 text-brand-primary">
             <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
          </div>
        </div>
        
        <SnapCarousel 
          ariaLabel="Team Members" 
          desktopGridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          autoAdvance={true}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card flex flex-col items-center text-center h-full px-[20px] lg:px-0">
              <div className="w-32 h-32 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-gray-400 overflow-hidden shrink-0 border border-gray-200">
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
        </SnapCarousel>
      </div>
    </section>
  );
}
