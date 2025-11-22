import React, { useRef, useEffect } from "react";
import type { SiteContent } from "../siteData";

interface ClientsProps {
  content: SiteContent["clients"];
}

const Clients: React.FC<ClientsProps> = ({ content }) => {
  const logos = content.logos || [];
  const bottomTrack = useRef<HTMLDivElement | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = bottomTrack.current;
    if (!track) return;

    let rafId = 0;
    let offset = 0;
    let lastTime = performance.now();
    let loopWidth = 0;

    const speed = 40;
    // FIX: Widened the type of 'direction' to 'string' to prevent a type error on comparison.
    // Since 'direction' is never reassigned, TypeScript narrows its type to the literal "right",
    // which causes an overlap error when compared to "left".
    let direction: string = "right";

    const imgs = Array.from(track.querySelectorAll("img")) as HTMLImageElement[];
    let remaining = imgs.length;

    const computeWidth = () => {
      loopWidth = track.scrollWidth / 2;
      if (loopWidth > 0) offset = offset % loopWidth;
    };

    const onLoad = () => {
      remaining -= 1;
      if (remaining <= 0) computeWidth();
    };

    imgs.forEach((img) => {
      if (img.complete) onLoad();
      else {
        img.addEventListener("load", onLoad, { once: true });
        img.addEventListener("error", onLoad, { once: true });
      }
    });

    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused.current) {
        const dirMul = direction === "left" ? 1 : -1;
        offset += speed * dt * dirMul;

        if (loopWidth > 0 && Math.abs(offset) >= loopWidth) {
          offset = offset % loopWidth;
        }

        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame((t) => {
      lastTime = t;
      animate(t);
    });

    // توقف انیمیشن روی hover هر آیکون
    imgs.forEach((img) => {
      img.addEventListener("mouseenter", () => (isPaused.current = true));
      img.addEventListener("mouseleave", () => (isPaused.current = false));
    });

    return () => {
      cancelAnimationFrame(rafId);
      imgs.forEach((img) => {
        img.removeEventListener("mouseenter", () => (isPaused.current = true));
        img.removeEventListener("mouseleave", () => (isPaused.current = false));
      });
    };
  }, [logos]);

  if (!logos.length) return null;
  
  const renderLogo = (logo: { name: string; imageUrl: string; url?: string }) => {
    const image = (
        <img
          src={logo.imageUrl}
          alt={logo.name}
          className="h-16 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
          draggable={false}
        />
    );

    if (logo.url) {
      return (
        <a href={logo.url} target="_blank" rel="noopener noreferrer" aria-label={logo.name}>
          {image}
        </a>
      );
    }
    return image;
  }


  return (
    <section className="py-16 sm:py-24 bg-[var(--color-card-background)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold md:text-3xl text-[var(--color-text-primary)]">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* ردیف لوگوها با توقف و بزرگنمایی در هاور */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={bottomTrack}
            className="flex items-center gap-12 sm:gap-16 will-change-transform"
            style={{ whiteSpace: "nowrap", transform: "translate3d(0,0,0)" }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`bottom-${idx}`}
                className="flex-shrink-0 inline-flex items-center justify-center"
              >
                {renderLogo(logo)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* افکت فید چپ و راست */}
      <div className="pointer-events-none absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[var(--color-card-background)] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[var(--color-card-background)] to-transparent z-10" />
    </section>
  );
};

export default Clients;