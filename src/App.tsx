import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Workflow } from './components/sections/Workflow';
import { CaspianContext } from './components/sections/CaspianContext';
import { Intelligence } from './components/sections/Intelligence';
import { SampleIncident } from './components/sections/SampleIncident';
import { Response } from './components/sections/Response';
import { SorbentConcept } from './components/sections/SorbentConcept';
import { Ecosystem } from './components/sections/Ecosystem';
import { TodayVsTomorrow } from './components/sections/TodayVsTomorrow';
import { Impact } from './components/sections/Impact';
import { LivePlatform } from './components/sections/LivePlatform';
import { Team } from './components/sections/Team';
import { CtaSection } from './components/sections/CtaSection';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Workflow />
        <CaspianContext />
        <div id="intelligence">
          <Intelligence />
        </div>
        <SampleIncident />
        <Response />
        <SorbentConcept />
        <Ecosystem />
        <TodayVsTomorrow />
        <Impact />
        <LivePlatform />
        <Team />
      </main>
      <CtaSection />
    </div>
  );
}

export default App;
