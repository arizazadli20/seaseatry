import { teamMembers } from '../../content/team';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Team() {
  return (
    <section className="py-16 md:py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-0 md:px-6">
        <div className="text-center mb-12 md:mb-16 px-6">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            Built by a Multidisciplinary Team
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <SnapCarousel 
            ariaLabel="Team Members" 
            desktopGridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            autoAdvance={true}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="p-6 border border-gray-200 bg-white rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow h-full">
                <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 flex items-center justify-center text-gray-400 overflow-hidden border border-gray-100 shrink-0">
                  {member.photoUrl === '/placeholder-avatar.svg' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  ) : (
                    <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                  )}
                </div>
                <h3 className="text-gray-900 font-medium mb-1">{member.name}</h3>
                <p className="text-[10px] md:text-xs font-mono text-brand-primary mb-3">{member.role}</p>
                <p className="text-[10px] md:text-xs text-gray-500">{member.responsibility}</p>
              </div>
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  );
}
