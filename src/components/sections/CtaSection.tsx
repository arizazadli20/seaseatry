import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';

export function CtaSection() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Demo Day CTA */}
      <div className="py-16 md:py-32 border-b border-gray-200 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
          {siteCopy.demoCta.title}
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          {siteCopy.demoCta.supporting}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={siteCopy.global.demoUrl} variant="primary">
            Explore the Live Demo
          </Button>
          <Button href="#workflow" variant="outline">
            Learn How It Works
          </Button>
        </div>
      </div>

      {/* Final Restrained CTA & Footer */}
      <div className="py-16 md:py-24 px-6 text-center">
        <div className="space-y-2 mb-16">
          {siteCopy.finalCta.lines.map((line, i) => (
            <p key={i} className="text-2xl font-light text-gray-500 tracking-wide">
              {line}
            </p>
          ))}
        </div>
        
        <div className="text-sm font-mono text-border-subtle tracking-widest uppercase">
          {siteCopy.finalCta.closing}
        </div>
        
        <div className="mt-8">
          <a href="mailto:hello@seasentry.com" className="text-sm text-gray-500 hover:text-brand-primary transition-colors">
            [TODO: contact email or Demo Day contact route]
          </a>
        </div>
      </div>
    </footer>
  );
}
