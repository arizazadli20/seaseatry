import { siteCopy } from '../../content/copy';

export function LivePlatform() {
  return (
    <section className="scroll-mt-14 md:scroll-mt-20 py-14 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-[20px] md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            {siteCopy.livePlatform.label}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-2xl mx-auto">
            {siteCopy.livePlatform.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Active Incidents */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 relative flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute top-4 right-4 text-[13px] font-mono tracking-widest text-brand-primary bg-brand-light/30 px-2 py-1 rounded">SIMULATED</div>
             <div className="text-sm font-bold text-gray-500 uppercase mb-8">Active Incidents</div>
             <div className="text-6xl font-bold text-gray-900 tracking-tighter mb-2">6</div>
             <div className="text-base text-gray-500">Open cases under review</div>
          </div>

          {/* Card 2: Sea & Weather */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 relative flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute top-4 right-4 text-[13px] font-mono tracking-widest text-brand-primary bg-brand-light/30 px-2 py-1 rounded">SIMULATED</div>
             <div className="flex justify-between items-start mb-8">
               <div className="text-sm font-bold text-gray-500 uppercase">Sea & Weather</div>
             </div>
             
             <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                   <div className="text-base text-gray-900 font-medium">Wind</div>
                   <div className="text-lg font-bold text-gray-900">11.8 <span className="text-sm font-normal text-gray-500">kt</span></div>
                </div>
                <div className="flex items-center justify-between">
                   <div className="text-base text-gray-900 font-medium">Waves</div>
                   <div className="text-lg font-bold text-gray-900">0.6 <span className="text-sm font-normal text-gray-500">m</span></div>
                </div>
             </div>
          </div>

          {/* Card 3: Detected vs Cleaned Area */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 relative flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute top-4 right-4 text-[13px] font-mono tracking-widest text-brand-primary bg-brand-light/30 px-2 py-1 rounded">SIMULATED</div>
             <div className="text-sm font-bold text-gray-500 uppercase mb-8">Detected vs Cleaned</div>
             
             <div className="flex flex-col gap-4">
                <div>
                  <div className="text-base text-gray-500 mb-1">Detected Area</div>
                  <div className="text-2xl font-bold text-gray-900">5,760 <span className="text-sm font-normal text-gray-500">m²</span></div>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div>
                  <div className="text-base text-brand-primary font-medium mb-1">Cleaned Area</div>
                  <div className="text-2xl font-bold text-brand-primary">2,320 <span className="text-sm font-normal opacity-70">m²</span></div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
