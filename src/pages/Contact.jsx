import { useEffect } from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactInterface from "../components/contact/ContactInterface";
import ContactTrust from "../components/contact/ContactTrust";

export default function Contact() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactHero />
      <ContactInterface />
      <ContactTrust />
    </>
  );
}
