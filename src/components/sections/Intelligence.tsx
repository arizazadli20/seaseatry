import { siteCopy } from '../../content/copy';

export function Intelligence() {
  const { ai, satellite, vessel } = siteCopy.intelligence;

  return (
    <section className="py-24 border-b border-gray-200 bg-gray-50/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* AI Intelligence */}
          <div className="p-8 border border-gray-200 bg-white flex flex-col h-full hover:border-brand-primary/30 transition-colors">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-brand-primary text-brand-primary rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">{ai.title}</h3>
            <p className="text-gray-500 mb-6 flex-grow">{ai.description}</p>
            <div className="text-xs font-mono text-brand-primary bg-brand-primary/5 p-3 rounded border border-brand-primary/10">
              {ai.pipeline}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 text-sm font-medium text-gray-900 text-center">
              {siteCopy.global.aiMantra}
            </div>
          </div>

          {/* Satellite Observation */}
          <div className="p-8 border border-gray-200 bg-white flex flex-col h-full hover:border-brand-primary/30 transition-colors">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-gray-200 text-gray-900 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 2 4 10-4 10-4-10z"/></svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">{satellite.title}</h3>
            <p className="text-gray-500 mb-6 flex-grow">{satellite.description}</p>
            <div className="text-xs font-mono text-gray-500 p-3">
              {satellite.note}
            </div>
          </div>

          {/* Vessel Intelligence */}
          <div className="p-8 border border-gray-200 bg-white flex flex-col h-full hover:border-brand-primary/30 transition-colors">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-gray-200 text-gray-900 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M5 12v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M10 20l2-2 2 2"/><path d="M12 18v4"/></svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">{vessel.title}</h3>
            <p className="text-gray-500 mb-6 flex-grow">{vessel.description}</p>
            <div className="text-xs text-gray-500 p-3 bg-gray-50/50 rounded italic">
              "Vessel intelligence can help investigators understand the surrounding maritime context."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
