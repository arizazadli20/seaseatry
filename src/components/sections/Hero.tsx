import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <>
      <section className="scroll-mt-14 md:scroll-mt-20 pt-14 pb-14 md:pt-24 md:pb-24 bg-white min-h-[calc(100vh-56px)] md:min-h-0 flex flex-col justify-center">
        <div className="w-full px-[20px] md:px-6 max-w-7xl mx-auto flex-grow flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-grow items-center">
            
            {/* Text content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
               <h1 className="text-[clamp(2rem,9vw,3rem)] lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tighter mb-6">
                 <div className="block">See the spill.</div>
                 <div className="block">Understand the risk.</div>
                 <div className="block">Act.</div>
               </h1>
               
               <p className="text-[16px] leading-[1.55] text-gray-500 max-w-md font-light line-clamp-4 mb-8 lg:mb-12">
                 {siteCopy.hero.supporting}
               </p>

               {/* Buttons hidden on mobile */}
               <div className="hidden md:flex gap-3">
                 <Button href={siteCopy.global.demoUrl} variant="primary" className="rounded-full px-8 py-3 text-sm shadow-md shadow-brand-primary/20">
                   {siteCopy.hero.primaryCta}
                 </Button>
                 <Button href="#workflow" variant="secondary" className="rounded-full px-8 py-3 text-sm">
                   {siteCopy.hero.secondaryCta}
                 </Button>
               </div>
            </div>

            {/* Visual (Map Blob) */}
            <div className="lg:col-span-5 h-[260px] lg:h-[400px] bg-gray-50/50 rounded-2xl relative overflow-hidden flex flex-col group">
              <div className="flex justify-between items-start mb-4 relative z-10 p-6">
                <span className="text-[13px] font-bold text-gray-500 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full uppercase tracking-wider border border-gray-100 shadow-sm">
                  Prototype integration
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-status-red animate-pulse mt-1 shadow-[0_0_8px_rgba(224,36,36,0.6)]"></div>
              </div>
              
              <div className="absolute inset-0 top-16 bg-gray-50/50 overflow-hidden group-hover:bg-brand-light/20 transition-colors duration-500">
                <div className="absolute left-[5%] top-[10%] w-[90%] h-[80%] bg-brand-light/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-transform duration-[10s] ease-in-out group-hover:scale-105"></div>
                <div className="absolute left-[35%] top-[40%] w-16 h-16 rounded-full border border-status-red/20 animate-ping"></div>
                <div className="absolute left-[35%] top-[40%] w-4 h-4 rounded-full bg-status-red shadow-[0_0_15px_rgba(224,36,36,0.8)] translate-x-[24px] translate-y-[24px]"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Bleed Dark Anchor (Hero-Adjacent) */}
      <section className="bg-[#0B1121] py-14 md:py-24 px-[20px] md:px-6 text-center flex flex-col items-center justify-center">
        <h3 className="text-[13px] font-mono tracking-widest text-gray-400 uppercase mb-8">Decision Framework</h3>
        <div className="text-[28px] md:text-6xl font-bold tracking-tighter text-white leading-tight">
          AI advises.<br className="md:hidden" /> <span className="text-brand-primary">Humans decide.</span>
        </div>
      </section>
    </>
  );
}
