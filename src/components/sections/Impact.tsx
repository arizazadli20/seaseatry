import { siteCopy } from '../../content/copy';

export function Impact() {
  return (
    <section className="py-24 border-b border-gray-200 bg-gray-50/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            {siteCopy.impact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteCopy.impact.points.map((point, idx) => (
            <div key={idx} className="border-l-2 border-gray-200 pl-6 py-2">
              <h3 className="text-gray-900 font-medium mb-2">{point.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
