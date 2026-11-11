import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ResidentialServicesSection } from './components/ResidentialServicesSection';

export function App() {
  return (
    <div className="min-h-screen bg-surface text-ink-body">
      <Navbar />
      <main>
        <HeroSection />
        <ResidentialServicesSection />
      </main>
    </div>
  );
}

export default App;
