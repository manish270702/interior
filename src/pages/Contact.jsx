import { Phone, Mail, MapPin } from "lucide-react";
import QuoteForm from "../components/QuoteForm";

export default function Contact() {
  return (
    <section className="section py-20">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        {/* Contact Information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
            Contact us
          </p>

          <h1 className="display mt-3 text-5xl">
            Let's design your space.
          </h1>

          <p className="mt-5 leading-7 text-ink/60">
            Share a few details and we'll get back to you with the next steps.
          </p>

          {/* Contact Details */}
          <div className="mt-10 grid gap-5 text-sm">
            <div className="flex gap-3">
              <Phone className="text-sand" />
              <span>+91 9414405430</span>
            </div>

            <div className="flex gap-3">
              <Mail className="text-sand" />
              <span>tjinterio@gmail.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-sand" />
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <QuoteForm />
      </div>
    </section>
  );
}