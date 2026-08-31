import { useState } from 'react';
import { sampleIncident } from '../../content/incident';
import { DemoBadge } from '../ui/DemoBadge';

const timeline = [
  "DETECTED",
  "ANALYZED",
  "REVIEWED",
  "RESPONSE INITIATED",
  "TRACKED"
];

export function SampleIncident() {
  const [stepIndex, setStepIndex] = useState(2); // Start at REVIEWED

  return (
    <section className="py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-4">
              Interactive Incident Story
            </h2>
            <h3 className="text-3xl font-medium text-gray-900">
              Caspian Sea — Sample Incident
            </h3>
          </div>
          <DemoBadge />
        </div>

        <div className="border border-gray-200 bg-gray-50 rounded overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="border-b border-gray-200 p-6 flex flex-wrap justify-between items-center gap-4 bg-white/50">
            <div>
              <div className="text-xs font-mono text-gray-500 mb-1">INCIDENT ID</div>
              <div className="font-mono text-gray-900">{sampleIncident.id}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-500 mb-1">LOCATION</div>
              <div className="font-mono text-gray-900">{sampleIncident.coordinates}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-500 mb-1">TIMESTAMP</div>
              <div className="font-mono text-gray-900">{sampleIncident.timestamp}</div>
            </div>
            <div>
              <DemoBadge />
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="p-6 border-b border-gray-200 overflow-x-auto">
            <div className="flex justify-between items-center min-w-[600px]">
              {timeline.map((stage, idx) => (
                <button
                  key={stage}
                  onClick={() => setStepIndex(idx)}
                  className={`flex flex-col items-center gap-2 relative z-10 w-32 ${idx <= stepIndex ? 'text-brand-primary' : 'text-gray-500'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 bg-gray-50 transition-colors ${idx <= stepIndex ? 'border-brand-primary' : 'border-gray-200'}`}>
                    {idx === stepIndex && <div className="w-1.5 h-1.5 m-auto mt-0.5 bg-brand-primary rounded-full animate-pulse"></div>}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider">{stage}</span>
                </button>
              ))}
            </div>
            {/* Timeline track */}
            <div className="relative -mt-6 mb-6">
              <div className="absolute left-16 right-16 h-px bg-border-subtle"></div>
              <div 
                className="absolute left-16 h-px bg-brand-primary transition-all duration-300"
                style={{ width: `calc(${((stepIndex) / (timeline.length - 1)) * 100}% - 32px)` }}
              ></div>
            </div>
          </div>

          {/* Data Cards */}
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border border-gray-200 bg-white rounded">
              <div className="text-xs font-mono text-gray-500 mb-2">RISK LEVEL</div>
              <div className={`text-xl font-medium ${stepIndex >= 1 ? 'text-[#FF4A4A]' : 'text-gray-500'} font-mono`}>
                {stepIndex >= 1 ? sampleIncident.riskLevel : 'PENDING'}
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 bg-white rounded">
              <div className="text-xs font-mono text-gray-500 mb-2">EST. AREA</div>
              <div className={`text-xl font-medium ${stepIndex >= 1 ? 'text-gray-900' : 'text-gray-500'} font-mono`}>
                {stepIndex >= 1 ? sampleIncident.estimatedArea : 'CALCULATING'}
              </div>
            </div>

            <div className="p-4 border border-gray-200 bg-white rounded">
              <div className="text-xs font-mono text-gray-500 mb-2">AI CONFIDENCE</div>
              <div className={`text-xl font-medium ${stepIndex >= 1 ? 'text-brand-primary' : 'text-gray-500'} font-mono`}>
                {stepIndex >= 1 ? `${sampleIncident.detectionConfidence}%` : '--'}
              </div>
            </div>

            <div className="p-4 border border-gray-200 bg-white rounded">
              <div className="text-xs font-mono text-gray-500 mb-2">NEARBY VESSELS</div>
              <div className={`text-xl font-medium ${stepIndex >= 1 ? 'text-gray-900' : 'text-gray-500'} font-mono`}>
                {stepIndex >= 1 ? sampleIncident.nearbyVessels : 'SCANNING'}
              </div>
            </div>
          </div>
          
          {stepIndex === 2 && (
            <div className="px-8 pb-8">
               <div className="p-4 border border-status-green/30 bg-status-green/5 rounded flex items-center">
                 <div className="w-2 h-2 rounded-full bg-status-green animate-pulse mr-3"></div>
                 <span className="font-mono text-sm text-status-green">HUMAN OPERATOR CONFIRMED. READY FOR RESPONSE INITIATION.</span>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
