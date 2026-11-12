import { MotionConfig } from 'motion/react';
import { AreasWeCoverSection } from './components/AreasWeCoverSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GetQuoteSection } from './components/GetQuoteSection';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Navbar } from './components/Navbar';
import { ResidentialServicesSection } from './components/ResidentialServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface text-ink-body">
        <Navbar />
        <main>
          <HeroSection />
          <ResidentialServicesSection />
          <WhyChooseUsSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FaqSection />
          <GetQuoteSection />
          <AreasWeCoverSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
