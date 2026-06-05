"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, LayoutDashboard, History, Network, Activity, SearchX, FileText, TrendingUp, ShieldCheck, Target } from 'lucide-react';

const features = [
  {
    id: "execution-analytics",
    title: "Execution Analytics",
    icon: BarChart2,
    desc: "cliQTest delivers comprehensive execution analytics that provide real-time visibility into test execution performance, automation stability, pass/fail trends, environment behavior, and release readiness across projects and testing cycles. The platform consolidates execution data from manual, automated, local, and server-based runs into a centralized analytics ecosystem that enables teams to identify bottlenecks, monitor quality trends, and optimize testing efficiency proactively.",
    stat: "99.9%",
    statLabel: "Execution Tracking Accuracy"
  },
  {
    id: "visual-dashboards",
    title: "Visual Dashboards",
    icon: LayoutDashboard,
    desc: "cliQTest offers intelligent visual dashboards that transform complex testing data into highly interactive and business-friendly visual representations for better monitoring and decision-making. The platform provides centralized visibility into execution summaries, defect trends, automation health, test coverage, release progress, and quality KPIs through customizable graphs, charts, and widgets.",
    stat: "100+",
    statLabel: "Customizable Widgets"
  },
  {
    id: "execution-history",
    title: "Execution History",
    icon: History,
    desc: "cliQTest maintains a centralized execution history repository that captures every test execution, environment configuration, status update, response time, and execution artifact across projects and releases. Teams can easily revisit previous runs, compare execution outcomes, analyze historical patterns, and identify recurring failures through detailed execution tracking and timeline-based visibility.",
    stat: "Unlimited",
    statLabel: "Historical Run Storage"
  },
  {
    id: "tree-view-reporting",
    title: "Tree View Reporting",
    icon: Network,
    desc: "cliQTest simplifies report analysis through an intuitive tree-view reporting structure that visually organizes execution data in a hierarchical format across collections, test suites, test cases, and individual test steps. This structured reporting model allows teams to drill down from high-level execution summaries to detailed step-level insights, making it easier to identify failed steps, analyze execution paths, and understand validation outcomes quickly.",
    stat: "Deep",
    statLabel: "Hierarchical Drill-down"
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Monitoring",
    icon: Activity,
    desc: "cliQTest provides real-time monitoring capabilities that allow teams to track test execution progress, runtime activities, environment behavior, and automation health as tests are actively running. The platform continuously streams execution updates, logs, status indicators, and live insights that help teams identify failures instantly, reduce response time, and improve operational awareness during critical testing cycles.",
    stat: "< 1s",
    statLabel: "Telemetry Latency"
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    icon: SearchX,
    desc: "cliQTest enhances quality engineering workflows through intelligent failure analysis capabilities that help teams quickly identify root causes behind failed test executions, application crashes, environment issues, or automation breakdowns. By correlating execution logs, runtime events, screenshots, response patterns, and defect insights, the platform enables faster troubleshooting and more accurate defect prioritization.",
    stat: "Root Cause",
    statLabel: "Automated Insights"
  },
  {
    id: "customizable-reports",
    title: "Customizable Reports",
    icon: FileText,
    desc: "cliQTest enables organizations to generate highly customizable reports tailored to specific business, operational, and project requirements. Teams can configure report formats, execution filters, project views, environment details, quality metrics, and stakeholder-specific insights to create meaningful and actionable reporting outputs. With support for downloadable reports in multiple formats such as PDF, Excel, and HTML.",
    stat: "PDF/HTML",
    statLabel: "Export Formats"
  },
  {
    id: "quality-trend-analysis",
    title: "Quality Trend Analysis",
    icon: TrendingUp,
    desc: "cliQTest provides advanced quality trend analysis capabilities that help organizations monitor long-term testing performance, defect patterns, automation stability, and release quality across multiple testing cycles and environments. By analyzing historical execution data and quality metrics, the platform identifies recurring risks, unstable components, and improvement opportunities that support continuous optimization of testing strategies and release processes.",
    stat: "Predictive",
    statLabel: "Trend Identification"
  },
  {
    id: "audit-compliance",
    title: "Audit & Compliance Reporting",
    icon: ShieldCheck,
    desc: "cliQTest supports enterprise-grade audit and compliance reporting by maintaining detailed records of test executions, modifications, approvals, defect mappings, and user activities across the complete quality lifecycle. The platform ensures full traceability and governance through centralized reporting structures that help organizations meet regulatory, compliance, and internal quality standards.",
    stat: "SOC2",
    statLabel: "Audit Readiness"
  },
  {
    id: "quality-metrics",
    title: "Quality Metrics",
    icon: Target,
    desc: "cliQTest enables organizations to measure and monitor critical quality metrics that drive continuous improvement and operational excellence. The platform tracks execution success rates, defect density, automation stability, test coverage, release health indicators, environment utilization, and performance trends within a centralized analytics framework.",
    stat: "KPI",
    statLabel: "Centralized Monitoring"
  }
];

export default function AnalyticsFeatures() {
  return (
    <section className="bg-black min-h-screen relative text-white font-sans selection:bg-[#6843B7] selection:text-white pb-32">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#6843B7] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white"
          >
            Intelligence at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Every Layer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/50 leading-relaxed"
          >
            Transform raw execution data into actionable strategic insights through a powerful, centralized analytics ecosystem.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              layout
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5, layout: { duration: 0.3, ease: "easeOut" } }}
              className="bg-[#0A0A0A] border border-white/5 hover:border-white/20 rounded-md p-8 flex flex-col h-full group transition-colors duration-500 hover:bg-[#0c0c0c] relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6843B7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-white/60 mb-4 tracking-tight">
                {feat.title}
              </h3>
              
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                {feat.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-white tracking-tighter mb-1">
                    {feat.stat}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-white/40">
                    {feat.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
