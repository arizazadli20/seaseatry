import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { Workflow } from './components/sections/Workflow';
import { CaspianContext } from './components/sections/CaspianContext';
import { Intelligence } from './components/sections/Intelligence';
import { LivePlatform } from './components/sections/LivePlatform';
import { Team } from './components/sections/Team';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navigation />
      <main className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <Workflow />
        <CaspianContext />
        <div id="intelligence">
          <Intelligence />
        </div>
        <LivePlatform />
        <Team />
      </main>
      
      {/* Sticky Bottom Bar for Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[max(1rem,env(safe-area-inset-bottom))]">
        <a href="https://pelagosdemo.vercel.app/" className="flex items-center justify-center w-full bg-brand-primary text-white font-medium py-3 rounded-full shadow-md">
          Explore the demo
        </a>
      </div>
    </div>
  );
}

export default App;
