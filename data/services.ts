export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
   image: string;
  imageAlt: string
}


export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  image: string; // Added image field
    imageAlt: string
}

export const services: Service[] = [
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    description: "24/7 emergency call-out service for burst pipes, leaks, and urgent plumbing issues",
    details: "From burst pipes and flooding to blocked drains and gas leaks, we respond quickly to any plumbing emergency. Our experienced team is available around the clock to minimise damage and get your plumbing working again.",
    icon: "AlertCircle",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "boiler-heating",
    title: "Boiler & Heating",
    description: "Installation, repair, and maintenance of boilers and heating systems",
    details: "Keep your home warm and comfortable with our professional boiler and heating services. We repair existing systems and install new efficient boilers from leading manufacturers.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1542013936693-84d4b65e3abb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "leaking-pipes",
    title: "Leaking Pipes & Taps",
    description: "Quick repair for leaking pipes, taps, and water damage issues",
    details: "Small leaks can waste water and damage your home. We identify the source quickly and provide reliable repairs to stop leaks and prevent costly water damage.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains",
    description: "Professional drain clearing and unblocking services",
    details: "Blocked drains can cause water backup and hygiene issues. We use modern techniques to clear blockages quickly without damaging your pipework.",
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    description: "Complete bathroom installation and renovation services",
    details: "From new suite installation to damaged pipe repair, we handle all aspects of bathroom plumbing. We work with your designer or recommend solutions for your needs.",
    icon: "Droplet",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    description: "Kitchen plumbing installation and repair services",
    details: "Install new taps, dishwashers, and water systems. We handle all kitchen plumbing requirements, from simple tap replacement to complex water system installation.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "boiler-repairs",
    title: "Boiler Repairs",
    description: "Expert boiler repair and servicing for all makes",
    details: "Gas and oil boiler repairs, breakdowns, and servicing. Our engineers diagnose issues quickly and provide effective repairs to restore your heating.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1542013936693-84d4b65e3abb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "installations",
    title: "Plumbing Installation",
    description: "Complete plumbing system installation for new builds and renovations",
    details: "New construction, extensions, or full system upgrade. We design and install reliable plumbing systems that meet all current building regulations.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
];
