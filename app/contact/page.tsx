import {
  BatteryCharging,
  Bike,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MoveUpRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/site-shell";

const supportCards = [
  {
    title: "Battery fitment",
    description:
      "Car and bike battery replacement with quick checks before and after installation.",
    Icon: BatteryCharging,
  },
  {
    title: "Vehicle-specific advice",
    description:
      "We match the right battery size, power rating and fitment to your exact vehicle.",
    Icon: CarFront,
  },
  {
    title: "Local support",
    description:
      "Friendly guidance for routine maintenance, jump-start help and reliable after-sales advice.",
    Icon: ShieldCheck,
  },
];

const serviceAreas = [
  "Adajan",
  "Athwa",
  "Varachha",
  "Piplod",
  "Udhna",
  "Ghod Dod Road",
  "Central Surat",
];

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="kicker">Visit or call</span>
            <h1>
              Let&apos;s get you
              <br />
              <em>moving again.</em>
            </h1>
            <p>
              No online forms, no waiting. Speak directly with our team for
              battery advice, fitment and roadside help.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <div className="contact-info">
              <span className="kicker">Contact details</span>
              <div className="contact-item">
                <Phone />
                <div>
                  <strong>Call us directly</strong>
                  <a href="tel:+918010904040">+91 80109 04040</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin />
                <div>
                  <strong>Visit our shop</strong>
                  <p>
                    02 Sumangal Shopping Center
                    <br />
                    Opp. Vijay Sales, near Varachha Police Station
                    <br />
                    Surat – 395006
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Clock3 />
                <div>
                  <strong>Shop hours</strong>
                  <p>
                    Monday to Sunday
                    <br />
                    9:30 AM to 7:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <span className="kicker">Need help today?</span>
              <h2>Talk to a battery expert.</h2>
              <p>
                Tell us your car or bike model over the phone. We&apos;ll
                recommend the right battery and arrange service if needed.
              </p>
              <a className="button button-primary" href="tel:+918010904040">
                Call +91 80109 04040 <MoveUpRight />
              </a>
              <div className="contact-note">
                Usually quickest for urgent jump starts and battery service.
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="support-header">
              <span className="kicker">Why customers reach us</span>
              <h2>More than just a battery shop.</h2>
            </div>

            <div className="support-grid">
              {supportCards.map(({ title, description, Icon }) => (
                <div key={title} className="support-card">
                  <div className="support-card-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container coverage-grid">
            <div className="coverage-panel">
              <span className="kicker">Service coverage</span>
              <h2>Serving drivers across Surat.</h2>
              <p>
                Whether you are nearby or commuting across the city, we help
                with battery selection, quick replacement and dependable local
                advice.
              </p>

              <div className="coverage-list">
                {serviceAreas.map((area) => (
                  <div key={area} className="coverage-item">
                    <CheckCircle2 />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="help-panel">
              <span className="kicker">Best time to call</span>
              <h3>Quick help usually within 30–45 minutes.</h3>
              <div className="help-item-list">
                <div className="help-item">
                  <Clock3 />
                  <div>
                    <strong>Open every day</strong>
                    Monday to Sunday, 9:30 AM to 7:30 PM
                  </div>
                </div>
                <div className="help-item">
                  <Phone />
                  <div>
                    <strong>Fastest support</strong>
                    Call before visiting for the quickest recommendation and
                    stock update.
                  </div>
                </div>
                <div className="help-item">
                  <Bike />
                  <div>
                    <strong>Vehicle advice</strong>
                    Tell us your model and we can guide you even before you
                    arrive.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="visit-header">
              <span className="kicker">Before you visit</span>
              <h2>A few quick things to bring.</h2>
            </div>

            <div className="faq-list visit-faq">
              <details open>
                <summary>
                  What vehicle details should I share? <span>+</span>
                </summary>
                <p>
                  Tell us your make, model, registration number and battery size
                  if you know it. This helps us recommend the correct fit
                  quickly.
                </p>
              </details>
              <details>
                <summary>
                  Do you help with emergency battery issues? <span>+</span>
                </summary>
                <p>
                  Yes. Call us first for urgent battery checks, jump-start
                  support and replacement guidance based on your location and
                  vehicle.
                </p>
              </details>
              <details>
                <summary>
                  Is there a way to check before coming in? <span>+</span>
                </summary>
                <p>
                  Absolutely. A quick phone call lets us confirm stock, estimate
                  fitment time and advise whether your battery needs immediate
                  attention.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
