import Link from "next/link";
import { ArrowRight, FileText, Phone, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site-shell";

const sections = [
  {
    title: "Information we collect",
    Icon: FileText,
    text: "When you contact us, we may receive your name, phone number and message so we can respond to your enquiry.",
  },
  {
    title: "How we use it",
    Icon: ShieldCheck,
    text: "We use enquiry details only to provide support, answer questions and arrange requested services. We do not sell your personal information.",
  },
  {
    title: "Contact",
    Icon: Phone,
    text: "For questions about this policy, call +91 80109 04040 or visit our shop at 02 Sumangal Shopping Center, Surat – 395006.",
  },
];

export default function Privacy() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="kicker">Your privacy</span>
            <h1>
              Privacy
              <br />
              <em>policy.</em>
            </h1>
            <p>
              PowerCell Batteries &amp; Auto Care respects your privacy. This
              policy explains how we handle information shared through this
              website.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container legal">
            <div className="support-grid">
              {sections.map(({ title, Icon, text }) => (
                <div className="support-card" key={title}>
                  <div className="support-card-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="text-link mt-8 inline-flex">
              Have a question about this policy? Get in touch{" "}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
