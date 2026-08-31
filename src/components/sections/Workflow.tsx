import { siteCopy } from '../../content/copy';

export function Workflow() {
  return (
    <section id="workflow" className="py-24 border-b border-gray-200 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            {siteCopy.workflow.title}
          </h2>
          <p className="text-3xl font-medium text-gray-900">
            {siteCopy.differentiation.seasentry.split(' → ').join(' → ')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line connecting steps on mobile, horizontal on desktop */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border-subtle md:hidden"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Top Row: 1, 2, 3 */}
            {siteCopy.workflow.steps.slice(0, 3).map((step, idx) => (
              <div key={step.id} className="relative pl-16 md:pl-0">
                <div className="absolute left-0 top-0 md:static flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full border border-brand-primary/30 bg-white flex items-center justify-center font-mono text-brand-primary z-10">
                    {step.id}
                  </div>
                  {idx < 2 && <div className="hidden md:block h-px bg-border-subtle flex-grow ml-4"></div>}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* AI Advises, Humans Decide Banner */}
          <div className="my-16 py-8 border-y border-gray-200 text-center bg-white/50 backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-900">
              {siteCopy.global.aiMantra}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Bottom Row: 4, 5, 6 */}
            {siteCopy.workflow.steps.slice(3, 6).map((step, idx) => (
              <div key={step.id} className="relative pl-16 md:pl-0">
                <div className="absolute left-0 top-0 md:static flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full border border-status-green/30 bg-white flex items-center justify-center font-mono text-status-green z-10">
                    {step.id}
                  </div>
                  {idx < 2 && <div className="hidden md:block h-px bg-border-subtle flex-grow ml-4"></div>}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
