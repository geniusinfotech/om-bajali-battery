"use client";

import { FormEvent, useState } from "react";
import {
  BatteryCharging,
  CheckCircle2,
  Clock3,
  FileText,
  Loader2,
  MapPin,
  MoveUpRight,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/site-shell";

const supportCards = [
  {
    icon: BatteryCharging,
    title: "Battery fitment",
    description:
      "Car and bike battery replacement with quick checks before and after installation.",
  },
  {
    icon: ShieldCheck,
    title: "Vehicle-specific advice",
    description:
      "We match the right battery size, power rating and fitment to your exact vehicle.",
  },
  {
    icon: FileText,
    title: "Local support",
    description:
      "Friendly guidance for routine maintenance, jump-start help and reliable after-sales advice.",
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

const services = [
  "Battery Replacement",
  "Battery Service",
  "Car Jump Start",
  "Battery Charging",
  "Battery Health Check",
  "Battery Report",
  "Other",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormStatus(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    console.log(accessKey);

    if (!accessKey) {
      console.error("Web3Forms access key is missing.");

      setFormStatus("error");
      setIsSubmitting(false);

      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact Enquiry - Om Balaji Battery");
    formData.append("from_name", "Om Balaji Battery Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log("Web3Forms response:", result);

      if (result.success) {
        setFormStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms failed:", result);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-[#dce8f3] bg-[#f5f9ff]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#5ba8ff]">
              Visit or call
            </p>

            <h1 className="text-4xl font-black tracking-tight text-[#10263d] sm:text-5xl lg:text-6xl">
              Let&apos;s get you moving again.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526b82]">
              Need battery advice, fitment or roadside help? Contact our team
              directly or send us your vehicle details using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5 lg:px-8">
          {/* CONTACT DETAILS */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-[28px] border border-[#dce8f3] bg-[#f5f9ff] p-7 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ba8ff]">
                Contact details
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#10263d]">
                Talk to our team.
              </h2>

              <p className="mt-4 leading-7 text-[#526b82]">
                For urgent battery problems, calling us directly is usually the
                fastest option.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+918010904040"
                  className="group flex items-center gap-4 rounded-2xl border border-[#dce8f3] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#5ba8ff] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f2d4d] text-white">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7890a5]">
                      Call us directly
                    </p>

                    <p className="mt-1 font-bold text-[#10263d]">
                      +91 80109 04040
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-[#dce8f3] bg-white p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f2ff] text-[#0f2d4d]">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7890a5]">
                      Visit our shop
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#10263d]">
                      02 Sumangal Shopping Center,
                      <br />
                      Opp. Vijay Sales, near Varachha Police Station,
                      <br />
                      Surat – 395006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#dce8f3] bg-white p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f2ff] text-[#0f2d4d]">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7890a5]">
                      Shop hours
                    </p>

                    <p className="mt-1 font-semibold text-[#10263d]">
                      Monday – Sunday
                    </p>

                    <p className="text-sm text-[#526b82]">9:30 AM – 7:30 PM</p>
                  </div>
                </div>
              </div>

              {/* URGENT CTA */}
              <div className="mt-8 rounded-2xl bg-[#0f2d4d] p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Phone size={18} />
                  </div>

                  <p className="font-bold">Need urgent help?</p>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Call us for jump-start support, battery problems or urgent
                  replacement advice.
                </p>

                <a
                  href="tel:+918010904040"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0f2d4d] transition hover:bg-[#5ba8ff] hover:text-white"
                >
                  Call +91 80109 04040
                  <MoveUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-[28px] border border-[#dce8f3] bg-white p-7 shadow-[0_20px_60px_rgba(15,45,77,0.08)] sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ba8ff]">
                    Send an enquiry
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-[#10263d]">
                    Tell us what you need.
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-[#526b82]">
                    Share your vehicle and service details. Our team can contact
                    you with the right battery or service information.
                  </p>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e7f2ff] text-[#0f2d4d] sm:flex">
                  <FileText size={24} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* NAME + PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#10263d]"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition placeholder:text-[#94a6b7] focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#10263d]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className="w-full rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition placeholder:text-[#94a6b7] focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#10263d]"
                  >
                    Email Address
                    <span className="ml-1 font-normal text-[#7890a5]">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition placeholder:text-[#94a6b7] focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                  />
                </div>

                {/* VEHICLE */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="vehicleType"
                      className="mb-2 block text-sm font-bold text-[#10263d]"
                    >
                      Vehicle Type
                    </label>

                    <select
                      id="vehicleType"
                      name="vehicleType"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                    >
                      <option value="" disabled>
                        Select vehicle type
                      </option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vehicleModel"
                      className="mb-2 block text-sm font-bold text-[#10263d]"
                    >
                      Vehicle Model
                    </label>

                    <input
                      id="vehicleModel"
                      name="vehicleModel"
                      type="text"
                      placeholder="e.g. Hyundai Creta"
                      className="w-full rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition placeholder:text-[#94a6b7] focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-[#10263d]"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#10263d]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your battery problem or service requirement..."
                    className="w-full resize-none rounded-xl border border-[#d5e1ec] bg-[#f9fbfd] px-4 py-3.5 text-sm text-[#10263d] outline-none transition placeholder:text-[#94a6b7] focus:border-[#5ba8ff] focus:bg-white focus:ring-4 focus:ring-[#5ba8ff]/10"
                  />
                </div>

                {/* HONEYPOT */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* STATUS */}
                {formStatus === "success" && (
                  <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <div>
                      <p className="font-bold">Enquiry sent successfully!</p>

                      <p className="mt-1 text-green-700">
                        Thank you. Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <p className="font-bold">Unable to send your enquiry.</p>

                    <p className="mt-1">
                      Please try again or call us directly at{" "}
                      <a
                        href="tel:+918010904040"
                        className="font-bold underline"
                      >
                        +91 80109 04040
                      </a>
                      .
                    </p>
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f2d4d] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#123b63] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <p className="text-xs leading-5 text-[#7890a5]">
                  By submitting this form, you agree that our team may contact
                  you regarding your enquiry and service request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="bg-[#f5f9ff] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ba8ff]">
              Why customers reach us
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#10263d] sm:text-4xl">
              More than just a battery shop.
            </h2>

            <p className="mt-4 leading-7 text-[#526b82]">
              Get practical battery guidance and local service support for your
              car or bike.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group rounded-[24px] border border-[#dce8f3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#5ba8ff] hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f2ff] text-[#0f2d4d] transition group-hover:bg-[#0f2d4d] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#10263d]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#526b82]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-[#dce8f3] bg-[#f5f9ff] p-8 sm:p-10 lg:col-span-2">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#5ba8ff]" size={22} />

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ba8ff]">
                  Service coverage
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black text-[#10263d]">
                Serving drivers across Surat.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#526b82]">
                Whether you are nearby or commuting across the city, we help
                with battery selection, quick replacement and dependable local
                advice.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[#d5e1ec] bg-white px-4 py-2 text-sm font-semibold text-[#10263d]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#0f2d4d] p-8 text-white sm:p-10">
              <Clock3 className="text-[#5ba8ff]" size={28} />

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#8fc8ff]">
                Best time to call
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Quick help usually within 30–45 minutes.
              </h3>

              <div className="mt-8 space-y-4 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="text-[#5ba8ff]" />
                  Open every day
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="text-[#5ba8ff]" />
                  Fastest support
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="text-[#5ba8ff]" />
                  Vehicle advice
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f9ff] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ba8ff]">
              Before you visit
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#10263d] sm:text-4xl">
              A few quick things to know.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="group rounded-2xl border border-[#dce8f3] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#10263d]">
                What vehicle details should I share?
                <span className="text-2xl text-[#5ba8ff] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-[#526b82]">
                Share your vehicle make, model, registration number and battery
                size if known. This helps us recommend the correct battery.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#dce8f3] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#10263d]">
                Do you help with emergency battery issues?
                <span className="text-2xl text-[#5ba8ff] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-[#526b82]">
                Yes. We provide urgent battery checks, jump-start support and
                replacement guidance depending on your location and vehicle.
              </p>
            </details>

            <details className="group rounded-2xl border border-[#dce8f3] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#10263d]">
                Can I check battery availability before visiting?
                <span className="text-2xl text-[#5ba8ff] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-[#526b82]">
                Yes. Call us before visiting to confirm stock, battery
                compatibility and expected fitment time.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0f2d4d] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8fc8ff]">
            Need help today?
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Talk to a battery expert.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Tell us your car or bike model. We&apos;ll help you choose the right
            battery and arrange service if needed.
          </p>

          <a
            href="tel:+918010904040"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#0f2d4d] transition hover:bg-[#5ba8ff] hover:text-white"
          >
            Call +91 80109 04040
            <MoveUpRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
