import { useEffect } from "react";
import PlatformHero from "../components/platform/PlatformHero";
import PlatformRevenueEngine from "../components/platform/PlatformRevenueEngine";
import PlatformProcess from "../components/platform/PlatformProcess";
import PlatformMarkets from "../components/platform/PlatformMarkets";
import PlatformImpact from "../components/platform/PlatformImpact";
import PlatformGovernance from "../components/platform/PlatformGovernance";
import PlatformCTA from "../components/platform/PlatformCTA";

export default function Platform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PlatformHero />
      <PlatformRevenueEngine />
      <PlatformProcess />
      <PlatformMarkets />
      <PlatformImpact />
      <PlatformGovernance />
      <PlatformCTA />
    </>
  );
}
