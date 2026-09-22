"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BatteryCharging,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wrench,
  X,
  MoveUpRight,
} from "lucide-react";
import { useState } from "react";
import { CursorEffect } from "@/components/cursor-effect";
import Image from "next/image";

const nav = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["About us", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Clock3 size={14} /> Mon–Sun · 9:30 AM–7:30 PM
          </span>
          <a href="tel:+918010904040">
            <Phone size={14} /> +91 80109 04040
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </span>

            <span className="text-center">
              <strong>Om Balaji</strong>
              <span className="text-center font-black">Batery</span>
            </span>
          </Link>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "nav open" : "nav"}>
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              className="nav-cta flex justify-center items-center"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Get a quote{" "}
              <span>
                <MoveUpRight size={14} />
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
            <span className="text-center">
              <strong>Om Balaji</strong>
              <span className="text-center font-black">Batery</span>
            </span>
          </Link>
          <p className="footer-copy">
            Keeping Surat moving with dependable batteries, honest advice and
            fast roadside support.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/products">Our products</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQs</Link>
        </div>
        <div>
          <h4>Visit us</h4>
          <p>
            02 Sumangal Shopping Center
            <br />
            Opp. Vijay Sales, near Varachha Police Station
            <br />
            Surat – 395006
          </p>
          <a href="tel:+918010904040" className="footer-phone">
            +91 80109 04040
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 PowerCell Batteries & Auto Care</span>
        <span>
          {" "}
          Crafted by
          <Link
            href="https://www.codespire.in/"
            target="_blank"
            className="footer-phone"
          >
            {" "}
            Codespire Technologies
          </Link>
        </span>
        <Link href="/privacy">Privacy policy</Link>
      </div>
    </footer>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-grid">
        <span>
          <ShieldCheck /> Genuine brands only
        </span>
        <span>
          <Wrench /> Expert fitment
        </span>
        <span>
          <MapPin /> Local Surat support
        </span>
        <span>
          <Phone /> Call +91 80109 04040
        </span>
      </div>
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorEffect />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
