import { HeroImage } from '../assets/images';
import { ActionButton } from './Button';
import { Container } from './Container';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      {/* Background photograph */}
      <img
        src={HeroImage}
        alt="Cleaning Circle specialist wiping a marble coffee table in a bright living room"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[76%_85%] sm:object-[72%_85%] lg:object-bottom-right"
      />

      {/* Soft left-side light gradient so typography remains crisp across breakpoints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/95 via-white/75 via-45% to-white/10 sm:via-white/60 sm:to-transparent lg:from-white/95 lg:via-white/55 lg:via-40% lg:to-transparent"
      />

      <Container className="relative z-10 pb-24 pt-10 sm:pb-28 sm:pt-14 lg:min-h-156.75 lg:pb-38.75 lg:pt-18.25">
        <p className="type-hero-label mb-5 text-[13px] sm:mb-8 sm:text-[15px] lg:mb-12.25 lg:text-[16px]">
          Residential cleaning
        </p>

        <div className="max-w-150.5">
          <h1 className="type-hero-title max-w-143 text-[34px] leading-[1.14] sm:text-[42px] lg:text-[48px]">
            A Cleaner Home. A Better Way to Live.
          </h1>

          <p className="mt-4 max-w-126.75 text-[15px] font-normal leading-[1.45] text-ink-body sm:mt-6 sm:text-[18px] lg:mt-6.5 lg:text-[20px]">
            Enjoy a beautifully maintained home with reliable, professional
            cleaning services designed around your lifestyle and schedule.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-6 lg:mt-9.75 lg:gap-10">
            <ActionButton href="#quote" variant="primary" size="lg">
              Get a Quote
            </ActionButton>

            <ActionButton href="#services" variant="outline" size="lg">
              Our Services
            </ActionButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
