import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';

export function LivePlatform() {
  return (
    <section className="py-24 border-b border-gray-100 bg-gray-50 relative overflow-hidden">
      {/* Halftone pattern to match Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Operational intelligence, end to end
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            From first satellite detection to coordinated cleanup — built for maritime and environmental response teams.
          </p>
          <Button href={siteCopy.global.demoUrl} variant="primary" className="rounded-full shadow-md shadow-brand-primary/20">
            {siteCopy.livePlatform.cta}
          </Button>
        </div>

        {/* Dashboard Mockup matching screenshot 2 */}
        <div className="w-full bg-white/95 backdrop-blur-md rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden flex flex-col mt-16 max-w-6xl mx-auto text-sm relative">
          
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase shadow-sm">
              {siteCopy.livePlatform.label}
            </div>
          </div>

          {/* Header */}
          <div className="h-14 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-none">SeaSentry</div>
                  <div className="text-[10px] text-gray-500">Satellite & AI Oil Spill Intelligence</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">00:45 AZT</span>
              <span className="text-[10px] px-2 py-1 bg-status-green-light text-status-green rounded-full font-bold uppercase tracking-wider flex items-center gap-1 border border-status-green/20">
                <div className="w-1.5 h-1.5 bg-status-green rounded-full animate-pulse"></div> System Online
              </span>
              <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className="text-xs hidden md:block">
                  <div className="font-medium text-gray-900">Admin User</div>
                  <div className="text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow flex bg-gray-50/50">
            {/* Sidebar */}
            <div className="w-16 border-r border-gray-200 bg-white flex flex-col items-center py-4 gap-6 text-gray-400 shrink-0">
              <div className="p-2 bg-brand-light text-brand-primary rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
              <div className="p-2 hover:bg-gray-100 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
              <div className="p-2 hover:bg-gray-100 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <div className="p-2 hover:bg-gray-100 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-4 md:p-6 flex flex-col gap-4 overflow-hidden">
              
              {/* Map & Weather row */}
              <div className="flex flex-col lg:flex-row gap-4 h-64 md:h-80">
                <div className="flex-grow bg-white border border-gray-200 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#F9FAFB] opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFMUUzRTYiLz48L3N2Zz4=')]"></div>
                  <div className="absolute top-4 left-4 bg-white border border-gray-200 p-3 rounded shadow-sm">
                    <div className="text-[10px] font-bold text-gray-900 uppercase">Caspian Sea Monitoring</div>
                    <div className="text-[10px] text-gray-500">Sentinel-1 SAR · AI analysis · Human review</div>
                  </div>
                  {/* Map points */}
                  <div className="w-16 h-16 bg-status-red/10 border border-status-red/30 rounded-full flex items-center justify-center animate-pulse relative z-10">
                    <div className="w-2 h-2 bg-status-red rounded-full"></div>
                  </div>
                </div>

                <div className="w-full lg:w-72 bg-white border border-gray-200 rounded-lg p-4 shrink-0 flex flex-col">
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-xs font-bold text-gray-900 uppercase">Sea & Weather</span>
                     <span className="text-xs text-gray-500">Baku Port</span>
                   </div>
                   <div className="grid grid-cols-3 gap-2 flex-grow">
                     <div className="border border-gray-100 rounded bg-gray-50 flex flex-col items-center justify-center p-2 text-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary mb-2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                       <div className="text-[10px] text-gray-500 uppercase">Wind</div>
                       <div className="text-lg font-bold text-gray-900 leading-none mt-1">11.8 kt</div>
                     </div>
                     <div className="border border-gray-100 rounded bg-gray-50 flex flex-col items-center justify-center p-2 text-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-status-yellow mb-2"><path d="M2 12h20"/><path d="M4 15h16"/><path d="M6 18h12"/></svg>
                       <div className="text-[10px] text-gray-500 uppercase">Waves</div>
                       <div className="text-lg font-bold text-gray-900 leading-none mt-1">0.6 m</div>
                     </div>
                     <div className="border border-gray-100 rounded bg-gray-50 flex flex-col items-center justify-center p-2 text-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-status-red mb-2"><path d="M12 2l4 10-4 10-4-10z"/></svg>
                       <div className="text-[10px] text-gray-500 uppercase">Current</div>
                       <div className="text-lg font-bold text-gray-900 leading-none mt-1">0.00 kt</div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: "Active Incidents", value: "6", sub: "Open cases", icon: "svg-alert", color: "text-status-red" },
                  { label: "High Risk", value: "4", sub: "Requires review", icon: "svg-shield", color: "text-status-yellow" },
                  { label: "Detected Area", value: "5,760 m²", sub: "Active spill footprint", icon: "svg-expand", color: "text-gray-400" },
                  { label: "Cleaned Area", value: "2,320 m²", sub: "Cleaning + resolved", icon: "svg-droplet", color: "text-brand-primary" },
                  { label: "AI Confidence", value: "85%", sub: "Avg. model prob.", icon: "svg-brain", color: "text-brand-primary" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="text-[10px] font-bold text-gray-500 uppercase mb-2 flex justify-between">
                      {stat.label}
                      <div className={`w-3 h-3 rounded-full ${stat.color} bg-current opacity-20`}></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-[10px] text-gray-500">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col md:flex-row gap-4 flex-grow min-h-[200px]">
                <div className="flex-grow bg-white border border-gray-200 rounded-lg p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                     <span className="text-xs font-bold text-gray-900 uppercase">Recent Incidents</span>
                     <span className="text-[10px] text-gray-500">9 records</span>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase grid grid-cols-5 gap-2 mb-2 px-2">
                    <div>ID</div><div className="col-span-2">LOCATION</div><div>RISK</div><div>STATUS</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-5 gap-2 text-xs items-center border border-gray-100 rounded p-2 bg-gray-50">
                      <div className="text-brand-primary">#024</div>
                      <div className="col-span-2 font-medium text-gray-900">Sangachal Coast</div>
                      <div><span className="px-2 py-0.5 bg-status-red-light text-status-red rounded font-medium text-[10px]">HIGH</span></div>
                      <div><span className="px-2 py-0.5 bg-gray-200 text-gray-600 rounded font-medium text-[10px]">Under Review</span></div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 text-xs items-center border border-gray-100 rounded p-2">
                      <div className="text-brand-primary">#023</div>
                      <div className="col-span-2 font-medium text-gray-900">Baku Port</div>
                      <div><span className="px-2 py-0.5 bg-status-yellow-light text-status-yellow rounded font-medium text-[10px]">MEDIUM</span></div>
                      <div><span className="px-2 py-0.5 bg-brand-light text-brand-primary rounded font-medium text-[10px]">Cleaning</span></div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-80 bg-white border border-gray-200 rounded-lg p-4 flex flex-col shrink-0">
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                     <span className="text-xs font-bold text-gray-900 uppercase">Activity Feed</span>
                  </div>
                  <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gray-100 z-0"></div>
                    <div className="flex gap-3 relative z-10">
                      <div className="w-5 h-5 rounded-full bg-status-yellow-light text-status-yellow flex items-center justify-center shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">Human review required</div>
                        <div className="text-[10px] text-gray-500">Incident #024 · 21d ago</div>
                      </div>
                    </div>
                    <div className="flex gap-3 relative z-10">
                      <div className="w-5 h-5 rounded-full bg-brand-light text-brand-primary flex items-center justify-center shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">AI analysis completed — 87% prob</div>
                        <div className="text-[10px] text-gray-500">Incident #024 · 21d ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
