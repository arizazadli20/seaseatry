import { siteCopy } from '../../content/copy';

export function Problem() {
  return (
    <section className="py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-8">
            {siteCopy.problem.title}
          </h2>
          
          <blockquote className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 leading-tight border-l-4 border-brand-primary pl-8 text-left">
            "{siteCopy.problem.thesis}"
          </blockquote>
          
          <p className="text-lg text-gray-500 leading-relaxed text-left">
            {siteCopy.problem.description}
          </p>
        </div>
      </div>
    </section>
  );
}
