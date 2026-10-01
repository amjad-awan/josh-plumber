"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock3, Droplets, Flame } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { eyebrow: "Fast response", title: "Plumbing problems, calmly sorted.", copy: "From leaks and blocked sinks to urgent repairs, get practical help when you need it.", icon: Droplets },
  { eyebrow: "Heating & radiators", title: "Stay warm through every season.", copy: "Reliable radiator repairs, replacements and heating work for comfortable homes.", icon: Flame },
  { eyebrow: "Bathrooms", title: "Small jobs. Complete transformations.", copy: "Thoughtful bathroom plumbing and installation work, finished neatly and properly.", icon: Clock3 },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <div className="hero-carousel" aria-label="JP Plumbing and Heating highlights">
      <Image src="/images/plumber-hero.png" alt="Plumber working on a heating system" fill priority className="hero-image" sizes="(max-width: 800px) 100vw, 50vw" />
      <div className="hero-carousel-shade" />
      <div className="hero-slide-content" key={active}>
        <span className="hero-slide-icon"><Icon size={20} /></span>
        <span className="eyebrow eyebrow-light">{slide.eyebrow}</span>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
      </div>
      <div className="hero-carousel-controls">
        <button type="button" aria-label="Previous highlight" onClick={() => setActive((active - 1 + slides.length) % slides.length)}><ChevronLeft size={18} /></button>
        <div className="hero-dots" role="tablist" aria-label="Choose highlight">
          {slides.map((item, index) => <button key={item.title} type="button" role="tab" aria-selected={active === index} aria-label={`Show highlight ${index + 1}`} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} />)}
        </div>
        <button type="button" aria-label="Next highlight" onClick={() => setActive((active + 1) % slides.length)}><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}

export default HeroCarousel;
