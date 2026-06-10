import React from 'react';

export const metadata = {
  title: 'Cookie Policy | cliQTest by ApMoSys',
  description: 'Cookie Policy for ApMoSys and cliQTest services.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-app-bg pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-app-border pb-12">
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">Legal Documentation</span>
          <h1 className="text-app-fg text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Cookie Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-app-fg/50 text-sm">
            <span>By ApMoSys Product Private Limited</span>
            <span className="w-1.5 h-1.5 rounded-full bg-app-fg/20"></span>
            <span>Last updated: June 6, 2026</span>
          </div>
        </header>

        <div className="space-y-12 text-app-fg/70 leading-relaxed text-[15px] md:text-[16px]">
          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Introduction</h2>
            <p>
              This Cookie Policy explains how <strong className="text-app-fg font-medium">CliQTest®</strong> uses cookies and similar technologies to improve functionality, enhance security, optimize user experience, and analyze platform performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">What Are Cookies</h2>
            <p>
              Cookies are small data files stored on a user's device to enable platform functionality and improve user interactions.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Categories of Cookies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-app-surface border border-app-border rounded-md p-6">
                <h3 className="text-app-fg text-lg font-semibold mb-4 text-[#6843B7]">Essential Cookies</h3>
                <p className="mb-3 text-sm">Required for:</p>
                <ul className="list-disc pl-5 space-y-1 text-app-fg/80 text-sm">
                  <li>User authentication</li>
                  <li>Session management</li>
                  <li>Security controls</li>
                  <li>Access management</li>
                </ul>
              </div>

              <div className="bg-app-surface border border-app-border rounded-md p-6">
                <h3 className="text-app-fg text-lg font-semibold mb-4 text-[#6843B7]">Functional Cookies</h3>
                <p className="mb-3 text-sm">Used for:</p>
                <ul className="list-disc pl-5 space-y-1 text-app-fg/80 text-sm">
                  <li>User preferences</li>
                  <li>Language settings</li>
                  <li>Personalized experience</li>
                </ul>
              </div>

              <div className="bg-app-surface border border-app-border rounded-md p-6">
                <h3 className="text-app-fg text-lg font-semibold mb-4 text-[#6843B7]">Analytics Cookies</h3>
                <p className="mb-3 text-sm">Used for:</p>
                <ul className="list-disc pl-5 space-y-1 text-app-fg/80 text-sm">
                  <li>Usage analysis</li>
                  <li>Performance monitoring</li>
                  <li>Product improvement</li>
                </ul>
              </div>

              <div className="bg-app-surface border border-app-border rounded-md p-6">
                <h3 className="text-app-fg text-lg font-semibold mb-4 text-[#6843B7]">Security Cookies</h3>
                <p className="mb-3 text-sm">Used for:</p>
                <ul className="list-disc pl-5 space-y-1 text-app-fg/80 text-sm">
                  <li>Fraud prevention</li>
                  <li>Threat detection</li>
                  <li>Session validation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Third-Party Technologies</h2>
            <p>
              Certain integrated services may utilize cookies subject to their respective privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Cookie Management</h2>
            <p>
              Users may modify browser settings to reject, disable, or remove cookies. Certain platform features may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Updates</h2>
            <p>
              ApMoSys reserves the right to modify this Cookie Policy at any time. Continued use of the Platform constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Contact</h2>
            <p>
              For any questions regarding this Cookie Policy, please contact: <a href="mailto:sales@apmosys.com" className="text-[#6843B7] hover:underline font-medium">sales@apmosys.com</a>
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
}
