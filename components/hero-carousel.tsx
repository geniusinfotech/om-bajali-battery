"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  id: number;
  // single fallback image
  image?: string;
  // optional responsive sources (use if provided)
  desktop?: string;
  tablet?: string;
  mobile?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    // you can provide specific files per breakpoint here
    desktop: "/banner/01-desktop.png",
    tablet: "/banner/01-tablet.png",
    mobile: "/banner/01-mobile.png",
    // fallback if specific files don't exist
    image: "/banner/01.png",
  },
  {
    id: 2,
    desktop: "/banner/02-desktop.png",
    tablet: "/banner/02-tablet.png",
    mobile: "/banner/02-mobile.png",
    image: "/banner/02.png",
  },
  {
    id: 3,
    desktop: "/banner/03-desktop.png",
    tablet: "/banner/03-tablet.png",
    mobile: "/banner/03-mobile.png",
    image: "/banner/03.png",
  },
];

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta > 0 ? prevSlide() : nextSlide();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-[360px] sm:h-[480px] md:h-[560px] lg:h-[760px] w-full overflow-hidden bg-[#14171C] outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Featured offers"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <picture className="relative block h-full w-full">
            <source
              media="(min-width: 1024px)"
              srcSet={slide.desktop ?? slide.image ?? ""}
            />
            <source
              media="(min-width: 640px)"
              srcSet={slide.tablet ?? slide.image ?? ""}
            />
            <Image
              src={slide.mobile ?? slide.image ?? ""}
              alt={`Slide ${slide.id}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/30 p-2 text-[#F4F1EA] backdrop-blur-sm transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-[#F2B705] md:left-8"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/30 p-2 text-[#F4F1EA] backdrop-blur-sm transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-[#F2B705] md:right-8"
      >
        <ChevronRight size={22} />
      </button>

      {/* Charge-bar indicator */}
      <div
        className="absolute inset-x-6 bottom-6 z-10 flex items-center gap-2 md:inset-x-14 md:bottom-10"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            className="h-1 flex-1 overflow-hidden rounded-full bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]"
          >
            <span
              key={`${slide.id}-${index === currentSlide ? currentSlide : "static"}`}
              className={`block h-full rounded-full bg-[#F2B705] motion-reduce:w-full! ${
                index < currentSlide
                  ? "w-full"
                  : index === currentSlide
                    ? autoPlay
                      ? "animate-[chargefill_5s_linear_forwards]"
                      : "w-full"
                    : "w-0"
              }`}
              style={
                index === currentSlide && autoPlay
                  ? { animationPlayState: isPaused ? "paused" : "running" }
                  : undefined
              }
            />
          </button>
        ))}
      </div>

      <style jsx global>{`
        @keyframes chargefill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
