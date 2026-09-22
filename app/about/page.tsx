import { HeartHandshake, ShieldCheck, Wrench } from "lucide-react";
import { PageShell } from "@/components/site-shell";
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
            {[
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
            ].map(([title, Icon, text]) => (
              <div className="value" key={title as string}>
                <Icon />
                <h2>{title as string}</h2>
                <p>{text as string}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
