import { useEffect } from "react";
import ProductsNav from "../components/products/ProductsNav";
import ProductsHero from "../components/products/ProductsHero";
import ProductsEcosystemOverview from "../components/products/ProductsEcosystemOverview";
import ProductsEnergy from "../components/products/ProductsEnergy";
import ProductsCarbon from "../components/products/ProductsCarbon";
import ProductsAdvanced from "../components/products/ProductsAdvanced";
import ProductsProcess from "../components/products/ProductsProcess";
import ProductsQuality from "../components/products/ProductsQuality";
import ProductsEcosystem from "../components/products/ProductsEcosystem";
import ProductsFuture from "../components/products/ProductsFuture";
import CallToAction from "../components/CallToAction";

export default function ProductsPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProductsHero />
      <ProductsEcosystemOverview />
      <ProductsEnergy />
      <ProductsCarbon />
      <ProductsAdvanced />
      <ProductsProcess />
      <ProductsQuality />
      <ProductsEcosystem />
      {/* <ProductsFuture /> */}
      {/* Reuse existing CTA */}
      <CallToAction />
    </>
  );
}
