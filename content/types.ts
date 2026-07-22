export interface OpeningPeriod {
  day: string;
  shortDay: string;
  schemaDay: string;
  opens?: string;
  closes?: string;
  display: string;
}

export interface BusinessDetails {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phoneDisplay: string;
  phoneInternational: string;
  phoneHref: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postcode: string;
    country: string;
    display: string;
  };
  openingHours: OpeningPeriod[];
  links: {
    directOrder: string;
    justEat: string;
    instagram: string;
    directions: string;
    reviews: string;
  };
}

export type DietaryLabel = "Vegetarian" | "Vegan";

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  dietary?: DietaryLabel[];
  popular?: boolean;
}

export interface MenuSection {
  id: string;
  name: string;
  eyebrow: string;
  description?: string;
  items: MenuItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface Review {
  quote: string;
  author: string;
  source: "Google" | "Tripadvisor";
  href: string;
}
