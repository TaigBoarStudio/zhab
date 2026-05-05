export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
  tags: string[];
  category: string;
  categorySlug: string;
  subcategory?: string;
  brewingStats?: BrewingStats;
}

export interface BrewingStats {
  temp: string;
  time: string;
  amount: string;
}

export interface Tea {
  id: string;
  name: string;
  type: string;
  origin: string;
  description: string;
  brewingGuide: BrewingStats;
  benefits: string[];
  image?: string;
}

export type ThemePreset = 'classic' | 'modern' | 'brutalist';

export interface RegionTea {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  price?: number;
  isAvailable: boolean;
}

export interface Region {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  teas: RegionTea[];
}
