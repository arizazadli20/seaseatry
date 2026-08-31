import { siteCopy } from '../../content/copy';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Intelligence() {
  const { ai, satellite, vessel } = siteCopy.intelligence;

  return (
    <section className="scroll-mt-14 md:scroll-mt-20 py-14 md:py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-0 lg:px-6 max-w-7xl">
        <SnapCarousel 
          ariaLabel="Intelligence Pillars" 
          desktopGridClassName="grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 lg:divide-x divide-gray-100"
          autoAdvance={true}
        >
          {/* AI Intelligence */}
          <div className="flex flex-col h-full lg:pr-8 px-[20px] lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-brand-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{ai.title}</h3>
            <p className="text-gray-500 font-light text-base md:text-lg mb-6 flex-grow">{ai.description}</p>
          </div>

          {/* Satellite Observation */}
          <div className="flex flex-col h-full lg:px-8 px-[20px] lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 2 4 10-4 10-4-10z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{satellite.title}</h3>
            <p className="text-gray-500 font-light text-base md:text-lg mb-6 flex-grow">{satellite.description}</p>
            <div className="text-[10px] uppercase tracking-widest font-mono text-brand-primary">
              {satellite.note}
            </div>
          </div>

          {/* Vessel Intelligence */}
          <div className="flex flex-col h-full lg:pl-8 px-[20px] lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M5 12v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M10 20l2-2 2 2"/><path d="M12 18v4"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{vessel.title}</h3>
            <p className="text-gray-500 font-light text-base md:text-lg flex-grow">{vessel.description}</p>
          </div>

        </SnapCarousel>
      </div>
    </section>
  );
}
