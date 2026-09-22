import { PageShell } from "@/components/site-shell";
import ProductBrowser from "@/components/product-browser";

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="kicker">Our products</span>
            <h1>
              Reliable power for
              <br />
              <em>every journey.</em>
            </h1>
            <p>
              Choose from genuine Amaron and Exide batteries for bikes and cars.
              Filter the range by category or brand.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ProductBrowser />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
