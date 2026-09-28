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
        {/* Hero */}
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

        {/* Services */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, desc, Icon], index) => (
                <article
                  key={title as string}
                  className="
                    group relative flex min-h-[360px] flex-col
                    overflow-hidden rounded-3xl
                    border border-[#0f2d4d]/10
                    bg-white p-7
                    shadow-[0_8px_30px_rgba(15,45,77,0.04)]
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-[#0f2d4d]/20
                    hover:shadow-[0_20px_50px_rgba(15,45,77,0.12)]
                  "
                >
                  {/* Top accent line */}
                  <span
                    className="
                      absolute left-0 top-0 h-1 w-full
                      origin-left scale-x-0
                      bg-[#0f2d4d]
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />

                  {/* Top */}
                  <div className="mb-8 flex items-start justify-between">
                    {/* Number */}
                    <span
                      className="
                        text-xs font-bold tracking-[0.15em]
                        text-[#0f2d4d]/30
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <span
                      className="
                        flex h-16 w-16 items-center justify-center
                        rounded-2xl
                        border border-[#0f2d4d]/10
                        bg-[#f5f9ff]
                        text-[#0f2d4d]
                        transition-all duration-300
                        group-hover:-rotate-3
                        group-hover:bg-[#0f2d4d]
                        group-hover:text-white
                      "
                    >
                      <Icon size={30} strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className="
                        mb-2 block
                        text-[11px] font-bold uppercase
                        tracking-[0.16em]
                        text-[#5ba8ff]
                      "
                    >
                      Service
                    </span>

                    <h2
                      className="
                        mb-3
                        text-[22px] font-semibold
                        leading-tight tracking-tight
                        text-[#10263d]
                      "
                    >
                      {title as string}
                    </h2>

                    <p
                      className="
                        max-w-[320px]
                        text-[15px] leading-7
                        text-[#10263d]/65
                      "
                    >
                      {desc as string}
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <a
                    href="tel:+918010904040"
                    className="
                      mt-7 flex items-center justify-between
                      border-t border-[#0f2d4d]/10
                      pt-[18px]
                      text-sm font-bold
                      text-[#10263d]
                      no-underline
                    "
                  >
                    <span>Book this service</span>

                    <span
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        bg-[#f5f9ff]
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:bg-[#0f2d4d]
                        group-hover:text-white
                      "
                    >
                      <MoveUpRight size={18} />
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engine Oil */}
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
