import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';

export const metadata = {
  title: 'Terms & Conditions | cliQTest by ApMoSys',
  description: 'Terms and Conditions for ApMoSys and cliQTest services.',
};

export default function TermsConditionsPage() {
  const content = (
    <main className="min-h-screen bg-app-bg pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-app-border pb-12">
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">Legal Documentation</span>
          <h1 className="text-app-fg text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Terms & Conditions
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-app-fg/50 text-sm">
            <span>By ApMoSys Product Private Limited</span>
            <span className="w-1.5 h-1.5 rounded-full bg-app-fg/20"></span>
            <span>Last updated: June 6, 2026</span>
          </div>
        </header>

        <div className="space-y-12 text-app-fg/70 leading-relaxed text-[15px] md:text-[16px]">
          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Acceptance of Terms</h2>
            <p>
              By accessing or using <strong className="text-app-fg font-medium">CliQTest®</strong>, users agree to comply with and be bound by these Terms & Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Ownership and Intellectual Property</h2>
            <p>CliQTest®, including but not limited to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-6">
              <ul className="list-disc space-y-2 text-app-fg/80">
                <li>Software</li>
                <li>Source code</li>
                <li>Object code</li>
                <li>AI models</li>
                <li>Algorithms</li>
                <li>Automation frameworks</li>
                <li>Test accelerators</li>
                <li>Device orchestration capabilities</li>
                <li>APIs</li>
              </ul>
              <ul className="list-disc space-y-2 text-app-fg/80">
                <li>Documentation</li>
                <li>Dashboards</li>
                <li>Reports</li>
                <li>User interfaces</li>
                <li>Trademarks</li>
                <li>Logos</li>
                <li>Branding elements</li>
                <li>Trade secrets</li>
              </ul>
            </div>
            <p className="mt-4">
              are proprietary assets and the exclusive intellectual property of ApMoSys Product Private Limited and/or its licensors.
            </p>
            <p>
              No ownership rights are transferred to users, customers, partners, or third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">License Grant</h2>
            <p>
              Customers are granted a limited, non-exclusive, non-transferable, revocable right to access and use the Platform during an active subscription period.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Restrictions</h2>
            <p>Users shall not:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Reverse engineer the Platform</li>
              <li>Decompile software components</li>
              <li>Copy proprietary functionality</li>
              <li>Circumvent licensing controls</li>
              <li>Perform unauthorized security testing</li>
              <li>Develop competing products using Platform assets</li>
              <li>Resell or redistribute Platform services without authorization</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Protection of Proprietary Assets</h2>
            <p>
              Customers shall not copy, export, reproduce, commercialize, distribute, benchmark, or create derivative works from any proprietary automation frameworks, AI engines, workflows, templates, accelerators, testing methodologies, quality engineering assets, or Device Lab capabilities made available through the Platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Customer Content</h2>
            <p>
              Customers retain ownership of all uploaded content and warrant that they possess all necessary rights to use such content within the Platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Artificial Intelligence Features</h2>
            <p>CliQTest® may provide AI-assisted capabilities including:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Test Case Generation</li>
              <li>Requirement Analysis</li>
              <li>Automation Script Suggestions</li>
              <li>Defect Summarization</li>
              <li>Predictive Analytics</li>
              <li>Test Optimization Recommendations</li>
            </ul>
            <p>
              AI-generated outputs are provided as assistive recommendations only.
            </p>
            <p>
              Customers remain solely responsible for validating all generated outputs before operational or production use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Service Availability</h2>
            <p>
              While commercially reasonable efforts are made to maintain service availability, uninterrupted access cannot be guaranteed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, ApMoSys shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Indirect damages</li>
              <li>Consequential damages</li>
              <li>Special damages</li>
              <li>Business interruption</li>
              <li>Data loss</li>
              <li>Revenue loss</li>
              <li>Loss of goodwill</li>
            </ul>
            <p>
              arising from the use or inability to use the Platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Indemnification</h2>
            <p>
              Customers agree to indemnify and hold harmless ApMoSys against claims arising from unauthorized use, customer-provided content, regulatory violations, or infringement of third-party rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of India.
            </p>
            <p>
              The Courts of Mumbai, Maharashtra, India shall have exclusive jurisdiction over disputes arising from the use of the Platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Contact</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact: <a href="mailto:sales@apmosys.com" className="text-[#6843B7] hover:underline font-medium">sales@apmosys.com</a>
            </p>
          </section>

          <div className="pt-8 border-t border-app-border text-app-fg/50 text-sm">
            <p>
              CliQTest® is a proprietary software platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited.
            </p>
          </div>
        </div>
      </div>
    </main>
  );

  return <PageThemeMenu sections={[content]} heroIsDark={false} />;
}
