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
      <div className="filter-bar" aria-label="Product filters">
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
      <div className="product-grid product-grid-wide">
        {filteredProducts.map((product, index) => (
          <article className="product-card product-card-3d" key={product.id}>
            <div
              className={
                index % 2 === 0
                  ? "product-visual visual-yellow"
                  : "product-visual visual-blue"
              }
            >
              <div className="product-stage">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={230}
                  height={230}
                  className="product-image-3d"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <span className="voltage">{product.voltage}</span>
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
