import { MoveUpRight } from "lucide-react";
import { PageShell } from "@/components/site-shell";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to Om Balaji Battery. By accessing our website, contacting us,
          purchasing our products, or using our services, you agree to these
          Terms & Conditions.
        </p>

        <p>
          These terms are intended to explain the basic conditions for using our
          website and purchasing or requesting our battery-related products and
          services.
        </p>
      </>
    ),
  },
  {
    title: "2. Our Products & Services",
    content: (
      <>
        <p>
          Om Balaji Battery provides automobile batteries and related vehicle
          services for cars, bikes and other compatible vehicles.
        </p>

        <p>Our services may include:</p>

        <ul>
          <li>Battery sales and replacement</li>
          <li>Car jump-start assistance</li>
          <li>Battery charging</li>
          <li>Battery servicing and maintenance</li>
          <li>Battery health checks</li>
          <li>Battery reports</li>
          <li>Engine oil products</li>
        </ul>

        <p>
          Service availability may depend on the vehicle, location, battery
          condition and availability of the required product or service.
        </p>
      </>
    ),
  },
  {
    title: "3. Product Information",
    content: (
      <>
        <p>
          We try to keep the product information, specifications, images and
          prices on our website accurate and up to date.
        </p>

        <p>
          However, product specifications, availability, packaging, images and
          prices may change from time to time based on manufacturer updates and
          stock availability.
        </p>

        <p>
          Customers should confirm the correct battery model, capacity and
          compatibility with their vehicle before purchase.
        </p>
      </>
    ),
  },
  {
    title: "4. Pricing & Payment",
    content: (
      <>
        <p>
          Prices displayed or communicated by Om Balaji Battery may vary
          depending on the product, brand, vehicle, battery specifications and
          services required.
        </p>

        <p>
          Any additional charges for installation, delivery, emergency
          assistance or other services will be communicated to the customer
          where applicable.
        </p>

        <p>
          The applicable price at the time of purchase or confirmed service
          request will be considered the final price.
        </p>
      </>
    ),
  },
  {
    title: "5. Service Requests",
    content: (
      <>
        <p>
          When requesting a service, customers should provide accurate contact
          information, vehicle details and service location.
        </p>

        <p>
          We may contact you by phone to confirm the service request, discuss
          the required service and provide an estimated arrival or completion
          time.
        </p>

        <p>
          Service times may vary depending on traffic, location, weather,
          availability and the nature of the vehicle problem.
        </p>
      </>
    ),
  },
  {
    title: "6. Battery Warranty",
    content: (
      <>
        <p>
          Batteries may be covered by the manufacturer's warranty depending on
          the product purchased.
        </p>

        <p>
          Warranty terms, duration and conditions are determined by the
          respective manufacturer and may differ between products.
        </p>

        <p>
          A valid invoice or purchase information may be required for warranty
          claims. The battery may also need to be inspected before a warranty
          claim can be processed.
        </p>

        <p>
          Damage caused by misuse, incorrect installation, physical damage,
          electrical problems, accidents or other conditions excluded by the
          manufacturer may not be covered.
        </p>
      </>
    ),
  },
  {
    title: "7. Battery & Vehicle Services",
    content: (
      <>
        <p>
          Battery charging, jump-start and battery service are intended to
          address battery-related problems.
        </p>

        <p>
          A vehicle may still fail to start or operate correctly if another
          component has a mechanical, electrical or technical problem.
        </p>

        <p>
          Om Balaji Battery may recommend additional inspection or professional
          mechanical assistance when a problem appears to be unrelated to the
          battery.
        </p>
      </>
    ),
  },
  {
    title: "8. Customer Responsibility",
    content: (
      <>
        <p>
          Customers are responsible for providing correct information about
          their vehicle and battery.
        </p>

        <p>
          Customers should inform our team about any known electrical,
          mechanical or battery-related issues before service begins.
        </p>

        <p>
          Customers should also follow reasonable safety instructions provided
          by our service team during battery installation, charging or
          assistance.
        </p>
      </>
    ),
  },
  {
    title: "9. Website Use",
    content: (
      <>
        <p>
          The information provided on this website is intended for general
          information about Om Balaji Battery, our products and our services.
        </p>

        <p>
          You must not use the website for unlawful activities, attempt
          unauthorized access, interfere with the website's operation, or misuse
          any website content.
        </p>

        <p>
          We may update, modify or remove website content, products, services or
          pricing at any time.
        </p>
      </>
    ),
  },
  {
    title: "10. Limitation of Information",
    content: (
      <p>
        While we make reasonable efforts to provide accurate information, we do
        not guarantee that every piece of website information will always be
        complete, current or free from errors. Product availability and service
        information should be confirmed with our team when necessary.
      </p>
    ),
  },
  {
    title: "11. Changes to These Terms",
    content: (
      <p>
        Om Balaji Battery may update these Terms & Conditions from time to time.
        Any updated version will be published on this page. Continued use of the
        website or services after changes are published means that you accept
        the updated terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <span className="kicker">Legal information</span>

            <h1>
              Terms & <em> Conditions.</em>
            </h1>

            <p>
              Please read these terms before using our website, purchasing our
              products or requesting our services.
            </p>
          </div>
        </section>

        {/* Terms */}
        <section>
          <div className="container">
            <div className="space-y-12">
              {sections.map(({ title, content }) => (
                <section key={title}>
                  <h2
                    className="
                      mb-4
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-[#10263d]
                    "
                  >
                    {title}
                  </h2>

                  <div
                    className="
                      space-y-4
                      text-[15px]
                      leading-7
                      text-[#10263d]/65

                      [&_ul]:ml-5
                      [&_ul]:list-disc
                      [&_ul]:space-y-2
                      [&_li]:pl-1
                    "
                  >
                    {content}
                  </div>
                </section>
              ))}

              {/* Contact */}
              <section
                className="
                  rounded-3xl
                  bg-[#0f2d4d]
                  p-7
                  text-white
                  md:p-9
                "
              >
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#5ba8ff]
                  "
                >
                  Questions?
                </span>

                <h2 className="mt-3 text-2xl font-semibold">
                  Need help with our terms?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                  If you have any questions about our products, services,
                  warranty or these Terms & Conditions, please contact Om Balaji
                  Battery.
                </p>

                <a
                  href="tel:+918010904040"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#0f2d4d]
                    transition
                    hover:bg-[#f5f9ff]
                  "
                >
                  Call Us
                  <MoveUpRight size={17} />
                </a>
              </section>

              <p className="text-center text-xs text-[#10263d]/40">
                Last updated: September 2026
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
