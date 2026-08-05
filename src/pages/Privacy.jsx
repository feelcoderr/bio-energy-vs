import { useEffect } from 'react';

export default function Privacy() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-heading text-4xl md:text-5xl text-primary font-normal mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-sm md:prose-base prose-p:font-body prose-headings:font-heading prose-headings:font-normal prose-h2:text-2xl prose-h2:text-primary prose-a:text-surface-tint max-w-none text-on-surface-variant">
          <p className="text-sm mb-8 italic">Last Updated: August 2026</p>

          <h2>1. Introduction</h2>
          <p>
            At Ratnanjali Bioenergy, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or interact with our Services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us, including your name, email address, company organization, and professional qualifications when you submit inquiries, partnership briefs, or speculative talent applications. We also automatically collect certain technical data (such as IP addresses and browser types) to ensure the proper functioning of our platform.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your data to respond to your inquiries, facilitate partnership discussions, review career applications, and improve our website's performance and security. We do not sell your personal data to third parties.
          </p>

          <h2>4. Data Security & Storage</h2>
          <p>
            We implement robust, industry-standard security measures, including Firebase authentication and encrypted data storage, to protect your personal information against unauthorized access, alteration, or destruction. However, no method of transmission over the internet is entirely secure.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data. If you wish to exercise these rights, please contact our administrative team.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites (such as LinkedIn). We are not responsible for the privacy practices or content of these external sites.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. We encourage you to review this page periodically.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For any questions or concerns regarding this Privacy Policy or our data practices, please reach out to us at <a href="mailto:info@ratnanjalibioenergy.com">info@ratnanjalibioenergy.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
