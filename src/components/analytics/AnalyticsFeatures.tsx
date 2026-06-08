"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, LayoutDashboard, History, Network, Activity, SearchX, FileText, TrendingUp, ShieldCheck, Target } from 'lucide-react';

const features = [
  {
    id: "execution-analytics",
    title: "Execution Analytics",
    icon: BarChart2,
    desc: [
      "cliQTest delivers comprehensive execution analytics that provide real-time visibility into test execution performance, automation stability, pass/fail trends, environment behavior, and release readiness across projects and testing cycles.",
      "The platform consolidates execution data from manual, automated, local, and server-based runs into a centralized analytics ecosystem. This enables teams to identify bottlenecks, monitor quality trends, and optimize testing efficiency proactively.",
      "Through advanced statistical analysis and execution tracking, QA managers and stakeholders can track the ROI of automation initiatives and ensure testing objectives align with overarching business goals."
    ],
    stat: "99.9%",
    statLabel: "Execution Tracking Accuracy"
  },
  {
    id: "visual-dashboards",
    title: "Visual Dashboards",
    icon: LayoutDashboard,
    desc: [
      "cliQTest offers intelligent visual dashboards that transform complex testing data into highly interactive and business-friendly visual representations for better monitoring and decision-making.",
      "The platform provides centralized visibility into execution summaries, defect trends, automation health, test coverage, release progress, and quality KPIs through customizable graphs, charts, and widgets.",
      "Users can tailor their dashboard views to highlight the metrics that matter most to their specific roles, ensuring that developers, testers, and product managers all have actionable insights at their fingertips."
    ],
    stat: "100+",
    statLabel: "Customizable Widgets"
  },
  {
    id: "execution-history",
    title: "Execution History",
    icon: History,
    desc: [
      "cliQTest maintains a centralized execution history repository that captures every test execution, environment configuration, status update, response time, and execution artifact across projects and releases.",
      "Teams can easily revisit previous runs, compare execution outcomes, analyze historical patterns, and identify recurring failures through detailed execution tracking and timeline-based visibility.",
      "This extensive historical context empowers teams to perform deep retrospective analysis, track the lifespan of persistent bugs, and validate the long-term stability of the application."
    ],
    stat: "Unlimited",
    statLabel: "Historical Run Storage"
  },
  {
    id: "tree-view-reporting",
    title: "Tree View Reporting",
    icon: Network,
    desc: [
      "cliQTest simplifies report analysis through an intuitive tree-view reporting structure that visually organizes execution data in a hierarchical format across collections, test suites, test cases, and individual test steps.",
      "This structured reporting model allows teams to drill down from high-level execution summaries to detailed step-level insights.",
      "By isolating exactly where a test suite failed—down to the exact network request or DOM interaction—engineers can drastically reduce the time spent triaging complex automation failures."
    ],
    stat: "Deep",
    statLabel: "Hierarchical Drill-down"
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Monitoring",
    icon: Activity,
    desc: [
      "cliQTest provides real-time monitoring capabilities that allow teams to track test execution progress, runtime activities, environment behavior, and automation health as tests are actively running.",
      "The platform continuously streams execution updates, logs, status indicators, and live insights that help teams identify failures instantly, reduce response time, and improve operational awareness during critical testing cycles.",
      "This live observability ensures that critical release blockers can be identified and addressed in minutes rather than hours, safeguarding continuous delivery pipelines."
    ],
    stat: "< 1s",
    statLabel: "Telemetry Latency"
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    icon: SearchX,
    desc: [
      "cliQTest enhances quality engineering workflows through intelligent failure analysis capabilities that help teams quickly identify root causes behind failed test executions, application crashes, environment issues, or automation breakdowns.",
      "By correlating execution logs, runtime events, screenshots, response patterns, and defect insights, the platform enables faster troubleshooting and more accurate defect prioritization.",
      "The system automatically flags anomalous behavior and categorizes failures, helping teams distinguish between actual application defects and brittle or flaky automation scripts."
    ],
    stat: "Root Cause",
    statLabel: "Automated Insights"
  },
  {
    id: "customizable-reports",
    title: "Customizable Reports",
    icon: FileText,
    desc: [
      "cliQTest enables organizations to generate highly customizable reports tailored to specific business, operational, and project requirements.",
      "Teams can configure report formats, execution filters, project views, environment details, quality metrics, and stakeholder-specific insights to create meaningful and actionable reporting outputs.",
      "With support for downloadable reports in multiple formats such as PDF, Excel, and HTML, these insights can be seamlessly shared across the organization to maintain complete transparency."
    ],
    stat: "PDF/HTML",
    statLabel: "Export Formats"
  },
  {
    id: "quality-trend-analysis",
    title: "Quality Trend Analysis",
    icon: TrendingUp,
    desc: [
      "cliQTest provides advanced quality trend analysis capabilities that help organizations monitor long-term testing performance, defect patterns, automation stability, and release quality across multiple testing cycles and environments.",
      "By analyzing historical execution data and quality metrics, the platform identifies recurring risks, unstable components, and improvement opportunities.",
      "These predictive insights support the continuous optimization of testing strategies and release processes, enabling teams to shift from reactive bug fixing to proactive quality assurance."
    ],
    stat: "Predictive",
    statLabel: "Trend Identification"
  },
  {
    id: "audit-&-compliance-reporting",
    title: "Audit & Compliance Reporting",
    icon: ShieldCheck,
    desc: [
      "cliQTest supports enterprise-grade audit and compliance reporting by maintaining detailed records of test executions, modifications, approvals, defect mappings, and user activities across the complete quality lifecycle.",
      "The platform ensures full traceability and governance through centralized reporting structures that help organizations meet strict regulatory, compliance, and internal quality standards.",
      "Automated compliance checks and unalterable execution logs provide peace of mind during security audits and formal organizational reviews."
    ],
    stat: "SOC2",
    statLabel: "Audit Readiness"
  },
  {
    id: "quality-metrics",
    title: "Quality Metrics",
    icon: Target,
    desc: [
      "cliQTest enables organizations to measure and monitor critical quality metrics that drive continuous improvement and operational excellence.",
      "The platform tracks execution success rates, defect density, automation stability, test coverage, release health indicators, environment utilization, and performance trends within a centralized analytics framework.",
      "By establishing a single source of truth for quality KPIs, engineering teams can objectively measure their progress, justify resource allocation, and foster a culture of data-driven development."
    ],
    stat: "KPI",
    statLabel: "Centralized Monitoring"
  }
];

export default function AnalyticsFeatures() {
  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Intelligence at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Every Layer</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          Transform raw execution data into actionable strategic insights through a powerful, centralized analytics ecosystem.
        </p>
      </div>

      {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = idx % 2 === 0;
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#8f81eb]" 
          : "from-[#00F2B0] to-[#ffffff]";
        
        const Icon = feat.icon;

        return (
          <div key={feat.id} id={feat.id} className="scroll-mt-32">
            <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[400px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                    />
                    {/* Mock data lines */}
                    <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-5/6 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white rounded-full" />
                    </div>
                    <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  </motion.div>
                  
                  {/* Metric Card instead of Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group flex flex-col justify-center items-center text-center"
                  >
                    <div className="absolute top-0 w-full h-1" style={{ backgroundColor: accentColor }} />
                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                      {feat.stat}
                    </div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-widest text-white/40">
                      {feat.statLabel}
                    </div>
                  </motion.div>

                </div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                      {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                    </h2>
                    
                    <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                      {Array.isArray(feat.desc) ? feat.desc.map((p, i) => (
                        <p key={i}>{p}</p>
                      )) : <p>{feat.desc}</p>}
                    </div>
                  </div>
                </motion.div>

                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
