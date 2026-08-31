import { siteCopy } from '../../content/copy';

export function Response() {
  const statuses = [
    { label: 'Detected', color: 'bg-brand-primary', text: 'text-brand-primary' },
    { label: 'Under Review', color: 'bg-[#F5A623]', text: 'text-[#F5A623]' },
    { label: 'Confirmed', color: 'bg-white-text', text: 'text-gray-900' },
    { label: 'Response Initiated', color: 'bg-[#FF4A4A]', text: 'text-[#FF4A4A]' },
    { label: 'Cleanup In Progress', color: 'bg-blue-400', text: 'text-blue-400' },
    { label: 'Resolved', color: 'bg-status-green', text: 'text-status-green' }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
            {siteCopy.response.title}
          </h2>
          <p className="text-2xl font-medium text-gray-900">
            {siteCopy.response.description.split(' → ').join(' → ')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {statuses.map((s, i) => (
            <div key={i} className="flex items-center p-4 border border-gray-200 rounded bg-gray-50/30">
              <div className={`w-2 h-2 rounded-full ${s.color} mr-3 shrink-0`}></div>
              <span className={`text-sm font-mono ${s.text}`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
