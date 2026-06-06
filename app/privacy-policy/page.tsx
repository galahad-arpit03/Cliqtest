import React from 'react';
import Link from 'next/link';
export const metadata = {
  title: 'Privacy Policy | cliQTest by ApMoSys',
  description: 'Privacy Policy for ApMoSys and cliQTest services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-white/10 pb-12">
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">Legal Documentation</span>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
            <span>By ApMoSys</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span>December 2, 2021</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span>Last updated: March 30, 2022</span>
          </div>
        </header>

        <div className="space-y-12 text-white/70 leading-relaxed text-[15px] md:text-[16px]">
          <section className="space-y-4">
            <p>
              <strong className="text-white font-medium">ApMoSys Technologies Private Limited</strong> (“us”, “we”, or “our”) operates the ApMoSys website (the “Service”).
            </p>
            <p>
              This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
            </p>
            <p>
              We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p>
              We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at <a href="https://ap2l.ai" className="text-[#6843B7] hover:underline" target="_blank" rel="noopener noreferrer">https://ap2l.ai</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Information Collection And Use</h2>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-white/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight mb-4 mt-8">Log Data</h2>
            <p>
              We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold tracking-tight mb-4 mt-8">Cookies</h2>
            <p>
              Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.
            </p>
            <p>
              We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Service Providers</h2>
            <p>
              We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Security</h2>
            <p>
              The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Links To Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Children’s Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 18 (“Children”).
            </p>
            <p>
              We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Compliance With Laws</h2>
            <p>
              We will disclose your Personal Information where required to do so by law or subpoena.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Changes To This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 mt-12">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please <Link href="/book-a-demo" className="text-[#6843B7] hover:underline">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
