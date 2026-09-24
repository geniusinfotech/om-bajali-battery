"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Filter } from "lucide-react";
import products from "@/data/products.json";

const categories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category))),
];
const brands = [
  "All",
  ...Array.from(new Set(products.map((product) => product.brand))),
];

export function ProductBrowser() {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "All" || product.category === category) &&
          (brand === "All" || product.brand === brand),
      ),
    [category, brand],
  );

  return (
    <>
      <div className="filter-bar flex flex-col md:flex-row gap-4 items-center mb-4" aria-label="Product filters">
        <div className="filter-label">
          <Filter /> Filter range
        </div>
        <label>
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Brand
          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            {brands.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <span className="filter-count">{filteredProducts.length} products</span>
      </div>
      <div className="product-grid product-grid-wide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <article className="product-card product-card-3d" key={product.id}>
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
              <span className="product-category">{product.category}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-points">
                <span>
                  <CheckCircle2 /> Genuine product
                </span>
                <span>
                  <CheckCircle2 /> Expert fitment
                </span>
              </div>
              <a href="tel:+918010904040" className="button button-small">
                Call to enquire
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default ProductBrowser;
