import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Hero() {
  return (
    <>
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-5 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-min">
            
            {/* Main Headline Bento Box */}
            <div className="md:col-span-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
               
               <div className="relative z-10">
                 <h2 className="text-[10px] sm:text-xs font-bold text-brand-primary tracking-widest uppercase mb-6 sm:mb-8 inline-block px-4 py-1.5 bg-brand-light/50 rounded-full border border-brand-light">
                   CASPIAN SEA MONITORING PLATFORM
                 </h2>
                 <h1 className="text-[clamp(2.5rem,11vw,6rem)] font-bold text-gray-900 mb-6 leading-[1.05] tracking-tighter max-w-2xl">
                   {siteCopy.hero.headline.split('. ').map((part, i, arr) => (
                     <span key={i}>
                       {part}{i < arr.length - 1 ? '.' : ''}<br className={i === 1 ? 'hidden md:block' : 'hidden'} />
                     </span>
                   ))}
                 </h1>
               </div>
               
               <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between relative z-10">
                 <p className="text-base text-gray-500 max-w-md font-light leading-relaxed">
                   {siteCopy.hero.supporting}
                 </p>
                 <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto hidden md:flex">
                   <Button href={siteCopy.global.demoUrl} variant="primary" className="rounded-full px-8 py-3 w-full sm:w-auto text-sm shadow-md shadow-brand-primary/20">
                     {siteCopy.hero.primaryCta}
                   </Button>
                   <Button href="#workflow" variant="secondary" className="rounded-full px-8 py-3 w-full sm:w-auto text-sm">
                     {siteCopy.hero.secondaryCta}
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
                 </div>
              </div>
            </div>

            {/* Stats Bento Box (Horizontal scroller on mobile) */}
            <div className="md:col-span-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[2rem] p-6 shadow-sm flex flex-col relative overflow-hidden">
               <div className="absolute top-4 right-6">
                 <span className="text-[10px] font-mono tracking-widest text-brand-primary bg-brand-light/30 px-2 py-1 rounded">SIMULATED</span>
               </div>
               <div className="mt-6 md:mt-2">
                 <SnapCarousel 
                   ariaLabel="Key Metrics" 
                   desktopGridClassName="grid-cols-1 sm:grid-cols-3 gap-8 w-full text-left md:divide-x divide-gray-100"
                   autoAdvance={false}
                 >
                    <div className="md:pr-8 h-full bg-white md:bg-transparent rounded-2xl md:rounded-none border border-gray-100 md:border-none p-6 md:p-0 shadow-sm md:shadow-none">
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">10s</div>
                      <div className="text-sm text-gray-500 mt-2 font-light">Detection response cycle</div>
                    </div>
                    <div className="md:px-8 h-full bg-white md:bg-transparent rounded-2xl md:rounded-none border border-gray-100 md:border-none p-6 md:p-0 shadow-sm md:shadow-none">
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">87<span className="text-brand-primary">%</span></div>
                      <div className="text-sm text-gray-500 mt-2 font-light">Average AI confidence</div>
                    </div>
                    <div className="md:pl-8 h-full bg-white md:bg-transparent rounded-2xl md:rounded-none border border-gray-100 md:border-none p-6 md:p-0 shadow-sm md:shadow-none">
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">24/7</div>
                      <div className="text-sm text-gray-500 mt-2 font-light">Caspian Sea monitoring</div>
                    </div>
                 </SnapCarousel>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Full Bleed Dark Anchor (Hero-Adjacent) */}
      <section className="bg-[#0B1121] py-16 md:py-24 px-6 border-y border-gray-800 text-center flex flex-col items-center justify-center">
        <h3 className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-8">Decision Framework</h3>
        <div className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          AI advises.<br className="md:hidden" /> <span className="text-brand-primary">Humans decide.</span>
        </div>
      </section>
    </>
  );
}
