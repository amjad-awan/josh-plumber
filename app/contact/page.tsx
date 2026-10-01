import {
  Header,
  Footer,
  MobileCallBar,
  PageIntro,
  Breadcrumbs,
  ContactDetails,
} from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
export const metadata = {
  title: "Contact a Plumber in Northampton | Request a Quote",
  description:
    "Contact Pursglove Plumbing & Heating in Northampton for plumbing repairs, heating work, installations and emergency call-outs.",
};
export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs current="Contact" />
        <PageIntro
          eyebrow="Get in touch"
          title="Tell us what you need help with"
        >
          Call us directly for urgent problems, or send an enquiry with a few
          details about the work you have in mind.
        </PageIntro>
        <section className="section">
          <div className="container contact-layout">
            <div>
              <h2 className="contact-title">We are here to help.</h2>
              <p className="contact-copy">
                From radiators and bathrooms to everyday plumbing repairs, no
                job is too small. Start the conversation today.
              </p>
              <ContactDetails />
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
