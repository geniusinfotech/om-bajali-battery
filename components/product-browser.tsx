"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Battery,
  CheckCircle2,
  MessageCircle,
  Phone,
  Search,
  SlidersHorizontal,
  X,
  ArrowUpRight,
} from "lucide-react";

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
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter(
      (product) =>
        (category === "All" || product.category === category) &&
        (brand === "All" || product.brand === brand) &&
        (q === "" || product.name.toLowerCase().includes(q)),
    );
  }, [category, brand, query]);

  const hasActiveFilters =
    category !== "All" || brand !== "All" || query !== "";

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    setQuery("");
  };

  return (
    <div className="w-full">
      {/* =========================================================
          FILTER / SEARCH AREA
      ========================================================== */}
      <section className="mb-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
        {/* Search Header */}
        <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-5 sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Battery size={16} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Battery Collection
                </span>
              </div>

              <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">
                Find the right power
                <span className="text-blue-600"> for your vehicle.</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
              <span className="text-sm font-bold text-slate-900">
                {filteredProducts.length}
              </span>

              <span className="text-sm text-slate-500">
                of {products.length} products
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-7">
            <Search
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search batteries by name..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-12 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-6 p-5 sm:p-7">
          {/* Category */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-slate-400" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Category
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((item) => {
                const active = category === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={active}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Brand
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {brands.map((item) => {
                const active = brand === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBrand(item)}
                    aria-pressed={active}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-1 flex shrink-0 items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100"
                >
                  <X size={14} />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPTY STATE
      ========================================================== */}
      {filteredProducts.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[30px] border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
            <Search size={26} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-950">
            No products found
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            We couldn't find a battery matching your current search and filters.
            Try another product name, category or brand.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          {/* Results header */}
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Available products
              </span>

              <h3 className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">
                Choose your battery
              </h3>
            </div>

            <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 sm:block">
              {filteredProducts.length} results
            </span>
          </div>

          {/* =======================================================
              PRODUCT GRID
          ======================================================== */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const spec = product.voltage ?? product.viscosity;

              const waHref = `https://wa.me/918010904040?text=${encodeURIComponent(
                `Hi, I'm interested in ${product.name}`,
              )}`;

              return (
                <article
                  key={product.id}
                  className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_25px_60px_-20px_rgba(15,23,42,0.25)]"
                >
                  {/* =================================================
                      PRODUCT IMAGE
                  ================================================== */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
                    {/* Decorative background */}
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                    {/* Brand badge */}
                    <div className="absolute left-5 top-5 z-20">
                      <span className="rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur">
                        {product.brand}
                      </span>
                    </div>

                    {/* Specification */}
                    {spec ? (
                      <div className="absolute right-5 top-5 z-20">
                        <span className="rounded-full bg-slate-950 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                          {spec}
                        </span>
                      </div>
                    ) : null}

                    {/* Product Image */}
                    <div className="absolute inset-5">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out scale-120 group-hover:scale-130"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>

                    {/* Hover View */}
                    <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-slate-950 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* =================================================
                      PRODUCT INFO
                  ================================================== */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                        {product.category}
                      </span>

                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                        <CheckCircle2 size={13} />
                        Genuine
                      </span>
                    </div>

                    {/* Name */}
                    <h2 className="mt-3 min-h-[56px] text-xl font-black leading-tight tracking-[-0.03em] text-slate-950">
                      {product.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>

                    {/* Divider */}
                    <div className="my-5 h-px bg-slate-100" />

                    {/* Actions */}
                    <div className="flex gap-2">
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20"
                      >
                        <MessageCircle size={17} />
                        WhatsApp
                      </a>

                      <a
                        href="tel:+918010904040"
                        aria-label="Call to enquire"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                      >
                        <Phone size={17} />
                      </a>
                    </div>
                  </div>

                  {/* Bottom hover accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductBrowser;
