import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutProblem from '../components/about/AboutProblem';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutRoadmap from '../components/about/AboutRoadmap';
import AboutDiscipline from '../components/about/AboutDiscipline';
import CallToAction from '../components/CallToAction';

export default function About() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <AboutProblem />
      <AboutPhilosophy />
      <AboutRoadmap />
      <AboutDiscipline />
      {/* Reusing existing CTA which was redesigned to match this theme perfectly */}
      <CallToAction />
    </>
  );
}
