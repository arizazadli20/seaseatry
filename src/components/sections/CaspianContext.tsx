import { siteCopy } from '../../content/copy';

export function CaspianContext() {
  return (
    <section className="scroll-mt-14 md:scroll-mt-20 py-14 md:py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-[20px] md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-[13px] font-mono text-brand-primary tracking-widest uppercase mb-6">
              {siteCopy.caspian.title}
            </h2>
            <p className="text-[16px] leading-[1.55] text-gray-500 font-light mb-8">
              {siteCopy.caspian.description}
            </p>
            <div className="space-y-4">
              {siteCopy.caspian.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-primary mr-4 shrink-0"></div>
                  <p className="text-[16px] text-gray-900 font-medium">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none flex items-center justify-center">
            {/* Minimalist SVG representation of the Caspian Sea */}
            <svg viewBox="0 0 400 600" className="w-full h-full opacity-60 drop-shadow-sm" fill="none" stroke="currentColor">
              <path 
                d="M150,50 Q180,80 190,120 T210,180 Q230,220 220,260 T190,320 Q160,380 180,450 T200,520 Q220,550 250,540 T300,500 Q320,450 300,400 T270,330 Q250,280 280,240 T310,180 Q320,120 280,80 T200,40 Z" 
                stroke="#1E2A40" strokeWidth="1.5" fill="#F9FAFB" 
              />
              <circle cx="210" cy="180" r="4" fill="#00E5FF" className="animate-pulse" />
              <circle cx="190" cy="320" r="3" fill="#1E2A40" />
              <circle cx="280" cy="240" r="3" fill="#1E2A40" />
              <circle cx="200" cy="480" r="4" fill="#00D084" className="animate-pulse" />
              
              <line x1="0" y1="150" x2="400" y2="150" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.15"/>
              <line x1="0" y1="300" x2="400" y2="300" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.15"/>
              <line x1="0" y1="450" x2="400" y2="450" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.15"/>
              
              <line x1="133" y1="0" x2="133" y2="600" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.15"/>
              <line x1="266" y1="0" x2="266" y2="600" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.15"/>
            </svg>
            <div className="absolute bottom-4 left-4 md:right-4 md:left-auto text-[13px] font-mono text-gray-500 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
              VECTOR RENDERING — CASPIAN SEA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
