import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Battery,
  CheckCircle2,
  CircleGauge,
  MapPin,
  Phone,
  Settings2,
  ShieldCheck,
  Wrench,
  Zap,
  MoveUpRight,
} from "lucide-react";
import products from "@/data/products.json";
import { PageShell, TrustStrip } from "@/components/site-shell";
import { HeroCarousel } from "@/components/hero-carousel";

const services = [
  [
    "CAR JUMP START",
    "Back on the road quickly with safe, professional jump-start assistance.",
    Zap,
  ],
  [
    "BATTERY CHARGING",
    "Restore your battery with the right charge and a clear health check.",
    Battery,
  ],
  [
    "BATTERY SERVICE",
    "Fitment, terminal cleaning and battery replacement support.",
    Settings2,
  ],
  [
    "HEALTH CHECK & REPORT",
    "Know your car or bike battery condition before it becomes a problem.",
    CircleGauge,
  ],
];

export default function Home() {
  return (
    <PageShell>
      <main>
        {/* Carousel  */}
        <HeroCarousel />

        {/* Hero section  */}
        <section className="hero">
          <div className="container hero-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> Surat&apos;s trusted battery
                shop
              </div>
              <h1>
                Power that keeps you <em>moving.</em>
              </h1>
              <p>
                Premium batteries, practical advice and dependable auto care for
                every car and bike in Surat.
              </p>
              <div className="hero-actions flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="button button-primary">
                  Shop batteries <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="button button-link btn1 hover:underline">
                  Explore services <span></span>
                </Link>
              </div>
              <div className="hero-proof">
                <span>
                  <CheckCircle2 /> Amaron & Exide
                </span>
                <span>
                  <CheckCircle2 /> Expert fitment
                </span>
              </div>
            </div>
            <div className="hero-art">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="battery-illustration">
                <span className="battery-top" />
                <span className="battery-plus">+</span>
                <span className="battery-minus">−</span>
                <span className="battery-label">
                  OM BALAJI
                  <br />
                  <b>BATTERY</b>
                </span>
              </div>
              <div className="float-card">
                <span className="float-icon">
                  <ShieldCheck />
                </span>
                <div>
                  <strong>Genuine quality</strong>
                  <small>Backed by trusted brands</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* What we do */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="kicker">What we do</span>
                <h2>
                  Everything your vehicle
                  <br />
                  <em>needs to stay ready.</em>
                </h2>
              </div>
              <Link href="/services" className="text-link">
                View all services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(([title, desc, Icon]) => (
                <Link
                  href="/services"
                  className="service-card"
                  key={title as string}
                >
                  <span className="service-icon">
                    <Icon />
                  </span>
                  <h3>{title as string}</h3>
                  <p>{desc as string}</p>
                  <span className="card-arrow inline-block">
                    <MoveUpRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Producats */}
        <section className="section products-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="kicker">Our range</span>
                <h2>
                  Power you can <em>count on.</em>
                </h2>
              </div>
              <Link href="/products" className="text-link">
                See all products <ArrowRight size={16} />
              </Link>
            </div>
            <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((p) => p.featured)
                .map((product, index) => (
                  <a
                    href={`https://wa.me/918010904040?text=${encodeURIComponent(
                      `Hi, I'm interested in ${product.name}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card product-card-3d"
                    key={product.id}
                  >
                    <div>
                      <div className="product-stage">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      {product.voltage ? (
                        <span className="voltage">{product.voltage}</span>
                      ) : null}
                    </div>
                    <div className="product-info">
                      <span className="product-category">
                        {product.category}
                      </span>
                      <h3>{product.name}</h3>
                      <p>{product.brand} · Genuine fitment available</p>
                      <span className="product-link">
                        View details <ArrowRight size={15} />
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </section>

        <section className="callout">
          <div className="container callout-inner">
            <div>
              <span className="kicker">Need a hand?</span>
              <h2>
                Not sure which battery
                <br />
                fits your vehicle?
              </h2>
              <p>
                Tell us your vehicle model. We&apos;ll help you find the right
                match.
              </p>
            </div>
            <Link href="/contact" className="button button-dark">
              Talk to an expert <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="company-home">
          <div className="container company-home-grid grid grid-cols-1 lg:grid-cols-2">
            <div>
              <span className="kicker">Why Om Balaji Battery</span>
              <h2>
                Good advice is part of
                <br />
                <em>every good battery.</em>
              </h2>
              <p>
                From your first question to final fitment, our local team keeps
                the process simple, clear and reliable. We stock trusted Amaron
                and Exide batteries for cars and bikes, plus Shell, Motul and
                Amaron engine oils.
              </p>
              <Link href="/about" className="text-link">
                Learn about our shop <ArrowRight size={16} />
              </Link>
            </div>
            <div className="company-promise">
              <div>
                <ShieldCheck />
                <strong>Genuine brands</strong>
                <span>Reliable products, clearly explained.</span>
              </div>
              <div>
                <Wrench />
                <strong>Practical service</strong>
                <span>Fitment and care by people who know vehicles.</span>
              </div>
              <div>
                <Phone />
                <strong>Easy to reach</strong>
                <span>Open every day from 9:30 AM to 7:30 PM.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="location">
          <div className="container location-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="kicker">Find us in Surat</span>
              <h2>
                Drop by. We&apos;re
                <br />
                <em>easy to find.</em>
              </h2>
              <p>
                <MapPin size={18} /> 02 Sumangal Shopping Center, Opp. Vijay
                Sales, near Varachha Police Station, Surat – 395006
              </p>
              <a
                className="text-link"
                href="https://maps.app.goo.gl/ts6McFnzcPg6Mcjc6"
                target="_blank"
              >
                Get directions <ArrowRight size={16} />
              </a>
            </div>
            <div className="map-card">
              <div className="map-pin">
                <MapPin />
              </div>
              <span>
                OM BALAJI<span>BATTERY</span>
              </span>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
