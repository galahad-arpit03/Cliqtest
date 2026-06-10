import React from 'react';

export const metadata = {
  title: 'Security Policy | cliQTest by ApMoSys',
  description: 'Security Policy for ApMoSys and cliQTest services.',
};

export default function SecurityPolicyPage() {
  return (
    <main className="min-h-screen bg-app-bg pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-app-border pb-12">
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">Legal Documentation</span>
          <h1 className="text-app-fg text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Security Policy
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
              <strong className="text-app-fg font-medium">ApMoSys Product Private Limited</strong> ("APPPL") is committed to protecting the confidentiality, integrity, availability, and resilience of information processed through <strong className="text-app-fg font-medium">CliQTest®</strong>, an AI-powered Quality Engineering platform for Test Automation, Test Management, Device Lab Management, Quality Analytics, AI-Assisted Testing, and related services.
            </p>
            <p>
              CliQTest® is a proprietary software platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited.
            </p>
            <p>
              This Security Policy outlines the security principles, controls, and practices adopted to safeguard customer information, platform assets, intellectual property, and operational environments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Security Commitment</h2>
            <p>ApMoSys employs administrative, technical, operational, and organizational safeguards designed to:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Protect customer information from unauthorized access.</li>
              <li>Maintain confidentiality of customer and platform data.</li>
              <li>Ensure integrity of systems and information.</li>
              <li>Maintain service availability and business continuity.</li>
              <li>Protect proprietary intellectual property and software assets.</li>
              <li>Support regulatory and contractual compliance obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Information Security Governance</h2>
            <p>
              Security responsibilities are defined across product, engineering, operations, support, and management teams.
            </p>
            <p>Security controls are periodically reviewed and updated based on:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Emerging threats</li>
              <li>Business requirements</li>
              <li>Technology changes</li>
              <li>Regulatory obligations</li>
              <li>Industry best practices</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Identity and Access Management</h2>
            <p>
              Access to systems and information is governed through the principle of least privilege.
            </p>
            <p>Security controls may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Role-Based Access Control (RBAC)</li>
              <li>User Authentication Controls</li>
              <li>Session Management</li>
              <li>Access Approval Workflows</li>
              <li>Administrative Access Restrictions</li>
              <li>Audit Logging and Monitoring</li>
              <li>Periodic Access Reviews</li>
            </ul>
            <p>
              Users are responsible for maintaining the confidentiality of their login credentials and access tokens.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Data Protection</h2>
            <p>ApMoSys implements safeguards to protect customer and platform information. Measures may include:</p>

            <div className="space-y-6 pl-4 border-l-2 border-app-border">
              <div>
                <h3 className="text-app-fg text-lg font-semibold mb-3">Data in Transit</h3>
                <ul className="list-disc pl-6 space-y-1 text-app-fg/80">
                  <li>Secure communication protocols</li>
                  <li>TLS/SSL encryption where applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-app-fg text-lg font-semibold mb-3">Data at Rest</h3>
                <ul className="list-disc pl-6 space-y-1 text-app-fg/80">
                  <li>Encryption of sensitive information where applicable</li>
                  <li>Secure storage controls</li>
                  <li>Controlled access mechanisms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-app-fg text-lg font-semibold mb-3">Data Segregation</h3>
                <ul className="list-disc pl-6 space-y-1 text-app-fg/80">
                  <li>Logical segregation of customer environments</li>
                  <li>Tenant isolation controls where applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-app-fg text-lg font-semibold mb-3">Backup and Recovery</h3>
                <ul className="list-disc pl-6 space-y-1 text-app-fg/80">
                  <li>Periodic backup procedures</li>
                  <li>Disaster recovery measures</li>
                  <li>Data restoration capabilities</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Application Security</h2>
            <p>
              CliQTest® is developed and maintained using secure software engineering practices.
            </p>
            <p>Security activities may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Secure Software Development Lifecycle (SSDLC)</li>
              <li>Security Reviews</li>
              <li>Secure Coding Standards</li>
              <li>Vulnerability Assessments</li>
              <li>Dependency Monitoring</li>
              <li>Security Testing</li>
              <li>Release Validation Processes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Infrastructure Security</h2>
            <p>
              Infrastructure supporting CliQTest® is protected using multiple layers of security controls. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Network Security Controls</li>
              <li>Firewall Protection</li>
              <li>Secure Configuration Standards</li>
              <li>Environment Segregation</li>
              <li>Threat Monitoring</li>
              <li>Log Collection and Analysis</li>
              <li>Security Alerting Mechanisms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Device Lab Security</h2>
            <p>
              For Device Lab services provided through CliQTest®:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Devices remain under authorized administrative control.</li>
              <li>Device access is monitored and logged.</li>
              <li>Usage activities may be retained for operational, security, and audit purposes.</li>
              <li>Device provisioning follows controlled procedures.</li>
              <li>Unauthorized device modification is prohibited.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Artificial Intelligence Security</h2>
            <p>
              CliQTest® may utilize Artificial Intelligence and Machine Learning capabilities to assist users in testing and quality engineering activities.
            </p>
            <p>Security controls may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Controlled AI Access</li>
              <li>Prompt Handling Controls</li>
              <li>Customer Data Isolation Measures</li>
              <li>Output Monitoring Mechanisms</li>
              <li>Access Logging</li>
              <li>Operational Safeguards</li>
            </ul>
            <p>
              Customer-provided information shall not be used to train publicly available AI models without explicit authorization.
            </p>
            <p>
              AI-generated recommendations, scripts, analyses, and outputs remain subject to customer review and validation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Monitoring and Audit Logging</h2>
            <p>Security and operational events may be monitored to:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Detect suspicious activities</li>
              <li>Investigate incidents</li>
              <li>Support troubleshooting</li>
              <li>Improve platform reliability</li>
              <li>Meet compliance requirements</li>
            </ul>
            <p>Logs may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Authentication events</li>
              <li>User activities</li>
              <li>Administrative actions</li>
              <li>System events</li>
              <li>API activities</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Vulnerability Management</h2>
            <p>
              ApMoSys maintains processes for identifying, assessing, prioritizing, and addressing security vulnerabilities.
            </p>
            <p>Activities may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Security Assessments</li>
              <li>Vulnerability Reviews</li>
              <li>Remediation Planning</li>
              <li>Patch Management</li>
              <li>Security Validation</li>
            </ul>
            <p>
              Security researchers and customers are encouraged to responsibly disclose potential vulnerabilities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Incident Response</h2>
            <p>
              ApMoSys maintains procedures for managing security incidents. These procedures may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Detection</li>
              <li>Investigation</li>
              <li>Containment</li>
              <li>Remediation</li>
              <li>Recovery</li>
              <li>Post-Incident Review</li>
            </ul>
            <p>
              Where appropriate, affected customers may be notified in accordance with contractual obligations and applicable legal requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Business Continuity</h2>
            <p>
              ApMoSys maintains operational measures intended to support business continuity and service resilience. These measures may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Backup Processes</li>
              <li>Disaster Recovery Planning</li>
              <li>Infrastructure Redundancy</li>
              <li>Recovery Procedures</li>
              <li>Operational Monitoring</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Shared Responsibility Model</h2>
            <p>
              While ApMoSys secures the Platform infrastructure and services, customers remain responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-app-fg/80">
              <li>Managing authorized users</li>
              <li>Protecting account credentials</li>
              <li>Reviewing access permissions</li>
              <li>Securing endpoint devices</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Validating AI-generated outputs prior to production use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Third-Party Services</h2>
            <p>
              CliQTest® may integrate with third-party products, cloud providers, communication platforms, repositories, DevOps tools, and enterprise applications.
            </p>
            <p>
              ApMoSys is not responsible for the security practices, availability, or operations of third-party services outside its direct control.
            </p>
            <p>
              Customers are encouraged to review the security policies of integrated third-party providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Changes to This Policy</h2>
            <p>
              ApMoSys reserves the right to update this Security Policy periodically to reflect operational, technical, legal, or regulatory changes.
            </p>
            <p>
              Updated versions shall supersede prior versions upon publication.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-app-fg text-2xl font-bold tracking-tight mb-6">Contact Information</h2>
            <p>
              For security-related inquiries, vulnerability disclosures, compliance requests, or security concerns, please contact: <a href="mailto:sales@apmosys.com" className="text-[#6843B7] hover:underline font-medium">sales@apmosys.com</a>
            </p>
          </section>
          
          <div className="pt-8 border-t border-app-border text-app-fg/50 text-sm space-y-4">
            <p className="font-medium">
              Copyright © {new Date().getFullYear()} ApMoSys Product Private Limited. All Rights Reserved.
            </p>
            <p>
              CliQTest® is a proprietary software platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited. Unauthorized access, reverse engineering, reproduction, redistribution, or commercial exploitation of any part of the Platform is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
