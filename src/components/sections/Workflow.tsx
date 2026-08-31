import { siteCopy } from '../../content/copy';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-14 md:scroll-mt-20 py-14 md:py-24 border-b border-gray-200 bg-gray-50/30">
      <div className="container mx-auto px-0 md:px-6">
        
        <div className="max-w-5xl mx-auto relative">
          <SnapCarousel 
            ariaLabel="Workflow stages" 
            desktopGridClassName="grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
            autoAdvance={false}
          >
            {siteCopy.workflow.steps.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col h-full px-[20px] lg:px-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center font-mono text-gray-900 z-10">
                    {step.id}
                  </div>
                  {(idx !== 2 && idx !== 5) && <div className="hidden lg:block h-px bg-gray-200 flex-grow ml-4"></div>}
                </div>
                
                {step.id === "04" && (
                   <div className="text-[13px] font-mono tracking-widest text-brand-primary uppercase mb-2">
                     AI advises. Humans decide.
                   </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  );
}
