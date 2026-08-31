import { siteCopy } from '../../content/copy';

export function DemoBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center px-2 py-1 rounded bg-gray-50 border border-brand-primary/30 text-brand-primary font-mono text-[13px] tracking-wider uppercase ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2 animate-pulse"></span>
      {siteCopy.global.demoLabel}
    </div>
  );
}
