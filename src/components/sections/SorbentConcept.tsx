import { siteCopy } from '../../content/copy';

export function SorbentConcept() {
  return (
    <section className="py-16 md:py-24 border-b border-gray-200 bg-gray-50 relative overflow-hidden">
      {/* Visual differentiation for research concept */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')] bg-[size:20px_20px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-grey-muted/50 text-gray-500 text-xs uppercase tracking-wider mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
            {siteCopy.sorbent.label}
          </div>
          
          <h2 className="text-3xl font-medium text-gray-900 mb-6">
            {siteCopy.sorbent.title}
          </h2>
          
          <p className="text-lg text-gray-500 leading-relaxed mb-12 text-left md:text-center">
            {siteCopy.sorbent.description}
          </p>

          <div className="p-6 border border-gray-200 bg-white rounded shadow-lg overflow-x-auto">
            <div className="flex items-center justify-between min-w-[600px] text-sm font-mono text-brand-primary px-4 py-8">
              {siteCopy.sorbent.chain.split(' → ').map((step, idx, arr) => (
                <div key={idx} className="flex items-center">
                  <span className="text-center">{step}</span>
                  {idx < arr.length - 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-4 text-border-subtle"><path d="m9 18 6-6-6-6"/></svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
