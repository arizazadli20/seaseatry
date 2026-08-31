import { ecosystemNodes } from '../../content/ecosystem';

export function Ecosystem() {
  return (
    <section className="py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            Future Ecosystem
          </h2>
          <p className="text-2xl font-medium text-gray-900 max-w-2xl mx-auto">
            SeaSentry acts as the intelligence and coordination layer connecting multiple stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemNodes.map((node, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded bg-gray-50/20">
              <h3 className="text-sm font-mono text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {node.category}
              </h3>
              <ul className="space-y-3">
                {node.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-brand-primary/50 mr-3 shrink-0"></span>
                    <span className="text-gray-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
