import { useState } from 'react';
import { ResidentialBathroom, ResidentialLivingArea } from '../assets/images';
import { Container } from './Container';
import { HighlightsCard, type HighlightItem } from './HighlightsCard';
import { SectionHeader } from './SectionHeader';
import {
  ServiceAccordionItem,
  type ResidentialService,
} from './ServiceAccordionItem';

const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Trusted professionals',
    description:
      'Carefully selected cleaners you are happy to welcome into your home.',
  },
  {
    title: 'Flexible schedules',
    description:
      'Weekly, fortnightly or one-off, on days that fit your routine.',
  },
  {
    title: 'Transparent pricing',
    description:
      'A clear quote before you book, with nothing added afterwards.',
  },
];

const RESIDENTIAL_SERVICES: ResidentialService[] = [
  {
    id: 'regular-home-cleaning',
    title: 'Regular Home Cleaning',
    description:
      'Weekly or fortnightly visits that keep kitchens, bathrooms and living areas consistently fresh.',
    included: [
      'Kitchen surfaces and sink',
      'Floors vacuumed and mopped',
      'Bathrooms and toilets',
      'Dusting and general tidying',
    ],
  },
  {
    id: 'end-of-tenancy-cleaning',
    title: 'End of Tenancy Cleaning',
    description:
      'Detailed move-out cleaning, prepared with your tenancy checklist in mind.',
    included: [
      'Deep kitchen & appliance clean',
      'Limescale & bathroom descaling',
      'Inside cupboards & wardrobes',
      'Skirting boards, doors & frames',
    ],
  },
  {
    id: 'laundry-and-ironing',
    title: 'Laundry & Ironing',
    description:
      'Washing, drying, ironing and folding, returned neatly so you can reclaim your evenings.',
    included: [
      'Sorting & machine washing',
      'Crisp steam ironing & pressing',
      'Tumble drying or air drying',
      'Neat folding or hanger prep',
    ],
  },
];

export function ResidentialServicesSection() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'regular-home-cleaning': true,
  });

  const toggleService = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="services"
      className="flow-root bg-surface-services pb-16 sm:pb-20 lg:pb-33.25"
    >
      <Container>
        {/* Floating Value-Prop Card bridging Hero & Services */}
        <HighlightsCard
          items={HIGHLIGHTS}
          className="-mt-12 sm:-mt-18 lg:-mt-25.17"
        />

        {/* Section Heading */}
        <SectionHeader
          eyebrow="Our Residential Services"
          title="Cleaning Services Designed Around Your Home"
          className="mt-12 max-w-158.5 sm:mt-16 lg:mt-17.75"
          titleClassName="max-w-149.75"
        />

        {/* Photo Collage + Interactive Services Accordion */}
        <div className="mt-8 flex flex-col gap-10 sm:mt-10 lg:mt-10.5 lg:flex-row lg:items-center lg:gap-12 xl:gap-14.75">
          {/* Overlapping Residential Collage */}
          <div className="relative w-full max-w-140.5 shrink-0 lg:w-115 xl:h-151 xl:w-155.5 xl:max-w-155.5">
            <img
              src={ResidentialLivingArea}
              alt="Spotless modern living room sofa and marble coffee table"
              className="aspect-425/405 w-[74%] rounded-xl object-cover sm:w-[70%] xl:h-101.25 xl:w-106.25 xl:rounded-2xl"
            />
            <img
              src={ResidentialBathroom}
              alt="Sparkling clean modern bathroom with freestanding tub"
              className="relative mt-[-28%] ml-auto aspect-358/260 w-[72%] rounded-[14px] border-[6px] border-collage-stroke object-cover sm:mt-[-25%] sm:aspect-358/310 sm:w-[66%] xl:absolute xl:left-51 xl:top-59.5 xl:mt-0 xl:aspect-auto xl:h-91.25 xl:w-89.5 xl:rounded-2xl xl:border-[9px]"
            />
          </div>

          {/* Services Accordion */}
          <div className="w-full lg:flex-1 xl:max-w-138.75">
            {RESIDENTIAL_SERVICES.map((service, index) => (
              <ServiceAccordionItem
                key={service.id}
                service={service}
                isExpanded={Boolean(expandedIds[service.id])}
                onToggle={toggleService}
                showDivider={index < RESIDENTIAL_SERVICES.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
