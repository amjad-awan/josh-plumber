import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Wrench } from "lucide-react"

const services = [
  {
    title: "Emergency Plumbing",
    description: "Fast help for leaks, burst pipes, blocked drains, and urgent plumbing problems.",
    image: "/images/service-emergency.png",
    href: "/services#emergency-plumbing",
  },
  {
    title: "Boiler & Heating",
    description: "Reliable boiler repairs, heating maintenance, and radiator services to keep you warm.",
    image: "/images/service-heating.png",
    href: "/services#boiler-heating",
  },
  {
    title: "Bathroom Plumbing",
    description: "Professional bathroom installation, repairs, taps, toilets, showers, and pipework.",
    image: "/images/service-bathroom.png",
    href: "/services#bathroom-plumbing",
  },
]

export default function ModernServices() {
  return (
    <section className="modern-services" aria-labelledby="services-title">
      <div className="services-heading">
        <div>
          <span className="services-eyebrow">What we do</span>
          <h2 id="services-title">Practical plumbing help, done properly.</h2>
        </div>
        <p>
          From small repairs to complete bathroom and heating work, JP Plumbing & Heating is here to help.
        </p>
      </div>

      <div className="modern-services-grid">
        {services.map((service, index) => (
          <article className="modern-service-card" key={service.title}>
            <div className="modern-service-image">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="modern-service-number">0{index + 1}</span>
            </div>

            <div className="modern-service-content">
              <div className="modern-service-icon" aria-hidden="true">
                <Wrench size={19} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="modern-service-link">
                View service <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="services-footer">
        <span>No job too small.</span>
        <Link href="/services">View all services <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
