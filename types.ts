
export enum Page {
  HOME = 'home',
  PACKAGES = 'packages',
  WALLET = 'wallet',
  WIFI = 'wifi',
  AGENTS = 'agents'
}

export interface Device {
  id: string;
  name: string;
  status: string;
  icon: string;
  isPaused: boolean;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  isFeatured?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  location: string;
  phone: string;
}
