import { useEffect } from 'react';

export default function Terms() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-heading text-4xl md:text-5xl text-primary font-normal mb-8">
          Terms of Use
        </h1>
        
        <div className="prose prose-sm md:prose-base prose-p:font-body prose-headings:font-heading prose-headings:font-normal prose-h2:text-2xl prose-h2:text-primary prose-a:text-surface-tint max-w-none text-on-surface-variant">
          <p className="text-sm mb-8 italic">Last Updated: August 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Ratnanjali Bioenergy ("we," "our," or "us"). By accessing or using our website, services, platform, or ecosystem portals (collectively, the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Services.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            You agree to use our Services only for lawful purposes and in accordance with these Terms. You are prohibited from violating or attempting to violate the security of the Services, including accessing data not intended for you or logging into a server or account that you are not authorized to access.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content, features, and functionality, including but not limited to text, graphics, logos, images, blueprints, and software, are the exclusive property of Ratnanjali Bioenergy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2>4. Disclaimer of Warranties</h2>
          <p>
            The Services are provided on an "as is" and "as available" basis. Ratnanjali Bioenergy makes no representations or warranties of any kind, express or implied, as to the operation of the Services or the information, content, or materials included therein.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Ratnanjali Bioenergy, its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Services.
          </p>

          <h2>6. Modifications to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. Material changes will be communicated through our website. Your continued use of the Services following the posting of any changes to these Terms constitutes acceptance of those changes.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:info@ratnanjalibioenergy.com">info@ratnanjalibioenergy.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
