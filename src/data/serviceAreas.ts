export interface ServiceArea {
  id: string;
  name: string;
  postcode: string;
  description: string;
  lat: number;
  lng: number;
  column: 1 | 2;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'pimlico',
    name: 'Pimlico',
    postcode: 'SW1V',
    description: 'Pimlico & Victoria townhouses and mansion flats',
    lat: 51.4893,
    lng: -0.1334,
    column: 1,
  },
  {
    id: 'richmond',
    name: 'Richmond',
    postcode: 'TW9 · TW10',
    description: 'Richmond upon Thames, Richmond Hill & Riverside',
    lat: 51.4613,
    lng: -0.3037,
    column: 1,
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    postcode: 'SW3 · SW10',
    description: 'Chelsea, King’s Road & surrounding residential streets',
    lat: 51.4875,
    lng: -0.1687,
    column: 1,
  },
  {
    id: 'barnes',
    name: 'Barnes',
    postcode: 'SW13',
    description: 'Barnes Village, Castelnau & riverside homes',
    lat: 51.4718,
    lng: -0.2414,
    column: 1,
  },
  {
    id: 'fulham',
    name: 'Fulham',
    postcode: 'SW6',
    description: 'Fulham Broadway, Parsons Green & Bishops Park',
    lat: 51.4741,
    lng: -0.201,
    column: 2,
  },
  {
    id: 'sheen',
    name: 'Sheen',
    postcode: 'SW14',
    description: 'East Sheen, Mortlake & Richmond Park borders',
    lat: 51.4648,
    lng: -0.2683,
    column: 2,
  },
  {
    id: 'kew',
    name: 'Kew',
    postcode: 'TW9',
    description: 'Kew Gardens, Kew Green & Thameside properties',
    lat: 51.4787,
    lng: -0.2877,
    column: 2,
  },
  {
    id: 'twickenham',
    name: 'Twickenham',
    postcode: 'TW1 · TW2',
    description: 'Twickenham Green, Strawberry Hill & St Margarets',
    lat: 51.4496,
    lng: -0.337,
    column: 2,
  },
];

