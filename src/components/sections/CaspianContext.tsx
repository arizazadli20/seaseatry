import { siteCopy } from '../../content/copy';

export function CaspianContext() {
  return (
    <section className="py-24 border-b border-gray-200 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-6">
              {siteCopy.caspian.title}
            </h2>
            <h3 className="text-3xl font-medium text-gray-900 mb-6">
              Designed for the specific challenges of the Caspian region.
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              {siteCopy.caspian.description}
            </p>
            <div className="mt-12 space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand-primary mr-4 shrink-0"></div>
                <p className="text-gray-900">Significant oil and gas activity and infrastructure</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand-primary mr-4 shrink-0"></div>
                <p className="text-gray-900">Dense maritime traffic corridors</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand-primary mr-4 shrink-0"></div>
                <p className="text-gray-900">Environmentally sensitive coastal ecosystems</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] border border-gray-200 bg-gray-50/50 rounded flex items-center justify-center p-8">
            {/* Minimalist SVG representation of the Caspian Sea */}
            <svg viewBox="0 0 400 600" className="w-full h-full opacity-60" fill="none" stroke="currentColor">
              <path 
                d="M150,50 Q180,80 190,120 T210,180 Q230,220 220,260 T190,320 Q160,380 180,450 T200,520 Q220,550 250,540 T300,500 Q320,450 300,400 T270,330 Q250,280 280,240 T310,180 Q320,120 280,80 T200,40 Z" 
                stroke="#1E2A40" strokeWidth="2" fill="#0A0F1A" 
              />
              {/* Highlight points representing maritime/oil & gas context */}
              <circle cx="210" cy="180" r="4" fill="#00E5FF" className="animate-pulse" />
              <circle cx="190" cy="320" r="3" fill="#1E2A40" />
              <circle cx="280" cy="240" r="3" fill="#1E2A40" />
              <circle cx="200" cy="480" r="4" fill="#00D084" className="animate-pulse" />
              
              {/* Grid lines */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
              <line x1="0" y1="300" x2="400" y2="300" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
              <line x1="0" y1="450" x2="400" y2="450" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
              
              <line x1="133" y1="0" x2="133" y2="600" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
              <line x1="266" y1="0" x2="266" y2="600" stroke="#1E2A40" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
            </svg>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-500">
              VECTOR RENDERING — CASPIAN SEA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
