import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Wrench } from "lucide-react";
import { PageShell } from "@/components/site-shell";

const values = [
  [
    "Straight advice",
    ShieldCheck,
    "We recommend what your vehicle needs, not what it doesn’t.",
  ],
  [
    "Skilled service",
    Wrench,
    "From fitment to health checks, every job is handled with care.",
  ],
  [
    "Here when needed",
    HeartHandshake,
    "A friendly local team you can count on for everyday support.",
  ],
];

export default function About() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="kicker">About PowerCell</span>
            <h1>
              Local care.
              <br />
              <em>Dependable power.</em>
            </h1>
            <p>
              We’re a Surat-based battery and auto care shop built around honest
              recommendations and quality products.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container values-grid">
            {values.map(([title, Icon, text]) => (
              <div className="value" key={title as string}>
                <Icon />
                <h2>{title as string}</h2>
                <p>{text as string}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="callout">
          <div className="container callout-inner">
            <div>
              <span className="kicker">Ready when you are</span>
              <h2>Let&apos;s get your vehicle sorted.</h2>
              <p>
                Browse the range or talk to our team about the right battery
                for your car or bike.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="button button-dark">
                Shop batteries <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="button button-primary">
                Talk to us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
