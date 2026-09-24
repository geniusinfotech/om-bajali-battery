import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-shell";

const faqs: [string, string][] = [
  [
    "Which battery brands do you sell?",
    "We stock genuine Amaron and Exide batteries for both bikes and cars.",
  ],
  [
    "How do I choose the right battery?",
    "Share your vehicle make and model with us. Our team will recommend the correct size and specification.",
  ],
  [
    "Do you provide battery fitment?",
    "Yes. We provide professional fitment and basic terminal service at our shop.",
  ],
  [
    "Do you offer emergency jump starts?",
    "Yes, our car jump-start service is available. Call +91 80109 04040 for assistance.",
  ],
  [
    "Which engine oils are available?",
    "We offer bike and car engine oils from Shell, Motul and Amaron.",
  ],
];

export default function FAQ() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="kicker">Questions, answered</span>
            <h1>
              Good to know
              <br />
              <em>before you visit.</em>
            </h1>
          </div>
        </section>

        <section className="section">
          <div className="container faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q} <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="visit-header">
              <span className="kicker">Still have questions?</span>
              <h2>We&apos;re happy to help over the phone.</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918010904040" className="button button-primary">
                Call +91 80109 04040 <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="button button-dark">
                Visit contact page
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
