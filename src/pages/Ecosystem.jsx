import { useEffect } from "react";
import EcosystemHero from "../components/ecosystem/EcosystemHero";
import EcosystemIntentSelector from "../components/ecosystem/EcosystemIntentSelector";
import EcosystemValueChain from "../components/ecosystem/EcosystemValueChain";
import EcosystemProcess from "../components/ecosystem/EcosystemProcess";
import EcosystemTrust from "../components/ecosystem/EcosystemTrust";

export default function Ecosystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <EcosystemHero />
      <EcosystemIntentSelector />
      <EcosystemValueChain />
      <EcosystemProcess />
      <EcosystemTrust />
    </>
  );
}
