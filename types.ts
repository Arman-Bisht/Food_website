export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  image?: string;
  popular?: boolean;
  featured?: boolean;
}

export interface SpecialItem {
  id: string;
  day: string;
  title: string;
  description: string;
  price: string;
}

export interface NavItem {
  label: string;
  href: string;
}