"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ComplianceContent() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      
      <section id="enterprise-security" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Enterprise Security
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-4">
            <p className="text-white/60 text-base leading-relaxed">
              cliQTest is engineered from the ground up with a security-first architecture designed to protect your most sensitive organizational data. We support enterprise-grade security protocols, robust centralized governance, and highly granular role-based access controls (RBAC). Our platform seamlessly integrates secure execution workflows across any deployment model—whether cloud-native, on-premise, or hybrid infrastructures.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              By enforcing strict data encryption at rest and in transit, isolating execution environments, and orchestrating operational visibility, cliQTest ensures your distributed testing ecosystems remain impenetrable and strictly controlled.
            </p>
          </div>
        </motion.div>
      </section>
  
      <section id="governance-&-traceability" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Governance & Traceability
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-4">
            <p className="text-white/60 text-base leading-relaxed">
              Maintaining absolute control over your software development lifecycle requires rigorous tracking. cliQTest delivers centralized, end-to-end traceability that maps every single business requirement to specific test cases, active executions, identified defects, testing environments, and final release cycles.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              This unbroken chain of custody provides stakeholders with unprecedented transparency, ensuring full audit readiness and simplifying enterprise governance. Whether you are managing complex release schedules or maintaining compliance-focused testing workflows, our traceability engine guarantees you are always prepared for rigorous internal and external audits.
            </p>
          </div>
        </motion.div>
      </section>
  
      <section id="compliance-readiness" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Compliance Readiness
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-4">
            <p className="text-white/60 text-base leading-relaxed">
              We understand that operating in heavily regulated industries such as Finance, Healthcare, and Telecommunications demands uncompromising compliance. cliQTest is built to align strictly with global regulatory standards, including GDPR, HIPAA, SOC 2, and ISO 27001.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              We provide built-in compliance frameworks, automated audit logging, and data anonymization tools that ensure your quality engineering practices meet the strictest legal and security mandates. From comprehensive audit trails to secure data handling, our platform is actively maintained to be fully compliance-ready for any sector.
            </p>
          </div>
        </motion.div>
      </section>
  
    </div>
  );
}
