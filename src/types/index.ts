export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
}

export interface IndustryItem {
  name: string;
  icon: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    description: string;
    href: string;
    icon: string;
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}
