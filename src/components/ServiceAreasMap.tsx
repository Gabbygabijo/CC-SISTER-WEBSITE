import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { ServiceArea } from '../data/serviceAreas';
import { EASE_OUT } from '../lib/motion';

interface ServiceAreasMapProps {
  areas: ServiceArea[];
  activeAreaId: string | null;
  selectionNonce: number;
  onSelectArea: (id: string) => void;
  onResetView: () => void;
}

const VOYAGER_TILES =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const VOYAGER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a>';

const OSM_TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors';

function createPinIcon(isActive: boolean): L.DivIcon {
  const fill = isActive ? '#7f8726' : '#b9c32e';
  const stroke = isActive ? '#2a2828' : '#7f8726';
  const size = isActive ? 38 : 30;
  const anchorX = size / 2;
  const anchorY = size - 2;

  return L.divIcon({
    className: 'cc-map-pin',
    iconSize: [size, size],
    iconAnchor: [anchorX, anchorY],
    tooltipAnchor: [0, -(size - 4)],
    html: `
      <div style="position:relative;width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;">
        ${
          isActive
            ? '<span class="cc-pin-pulse" style="position:absolute;inset:-4px;border-radius:9999px;background:rgba(185,195,46,0.38);"></span>'
            : ''
        }
        <svg viewBox="0 0 32 36" width="${size}" height="${size}" style="position:relative;display:block;filter:drop-shadow(0 3px 5px rgba(0,0,0,0.24));">
          <path d="M16 2C8.82 2 3 7.72 3 14.8c0 8.85 11.44 18.55 12.1 19.1a1.38 1.38 0 0 0 1.8 0C17.56 33.35 29 23.65 29 14.8 29 7.72 23.18 2 16 2Z" fill="${fill}" stroke="#ffffff" stroke-width="2.2"/>
          <circle cx="16" cy="14.5" r="4.8" fill="#ffffff" stroke="${stroke}" stroke-width="1.2"/>
        </svg>
      </div>
    `,
  });
}

export function ServiceAreasMap({
  areas,
  activeAreaId,
  selectionNonce,
  onSelectArea,
  onResetView,
}: ServiceAreasMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const highlightCircleRef = useRef<L.Circle | null>(null);
  const boundsRef = useRef<L.LatLngBounds | null>(null);
  const hasMountedRef = useRef(false);
  const onSelectAreaRef = useRef(onSelectArea);

  useEffect(() => {
    onSelectAreaRef.current = onSelectArea;
  }, [onSelectArea]);

  // Initialize Leaflet map and pins once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = L.map(container, {
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: true,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const primaryLayer = L.tileLayer(VOYAGER_TILES, {
      attribution: VOYAGER_ATTRIBUTION,
      subdomains: 'abcd',
      maxZoom: 19,
    });

    let switchedToFallback = false;
    primaryLayer.on('tileerror', () => {
      if (switchedToFallback) return;
      switchedToFallback = true;
      map.removeLayer(primaryLayer);
      L.tileLayer(OSM_TILES, {
        attribution: OSM_ATTRIBUTION,
        maxZoom: 19,
      }).addTo(map);
    });

    primaryLayer.addTo(map);

    const bounds = L.latLngBounds(areas.map((area) => [area.lat, area.lng]));
    boundsRef.current = bounds;
    map.fitBounds(bounds, { padding: [36, 40], animate: false });

    const markerMap: Record<string, L.Marker> = {};
    areas.forEach((area) => {
      const marker = L.marker([area.lat, area.lng], {
        icon: createPinIcon(false),
        title: `${area.name} (${area.postcode})`,
        keyboard: true,
      }).addTo(map);

      marker.bindTooltip(`${area.name} · ${area.postcode}`, {
        direction: 'top',
        offset: [0, -2],
        className: 'cc-area-tooltip',
      });

      marker.on('click', () => {
        onSelectAreaRef.current(area.id);
      });

      markerMap[area.id] = marker;
    });

    mapRef.current = map;
    markersRef.current = markerMap;
    hasMountedRef.current = false;

    return () => {
      highlightCircleRef.current = null;
      markersRef.current = {};
      boundsRef.current = null;
      map.remove();
      mapRef.current = null;
    };
  }, [areas]);

  // Smoothly fly/pan to selected area and update active pin state
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const activeArea =
      areas.find((area) => area.id === activeAreaId) ?? null;

    // Update marker icons & tooltips
    areas.forEach((area) => {
      const marker = markersRef.current[area.id];
      if (!marker) return;

      const isActive = area.id === activeAreaId;
      marker.setIcon(createPinIcon(isActive));
      marker.setZIndexOffset(isActive ? 500 : 0);

      if (isActive) {
        marker.openTooltip();
      } else {
        marker.closeTooltip();
      }

      const tooltipEl = marker.getTooltip()?.getElement();
      if (tooltipEl) {
        tooltipEl.classList.toggle('cc-area-tooltip--active', isActive);
      }
    });

    // Update active neighborhood coverage circle
    if (highlightCircleRef.current) {
      map.removeLayer(highlightCircleRef.current);
      highlightCircleRef.current = null;
    }

    if (activeArea) {
      highlightCircleRef.current = L.circle([activeArea.lat, activeArea.lng], {
        radius: 850,
        color: '#7f8726',
        fillColor: '#b9c32e',
        fillOpacity: 0.16,
        weight: 1.5,
      }).addTo(map);
    }

    // Skip animation on initial mount unless a default selection was requested
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      if (!activeArea) return;
    }

    if (activeArea) {
      map.flyTo([activeArea.lat, activeArea.lng], 14, {
        animate: !prefersReducedMotion,
        duration: 1.9,
        easeLinearity: 0.22,
      });
    } else if (boundsRef.current) {
      map.flyToBounds(boundsRef.current, {
        padding: [36, 40],
        animate: !prefersReducedMotion,
        duration: 1.4,
      });
    }
  }, [activeAreaId, selectionNonce, areas]);

  const activeArea = areas.find((area) => area.id === activeAreaId) ?? null;
  const googleMapsUrl = activeArea
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${activeArea.name}, London, UK`,
      )}`
    : 'https://www.google.com/maps/search/?api=1&query=51.4718,-0.2414';

  return (
    <div className="relative isolate h-80 w-full overflow-hidden rounded-card-lg border border-brand/25 bg-surface shadow-xs sm:h-95 lg:h-99.25">
      <div
        ref={containerRef}
        aria-label="Interactive coverage map of South West and West London cleaning areas"
        className="z-0 h-full w-full"
      />

      {/* Top Overlay Controls */}
      <div className="pointer-events-none absolute top-3 right-3 left-3 z-10 flex items-start justify-between gap-2">
        <AnimatePresence mode="wait">
          {activeArea ? (
            <motion.div
              key={activeArea.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
              className="pointer-events-auto max-w-68 rounded-2xl border border-brand/35 bg-surface/95 px-3.5 py-2 shadow-sm backdrop-blur-xs"
            >
              <p className="text-[13px] font-semibold leading-tight text-ink">
                {activeArea.name}{' '}
                <span className="font-medium text-brand-hover">
                  ({activeArea.postcode})
                </span>
              </p>
              <p className="mt-0.5 text-[11.5px] leading-snug text-ink-body">
                {activeArea.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
              className="pointer-events-auto rounded-full border border-line/80 bg-surface/95 px-3.5 py-1.5 text-[12px] font-medium text-ink-strong shadow-xs backdrop-blur-xs"
            >
              All 8 London Areas · Click a location to zoom
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pointer-events-auto flex shrink-0 items-center gap-1.5">
          {activeArea && (
            <button
              type="button"
              onClick={onResetView}
              className="cursor-pointer rounded-full border border-brand bg-surface/95 px-3 py-1.5 text-[11.5px] font-semibold text-brand-hover shadow-xs backdrop-blur-xs transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              All areas
            </button>
          )}

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-line/80 bg-surface/95 px-3 py-1.5 text-[11.5px] font-medium text-ink-strong shadow-xs backdrop-blur-xs transition-colors hover:border-brand hover:text-brand-hover sm:inline-flex"
          >
            Google Maps ↗
          </a>
        </div>
      </div>
    </div>
  );
}
