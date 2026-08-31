import { siteCopy } from '../../content/copy';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Intelligence() {
  const { ai, satellite, vessel } = siteCopy.intelligence;

  return (
    <section className="py-16 lg:py-32 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-0 lg:px-6 max-w-7xl">
        <SnapCarousel 
          ariaLabel="Intelligence Pillars" 
          desktopGridClassName="grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 lg:divide-x divide-gray-100"
          autoAdvance={true}
        >
          {/* AI Intelligence */}
          <div className="flex flex-col h-full lg:pr-8 px-6 lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-brand-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{ai.title}</h3>
            <p className="text-gray-500 font-light text-lg mb-6 flex-grow">{ai.description}</p>
          </div>

          {/* Satellite Observation */}
          <div className="flex flex-col h-full lg:px-8 px-6 lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 2 4 10-4 10-4-10z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{satellite.title}</h3>
            <p className="text-gray-500 font-light text-lg mb-6 flex-grow">{satellite.description}</p>
            <div className="text-[10px] uppercase tracking-widest font-mono text-brand-primary">
              {satellite.note}
            </div>
          </div>

          {/* Vessel Intelligence */}
          <div className="flex flex-col h-full lg:pl-8 px-6 lg:px-0">
            <div className="w-12 h-12 mb-8 flex items-center justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M5 12v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M10 20l2-2 2 2"/><path d="M12 18v4"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{vessel.title}</h3>
            <p className="text-gray-500 font-light text-lg flex-grow">{vessel.description}</p>
          </div>

        </SnapCarousel>
      </div>
    </section>
  );
}
