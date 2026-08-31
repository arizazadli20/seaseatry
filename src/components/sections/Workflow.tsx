import { siteCopy } from '../../content/copy';
import { SnapCarousel } from '../ui/SnapCarousel';

export function Workflow() {
  return (
    <section id="workflow" className="py-16 md:py-24 border-b border-gray-200 bg-gray-50/30">
      <div className="container mx-auto px-0 md:px-6">
        <div className="text-center mb-12 md:mb-20 px-6">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            {siteCopy.workflow.title}
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-gray-900">
            {siteCopy.differentiation.seasentry.split(' → ').join(' → ')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <SnapCarousel 
            ariaLabel="Workflow stages" 
            desktopGridClassName="grid-cols-1 md:grid-cols-3 gap-12"
            autoAdvance={false}
          >
            {/* Steps 1, 2, 3 */}
            {siteCopy.workflow.steps.slice(0, 3).map((step, idx) => (
              <div key={step.id} className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-gray-100 md:border-none shadow-sm md:shadow-none h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-brand-primary/30 bg-white flex items-center justify-center font-mono text-brand-primary z-10">
                    {step.id}
                  </div>
                  {idx < 2 && <div className="hidden md:block h-px bg-gray-200 flex-grow ml-4"></div>}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}

            {/* Banner (Desktop only inside grid) */}
            <div data-desktop-only={true}>
              <div className="my-8 md:my-16 py-8 border-y border-gray-200 text-center bg-white/50 backdrop-blur-sm w-full">
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-900">
                  {siteCopy.global.aiMantra}
                </h3>
              </div>
            </div>

            {/* Steps 4, 5, 6 */}
            {siteCopy.workflow.steps.slice(3, 6).map((step, idx) => (
              <div key={step.id} className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-gray-100 md:border-none shadow-sm md:shadow-none h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-status-green/30 bg-white flex items-center justify-center font-mono text-status-green z-10">
                    {step.id}
                  </div>
                  {idx < 2 && <div className="hidden md:block h-px bg-gray-200 flex-grow ml-4"></div>}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </SnapCarousel>

          {/* Banner (Mobile only outside grid) */}
          <div className="md:hidden mt-8 px-6">
             <div className="py-6 border-y border-gray-200 text-center bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                  {siteCopy.global.aiMantra}
                </h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
