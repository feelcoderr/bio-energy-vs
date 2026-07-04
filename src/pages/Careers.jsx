import { useEffect } from "react";
import CareersHero from "../components/careers/CareersHero";
import CareersCulture from "../components/careers/CareersCulture";
import CareersJobs from "../components/careers/CareersJobs";
import CareersProcess from "../components/careers/CareersProcess";
import CareersCTA from "../components/careers/CareersCTA";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CareersHero />
      <CareersCulture />
      <CareersJobs />
      <CareersProcess />
      <CareersCTA />
    </>
  );
}
