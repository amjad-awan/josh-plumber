import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Wrench, PhoneCall, Star } from "lucide-react";
import { business } from "@/data/business";
import { ButtonLink } from "@/components/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative bg-[var(--background)] py-16 lg:py-24 overflow-hidden border-b border-[var(--line)]">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[var(--mint)]/60 to-transparent pointer-events-none rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Quick Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Trust Pill: Ratings & Status */}
            <div className="inline-flex items-center gap-3 bg-[var(--white)] border border-[var(--line)] px-4 py-2 rounded-full shadow-sm">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[var(--foreground)]">
                Trusted by homeowners in {business.serviceArea}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--foreground)] leading-[1.1]">
              Expert Plumbers, <br />
              <span className="text-[var(--blue)]">On Time,</span> Done Right.
            </h1>

            {/* Real-World Description */}
            <p className="text-[var(--muted)] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              From emergency boiler breakdowns to flawless bathroom installations, <strong className="text-[var(--foreground)] font-semibold">{business.name}</strong> delivers honest, tidy, and reliable plumbing solutions across <span className="text-[var(--green-dark)] font-semibold">{business.serviceArea}</span>.
            </p>

            {/* High-Impact CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <ButtonLink 
                href="/contact" 
                className="inline-flex items-center justify-center bg-[var(--green)] hover:bg-[var(--green-dark)] text-[var(--white)] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[var(--green)]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Fast Quote <ArrowRight size={18} className="ml-2" />
              </ButtonLink>
              
              <a
                href={`tel:${business.phoneInternational}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--white)] hover:bg-[var(--cream)] border-2 border-[var(--line)] text-[var(--foreground)] font-bold px-7 py-4 rounded-xl transition-all shadow-sm hover:border-[var(--green)]"
              >
                <PhoneCall size={18} className="text-[var(--green-dark)]" />
                <span>Call {business.phone}</span>
              </a>
            </div>

            {/* Real-World Guarantee Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--mint)] text-[var(--green-dark)]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">Response Time</h4>
                  <p className="text-xs text-[var(--muted)]">24/7 Emergency Callouts</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--mint)] text-[var(--green-dark)]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">Fully Insured</h4>
                  <p className="text-xs text-[var(--muted)]">Guaranteed Workmanship</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--mint)] text-[var(--green-dark)]">
                  <Wrench size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">No Hidden Fees</h4>
                  <p className="text-xs text-[var(--muted)]">Clear, Upfront Pricing</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Real World Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--white)] bg-[var(--cream)]">
                <Image
                  src="/images/plumber-hero.png"
                  alt="Professional plumber working on heating system"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[var(--green)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2 inline-block">
                    Licensed Engineers
                  </span>
                  <p className="text-sm font-medium text-slate-100">
                    Equipped with modern tools to resolve leaks, heating faults, and installations on the first visit.
                  </p>
                </div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 bg-[var(--white)] border border-[var(--line)] p-4 rounded-2xl shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/10 text-[var(--blue)] flex items-center justify-center font-bold text-lg">
                  24/7
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)] font-medium">Emergency Status</div>
                  <div className="text-sm font-extrabold text-[var(--foreground)] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available Right Now
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}