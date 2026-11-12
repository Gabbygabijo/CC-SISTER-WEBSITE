import { motion } from 'motion/react';
import { lazy, Suspense, useState } from 'react';
import { SERVICE_AREAS, type ServiceArea } from '../data/serviceAreas';
import { EASE_OUT, SPRING_SNAPPY, VIEWPORT_ONCE } from '../lib/motion';
import { Container } from './Container';
import { LocationPinIcon } from './Icons';

const ServiceAreasMap = lazy(() =>
  import('./ServiceAreasMap').then((mod) => ({ default: mod.ServiceAreasMap })),
);

function AreaListButton({
  area,
  isSelected,
  onSelect,
}: {
  area: ServiceArea;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(area.id)}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING_SNAPPY}
      aria-pressed={isSelected}
      className={[
        'group inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-left text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-[16px]',
        isSelected
          ? 'bg-brand text-white shadow-xs'
          : 'text-ink-body hover:bg-brand/15 hover:text-ink',
      ].join(' ')}
    >
      <LocationPinIcon
        className={[
          'h-4.5 w-4.5 shrink-0 transition-colors',
          isSelected
            ? 'text-white'
            : 'text-ink-strong group-hover:text-brand-hover',
        ].join(' ')}
      />
      <span className="font-normal">{area.name}</span>
    </motion.button>
  );
}

export function AreasWeCoverSection() {
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);
  const [selectionNonce, setSelectionNonce] = useState(0);

  const leftColumnAreas = SERVICE_AREAS.filter((area) => area.column === 1);
  const rightColumnAreas = SERVICE_AREAS.filter((area) => area.column === 2);

  const handleSelectArea = (id: string) => {
    setActiveAreaId(id);
    setSelectionNonce((n) => n + 1);
  };

  const handleResetView = () => {
    setActiveAreaId(null);
    setSelectionNonce((n) => n + 1);
  };

  return (
    <section
      id="areas"
      className="scroll-mt-12 bg-surface-areas py-14 sm:py-16 lg:py-15.5"
    >
      <Container>
        <div className="mx-auto grid max-w-272.25 grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(0,1fr)_527px] lg:gap-14 xl:gap-18">
          {/* Left Column: Coverage List */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <h2 className="type-section-title text-center text-[26px] leading-[1.22] sm:text-[32px] lg:text-left lg:text-[36px] lg:leading-11">
              Areas We Cover
            </h2>

            <p className="mt-4 max-w-120 text-[15px] leading-normal text-ink-body sm:text-[16px]">
              We provide professional Residential cleaning services across
              London, including:
            </p>

            {/* Two-Column Clickable Locations */}
            <div className="-mx-2.5 mt-5 grid max-w-96 grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-x-11">
              <div className="flex flex-col gap-2">
                {leftColumnAreas.map((area) => (
                  <AreaListButton
                    key={area.id}
                    area={area}
                    isSelected={activeAreaId === area.id}
                    onSelect={handleSelectArea}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {rightColumnAreas.map((area) => (
                  <AreaListButton
                    key={area.id}
                    area={area}
                    isSelected={activeAreaId === area.id}
                    onSelect={handleSelectArea}
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 max-w-99 text-[15px] leading-normal text-ink-body sm:text-[16px]">
              If you’re nearby but don’t see your area listed, feel free to{' '}
              <a
                href="#contact"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors hover:text-brand-hover"
              >
                get in touch
              </a>
              .
            </p>
          </motion.div>

          {/* Right Column: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT }}
          >
            <Suspense
              fallback={
                <div className="flex h-80 w-full items-center justify-center rounded-card-lg border border-brand/25 bg-surface-faq text-[14px] text-ink-body sm:h-95 lg:h-99.25">
                  Loading coverage map…
                </div>
              }
            >
              <ServiceAreasMap
                areas={SERVICE_AREAS}
                activeAreaId={activeAreaId}
                selectionNonce={selectionNonce}
                onSelectArea={handleSelectArea}
                onResetView={handleResetView}
              />
            </Suspense>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
