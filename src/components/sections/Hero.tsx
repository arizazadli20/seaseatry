import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden bg-gray-50">
      {/* Halftone / Dotted Background Pattern (Inspired by Image 1) */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-min">
          
          {/* Main Headline Bento Box (Inspired by structural layouts in Image 2) */}
          <div className="md:col-span-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden">
             {/* Subtle gradient glow in corner */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             
             <div className="relative z-10">
               <h2 className="text-[10px] sm:text-xs font-bold text-brand-primary tracking-widest uppercase mb-6 sm:mb-8 inline-block px-4 py-1.5 bg-brand-light/50 rounded-full border border-brand-light">
                 CASPIAN SEA MONITORING PLATFORM
               </h2>
               <h1 className="text-[clamp(2.25rem,9vw,6rem)] font-bold text-gray-900 mb-6 leading-[1.05] tracking-tight">
                 See the Spill.<br/>
                 <span className="text-gray-300">Understand the Risk.</span><br/>
                 Act.
               </h1>
             </div>
             
             <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between relative z-10">
               <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                 {siteCopy.hero.supporting}
               </p>
               <div className="shrink-0 flex gap-3 w-full sm:w-auto">
                 <Button href={siteCopy.global.demoUrl} variant="primary" className="rounded-full px-8 py-3 w-full sm:w-auto text-sm shadow-md shadow-brand-primary/20 hover:-translate-y-0.5 transition-transform">
                   Get Started
                 </Button>
               </div>
             </div>
          </div>

          {/* Map / Visual Bento Box */}
          <div className="md:col-span-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-6 shadow-sm relative overflow-hidden h-[260px] md:h-auto md:min-h-[320px] flex flex-col group">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-[10px] font-bold text-gray-500 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full uppercase tracking-wider border border-gray-100 shadow-sm">
                Sentinel-1 SAR
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-status-red animate-pulse mt-1 shadow-[0_0_8px_rgba(224,36,36,0.6)]"></div>
            </div>
            
            <div className="flex-grow relative flex items-center justify-center mt-4">
               <div className="absolute inset-0 bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden group-hover:bg-brand-light/20 transition-colors duration-500">
                 {/* Abstract Map Blob */}
                 <div className="absolute left-[5%] top-[10%] w-[90%] h-[80%] bg-brand-light/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-transform duration-[10s] ease-in-out group-hover:scale-105"></div>
                 {/* Detection rings */}
                 <div className="absolute left-[35%] top-[40%] w-16 h-16 rounded-full border border-status-red/20 animate-ping"></div>
                 <div className="absolute left-[35%] top-[40%] w-4 h-4 rounded-full bg-status-red shadow-[0_0_15px_rgba(224,36,36,0.8)] translate-x-[24px] translate-y-[24px]"></div>
                 
                 <div className="absolute right-[25%] bottom-[30%] w-2 h-2 rounded-full bg-status-yellow shadow-[0_0_10px_rgba(208,129,18,0.6)]"></div>
               </div>
            </div>
          </div>

          {/* Small Info Bento Box 1 */}
          <div className="md:col-span-4 bg-gray-900 border border-gray-800 rounded-[2rem] p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden">
            {/* Dark background halftone override */}
            <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
            
            <h3 className="text-gray-400 text-xs font-mono tracking-widest uppercase mb-12 relative z-10">Decision Framework</h3>
            <div className="relative z-10">
              <div className="text-3xl font-bold tracking-tight text-gray-200">AI advises.</div>
              <div className="text-3xl font-bold tracking-tight text-brand-primary mt-1">Humans decide.</div>
            </div>
          </div>

          {/* Small Info Bento Box 2 */}
          <div className="md:col-span-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-8 shadow-sm flex items-center justify-center">
             <div className="flex flex-col sm:flex-row w-full text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="pb-6 sm:pb-0 sm:pr-6 sm:w-1/3">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">10s</div>
                  <div className="text-xs text-gray-500 mt-2 font-medium">Detection response cycle</div>
                </div>
                <div className="py-6 sm:py-0 sm:px-6 sm:w-1/3">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">87<span className="text-brand-primary">%</span></div>
                  <div className="text-xs text-gray-500 mt-2 font-medium">Average AI confidence</div>
                </div>
                <div className="pt-6 sm:pt-0 sm:pl-6 sm:w-1/3">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">24/7</div>
                  <div className="text-xs text-gray-500 mt-2 font-medium">Caspian Sea monitoring</div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
