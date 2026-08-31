import { siteCopy } from '../../content/copy';

export function TodayVsTomorrow() {
  const { today, tomorrow } = siteCopy.todayVsTomorrow;

  return (
    <section className="py-24 border-b border-gray-200 bg-gray-50/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            {siteCopy.todayVsTomorrow.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border-subtle rounded border border-gray-200 overflow-hidden max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-12">
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center">
              <div className="w-2 h-2 rounded-full bg-brand-primary mr-3"></div>
              Where We Are Today (Prototype)
            </h3>
            <ul className="space-y-4">
              {today.map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 mt-0.5 text-brand-primary shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50/30 p-8 md:p-12">
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center">
              <div className="w-2 h-2 rounded-full bg-border-subtle mr-3 border border-grey-muted"></div>
              Where We Are Going (Future)
            </h3>
            <ul className="space-y-4">
              {tomorrow.map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 mt-0.5 text-border-subtle shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
