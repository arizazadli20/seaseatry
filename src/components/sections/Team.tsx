import { teamMembers } from '../../content/team';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Team() {
  return (
    <section className="py-16 lg:py-32 bg-gray-50/30 scroll-mt-14 md:scroll-mt-20">
      <div className="container mx-auto px-0 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <SnapCarousel 
            ariaLabel="Team Members" 
            desktopGridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
            autoAdvance={true}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center h-full px-6 lg:px-0">
                <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-gray-400 overflow-hidden shrink-0">
                  {member.photoUrl === '/placeholder-avatar.svg' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  ) : (
                    <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">{member.name}</h3>
                <p className="text-[13px] md:text-[13px] font-mono text-brand-primary mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-base text-gray-500 font-light">{member.responsibility}</p>
              </div>
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  );
}
