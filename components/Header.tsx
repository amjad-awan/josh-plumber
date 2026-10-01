"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { business } from "@/data/business";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label={`${business.name} home`}
        >
          <Image
            className="brand-logo"
            src="/screen.png"
            alt="JP Plumbing & Heating"
            width={483}
            height={156}
            priority
          />{" "}
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-call"
            href={`tel:${business.phoneInternational}`}
          >
            <Phone size={16} aria-hidden="true" /> <span>Call now</span>
          </a>
        </div>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phoneInternational}`}
            className="mobile-nav-call"
          >
            <Phone size={16} aria-hidden="true" /> {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

export function MobileCallBar() {
  return (
    <a className="mobile-call-bar" href={`tel:${business.phoneInternational}`}>
      <Phone size={18} aria-hidden="true" />
      <span>
        <small>Need help?</small> Call now — {business.phone}
      </span>
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with JP Plumbing & Heating on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <MessageCircle size={25} strokeWidth={2.2} aria-hidden="true" />
      <span className="whatsapp-float-label">WhatsApp</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              P
            </span>
            <span>
              <strong>Pursglove</strong>
              <small>Plumbing & Heating</small>
            </span>
          </Link>
          <p className="footer-intro">
            Professional plumbing and heating services in Manchester and
            surrounding areas.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <div className="footer-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <div className="footer-links">
            <Link href="/services#emergency-plumbing">Emergency plumbing</Link>
            <Link href="/services#boiler-heating">Boiler & heating</Link>
            <Link href="/services#blocked-drains">Blocked drains</Link>
            <Link href="/services#bathroom-plumbing">Bathroom plumbing</Link>
            <Link href="/services#installations">Plumbing installation</Link>
          </div>
        </div>
        <div>
          <h2>Get in touch</h2>
          <div className="footer-contact">
            <a href={`tel:${business.phoneInternational}`}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <address>{business.fullAddress}</address>
            <p>
              {business.openingHours}
              <br />
              {business.emergencyHours}
            </p>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {business.name}
        </span>
        <span>No job too small</span>
      </div>
    </footer>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
}) {
  return (
    <Link href={href} className={`button button-${variant}`}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      <span>{current}</span>
    </nav>
  );
}

export function IconByName({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) {
  const icons: Record<string, React.ElementType> = {
    AlertCircle: require("lucide-react").AlertCircle,
    Flame: require("lucide-react").Flame,
    Droplets: require("lucide-react").Droplets,
    Wind: require("lucide-react").Wind,
    Droplet: require("lucide-react").Droplet,
    Utensils: require("lucide-react").Utensils,
    Wrench: require("lucide-react").Wrench,
    Settings: require("lucide-react").Settings,
  };
  const Icon = icons[name] || icons.Wrench;
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}

export function ServiceCard({
  service,
  compact = false,
}: {
  service: import("@/data/services").Service;
  compact?: boolean;
}) {
  return (
  <article className={`service-card ${compact ? "service-card-compact" : ""}`} id={service.id}><div className="service-card-image"><img src={service.image} alt={service.imageAlt} loading="lazy" /><span className="service-card-icon"><IconByName name={service.icon} /></span></div><div className="service-card-body"><span className="service-card-kicker">JP Plumbing & Heating</span><h3>{service.title}</h3><p>{service.description}</p><Link href={`/services#${service.id}`} className="text-link">Explore service <span aria-hidden="true">→</span></Link></div></article>
  )
}

export function EmergencyBanner() {
  return (
    <section className="emergency-banner">
      <div className="container emergency-inner">
        <div className="emergency-icon">
          <Phone size={22} aria-hidden="true" />
        </div>
        <div>
          <span className="eyebrow eyebrow-light">
            Urgent plumbing problem?
          </span>
          <h2>Need a plumber urgently?</h2>
          <p>
            From burst pipes and leaks to blocked drains, get in touch with our
            team to discuss your plumbing problem.
          </p>
        </div>
        <a
          className="button button-light"
          href={`tel:${business.phoneInternational}`}
        >
          Call for emergency plumbing <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

// export function ContactForm() {
//   return <form className="contact-form" action="#demo-success"><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" type="tel" required placeholder="Your phone number" /></label></div><div className="form-row"><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Service required<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Emergency plumbing</option><option>Boiler & heating</option><option>Leaking pipes & taps</option><option>Blocked drains</option><option>Bathroom plumbing</option><option>Other</option></select></label></div><label>Tell us about the problem<textarea name="message" rows={5} required placeholder="A few details will help us understand how we can help..."></textarea></label><button className="button button-primary" type="submit">Send enquiry <span aria-hidden="true">→</span></button><p className="form-note">This is a demo form. In a live website, your enquiry would be sent securely to the business.</p></form>;
// }

export function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="detail-item">
        <span className="detail-icon">
          <Phone size={18} aria-hidden="true" />
        </span>
        <div>
          <span>Call us</span>
          <a href={`tel:${business.phoneInternational}`}>{business.phone}</a>
        </div>
      </div>
      <div className="detail-item">
        <span className="detail-icon">@</span>
        <div>
          <span>Email us</span>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
      </div>
      <div className="detail-item">
        <span className="detail-icon">
          <MessageCircle size={18} aria-hidden="true" />
        </span>
        <div>
          <span>WhatsApp</span>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
      <div className="detail-item">
        <span className="detail-icon">⌖</span>
        <div>
          <span>Find us</span>
          <address>{business.fullAddress}</address>
        </div>
      </div>
      <div className="detail-item">
        <span className="detail-icon">◷</span>
        <div>
          <span>Opening hours</span>
          <p>
            {business.openingHours}
            <br />
            {business.emergencyHours}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProcessSteps() {
  const steps = [
    {
      n: "01",
      title: "Tell us what's wrong",
      text: "Call, email, or use our enquiry form to share a few details about the job.",
    },
    {
      n: "02",
      title: "Get clear advice",
      text: "We'll talk through the next steps and arrange a suitable time to visit.",
    },
    {
      n: "03",
      title: "Problem sorted",
      text: "We complete the work carefully and leave your space clean and tidy.",
    },
  ];
  return (
    <div className="process-grid">
      {steps.map((step) => (
        <div className="process-step" key={step.n}>
          <span>{step.n}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="A better experience"
          title="Straightforward from start to finish"
          align="center"
        >
          Good communication matters when something goes wrong. That's why we
          keep things clear, practical, and focused on getting your home back to
          normal.
        </SectionHeading>
        <div className="testimonial-grid">
          <blockquote>
            <p>
              "The approach we take is simple: understand the problem, explain
              the options, and do the work properly."
            </p>
            <cite>— The Pursglove Plumbing team</cite>
          </blockquote>
          <blockquote>
            <p>
              "Whether it's a dripping tap or a heating issue, we treat every
              job with the same care and attention."
            </p>
            <cite>— Local service, personal approach</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export { Link };

export const PhoneIcon = Phone;

export default Header;
