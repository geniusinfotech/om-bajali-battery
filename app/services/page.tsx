import {
  BatteryCharging,
  CircleGauge,
  Droplets,
  FileCheck2,
  Gauge,
  Settings2,
  Zap,
  MoveUpRight,
} from "lucide-react";
import { PageShell } from "@/components/site-shell";
const services = [
  [
    "CAR JUMP START",
    "Fast, safe jump-start support when your vehicle won’t turn over.",
    Zap,
  ],
  [
    "BATTERY CHARGING",
    "Professional charging to restore capacity and extend battery life.",
    BatteryCharging,
  ],
  [
    "BATTERY SERVICE",
    "Terminal cleaning, fitment and practical battery maintenance.",
    Settings2,
  ],
  [
    "BATTERY HEALTH CHECK",
    "A clear check for both car and bike batteries.",
    CircleGauge,
  ],
  [
    "BATTERY REPORT",
    "Understand your battery’s condition with an easy-to-read report.",
    FileCheck2,
  ],
  [
    "ENGINE OIL",
    "Bike and car engine oil from Shell, Motul and Amaron.",
    Droplets,
  ],
];
export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="kicker">Auto care services</span>
            <h1>
              More than a battery
              <br />
              <em>shop.</em>
            </h1>
            <p>
              From emergency support to routine checks, we help your vehicle
              perform at its best.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="service-grid service-grid-large">
              {services.map(([title, desc, Icon]) => (
                <article
                  className="service-card service-card-large"
                  key={title as string}
                >
                  <span className="service-icon">
                    <Icon />
                  </span>
                  <h2>{title as string}</h2>
                  <p>{desc as string}</p>
                  <a href="tel:+918010904040" className="text-link flex justify-center items-center">
                    Book this service <MoveUpRight size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="oil-note">
          <div className="container oil-inner">
            <div>
              <span className="kicker">Engine oils</span>
              <h2>Shell · Motul · Amaron</h2>
              <p>Quality oils for smoother rides and longer engine life.</p>
            </div>
            <Gauge />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
