import { business, siteConfig } from "@/data/business";

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  image?: string;
  description?: string;
  telephone: string;
  email: string;
  url: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
}

export const getLocalBusinessSchema = (imageUrl?: string): LocalBusinessSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.name,
    ...(imageUrl && { image: imageUrl }),
    description: business.tagline,
    telephone: business.phoneInternational,
    email: business.email,
    url: siteConfig.baseUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      postalCode: business.postalCode,
      addressCountry: business.countryCode,
    },
    areaServed: {
      "@type": "City",
      name: business.serviceArea,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "24:00",
        closes: "24:00",
      },
    ],
  };
};

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export const getBreadcrumbSchema = (
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
};

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    telephone: string;
    url: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
}

export const getServiceSchema = (serviceName: string, serviceDescription: string): ServiceSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneInternational,
      url: siteConfig.baseUrl,
    },
    areaServed: {
      "@type": "City",
      name: business.serviceArea,
    },
  };
};
