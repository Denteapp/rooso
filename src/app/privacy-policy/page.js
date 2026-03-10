import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Privacy Policy — ROOSO INC.',
  description: 'Privacy Policy for ROOSO INC. Roofing & General Contractor services.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-wide mb-2">Privacy Policy</h1>
        <p className="text-green-200 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <p className="text-lg">
            ROOSO INC. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information
            and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard
            the information you provide when you visit our website or request our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">1. Information We Collect</h2>
          <p className="mb-3">We collect information you voluntarily provide when you:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Request a free estimate or quote</li>
            <li>Contact us via phone, email, or contact form</li>
            <li>Subscribe to communications</li>
          </ul>
          <p className="mt-3">This may include your name, email address, phone number, property address, and project details.</p>
          <p className="mt-3">
            We may also automatically collect certain technical information such as IP address, browser type,
            and pages visited through standard web analytics tools to improve our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">2. How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Respond to your estimate requests and questions</li>
            <li>Schedule and coordinate services</li>
            <li>Send project-related communications</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> sell, trade, or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">3. Financing Partner — Hearth</h2>
          <p>
            Our website links to Hearth&apos;s financing platform for project financing options.
            When you click &quot;Finance Your Project,&quot; you will be redirected to Hearth&apos;s website.
            Any information you provide to Hearth is subject to their own privacy policy.
            ROOSO INC. is not responsible for Hearth&apos;s data practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">4. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies are small files
            stored on your device that help us understand how visitors use our site. You can instruct
            your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards to protect your personal
            information from unauthorized access, disclosure, alteration, or destruction. However,
            no internet transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            content or privacy practices of those sites and encourage you to review their privacy
            policies before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from minors. If you believe we have inadvertently collected
            such information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">8. Your Rights</h2>
          <p className="mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="mt-3">To exercise these rights, please contact us using the details below.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">9. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be posted on
            this page with an updated date. Continued use of our website after any changes constitutes
            your acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#124409] mb-3">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <div className="bg-[#f0faf2] border border-green-200 rounded-xl p-6 space-y-1">
            <p className="font-bold text-[#124409] text-lg">ROOSO INC.</p>
            <p>📞 <a href="tel:8447819216" className="hover:text-[#1e8b2f] transition-colors">844-781-9216</a></p>
            <p>📧 <a href="mailto:info@coastalridgeroofingfl.com" className="hover:text-[#1e8b2f] transition-colors">info@coastalridgeroofingfl.com</a></p>
            <p>Lic #26514782</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-center py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
        >
          ← Back to Home
        </Link>
        <p className="text-gray-500 text-xs mt-4">© {new Date().getFullYear()} ROOSO INC. All rights reserved.</p>
      </footer>
    </div>
  );
}
