import { PageShell } from "@/components/site-shell";
import ProductBrowser from "@/components/product-browser";
import products from "@/data/products.json";

export default function ProductsPage() {
  const brandCount = new Set(products.map((p) => p.brand)).size;
  const categoryCount = new Set(products.map((p) => p.category)).size;

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
              Search or filter {products.length} genuine batteries and engine
              oils from {brandCount} trusted brands across{" "}
              {categoryCount} categories.
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
