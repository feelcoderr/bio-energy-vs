import { useEffect, useRef } from "react";
import ProductsNav from "../components/products/ProductsNav";
import ProductsHero from "../components/products/ProductsHero";
import ProductsEcosystemOverview from "../components/products/ProductsEcosystemOverview";
import ProductsEnergy from "../components/products/ProductsEnergy";
import ProductsCarbon from "../components/products/ProductsCarbon";
import ProductsAdvanced from "../components/products/ProductsAdvanced";
import ProductsProcess from "../components/products/ProductsProcess";
import ProductsQuality from "../components/products/ProductsQuality";
import ProductsEcosystem from "../components/products/ProductsEcosystem";
import CallToAction from "../components/CallToAction";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      // Overlapping scale transition for the category cards
      const cards = gsap.utils.toArray(".product-category-card");

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Don't scale the last card

        gsap.to(card, {
          scale: 0.94,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top+=96", // Matches sticky top-24 position
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <ProductsHero />
      <ProductsEcosystemOverview />

      {/* Categories Stacking Wrapper */}
      <div className="max-w-7xl mx-auto px-6 relative py-20">
        <ProductsEnergy />
        <ProductsCarbon />
        <ProductsAdvanced />
      </div>

      <ProductsProcess />
      <ProductsQuality />
      <ProductsEcosystem />
      <CallToAction />
    </div>
  );
}
