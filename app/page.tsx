import { ArrowRight, Check, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import {
  Header,
  Footer,
  MobileCallBar,
  ButtonLink,
  SectionHeading,
  ServiceCard,
  EmergencyBanner,
  ProcessSteps,
  StructuredData,
} from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { business, siteConfig } from "@/data/business";
import { services } from "@/data/services";
import { getLocalBusinessSchema } from "@/lib/schema";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <StructuredData
          data={getLocalBusinessSchema(
            `${siteConfig.baseUrl}/images/plumber-hero.png`,
          )}
        />
       <HeroSection/>
        <section className="trust-strip">
          <div className="container trust-grid">
            <span>
              <ShieldCheck /> Professional service
            </span>
            <span>
              <Wrench /> Repairs & installations
            </span>
            <span>
              <Sparkles /> Respectful in your home
            </span>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="What we do"
              title="Plumbing help without the hassle"
            >
              A straightforward service for the jobs you need sorting, from a
              dripping tap to a complete heating upgrade.
            </SectionHeading>
            <div className="services-grid">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="center-action">
              <ButtonLink href="/services" variant="outline">
                View all services <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </section>
        <EmergencyBanner />
        <section className="section soft-section">
          <div className="container split-section">
            <div>
              <SectionHeading
                eyebrow="How it works"
                title="A simple process, done properly"
              >
                We keep communication clear from the first call through to the
                finished job.
              </SectionHeading>
              <ProcessSteps />
            </div>
            <div className="highlight-panel">
              <span className="eyebrow">Local knowledge</span>
              <h2>Here when you need a hand.</h2>
              <p>
                We serve Northampton and nearby areas with dependable plumbing
                and heating support. Tell us what is happening and we will help
                you understand the next step.
              </p>
              <ButtonLink href="/service-areas" variant="light">
                Areas we cover <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </section>

                <ReviewsCarousel />

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow eyebrow-light">Let's get it sorted</span>
              <h2>Have a plumbing job in mind?</h2>
              <p>
                Call {business.phone} or send an enquiry and we will get back to
                you.
              </p>
            </div>
            <ButtonLink href="/contact" variant="light">
              Contact us <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

export const metadata = {
  title: "JP Plumbing & Heating | Northampton Plumber",
  description:
    "JP Plumbing & Heating provides plumbing, radiator, bathroom and heating services across Northampton. No job is too small.",
};

void metadata;
