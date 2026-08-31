import { siteCopy } from '../../content/copy';
import { Button } from '../ui/Button';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-primary relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-2"><path d="m14.5 12 4-4"/><path d="m19 8-1.5-1.5"/><path d="m11 5-1.5-1.5"/><path d="m5 11-1.5-1.5"/><path d="m8 19-1.5-1.5"/><path d="m12 14.5-4 4"/><circle cx="12" cy="12" r="2.5"/><path d="m15.5 15.5 1.5 1.5"/><path d="m18 18 .5.5"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-1 text-[#4B5563]"><path d="M2 12h20"/><path d="M4 15h16"/><path d="M6 18h12"/></svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 tracking-tight leading-none mb-1">
              {siteCopy.global.name}
            </span>
            <span className="text-[10px] font-medium text-gray-400">
              Satellite & AI Oil Spill Intelligence
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button href="#" variant="secondary" className="px-6 py-2">
            Login
          </Button>
          <Button href={siteCopy.global.demoUrl} variant="primary" className="px-6 py-2">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
