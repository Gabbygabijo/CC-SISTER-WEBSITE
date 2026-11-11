import { MotionConfig } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ResidentialServicesSection } from './components/ResidentialServicesSection';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface text-ink-body">
        <Navbar />
        <main>
          <HeroSection />
          <ResidentialServicesSection />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
