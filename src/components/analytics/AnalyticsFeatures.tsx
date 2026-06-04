"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart2, LayoutDashboard, History, Network, Activity, SearchX, FileText, TrendingUp, ShieldCheck, Target } from 'lucide-react';

const features = [
  {
    id: "execution-analytics",
    title: "Execution Analytics",
    icon: BarChart2,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-cyan-500/20",
    bg: "bg-cyan-500/10",
    desc: "cliQTest delivers comprehensive execution analytics that provide real-time visibility into test execution performance, automation stability, pass/fail trends, environment behavior, and release readiness across projects and testing cycles. The platform consolidates execution data from manual, automated, local, and server-based runs into a centralized analytics ecosystem that enables teams to identify bottlenecks, monitor quality trends, and optimize testing efficiency proactively."
  },
  {
    id: "visual-dashboards",
    title: "Visual Dashboards",
    icon: LayoutDashboard,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
    bg: "bg-purple-500/10",
    desc: "cliQTest offers intelligent visual dashboards that transform complex testing data into highly interactive and business-friendly visual representations for better monitoring and decision-making. The platform provides centralized visibility into execution summaries, defect trends, automation health, test coverage, release progress, and quality KPIs through customizable graphs, charts, and widgets."
  },
  {
    id: "execution-history",
    title: "Execution History",
    icon: History,
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-teal-500/20",
    bg: "bg-teal-500/10",
    desc: "cliQTest maintains a centralized execution history repository that captures every test execution, environment configuration, status update, response time, and execution artifact across projects and releases. Teams can easily revisit previous runs, compare execution outcomes, analyze historical patterns, and identify recurring failures through detailed execution tracking and timeline-based visibility."
  },
  {
    id: "tree-view-reporting",
    title: "Tree View Reporting",
    icon: Network,
    color: "from-orange-500 to-amber-400",
    shadow: "shadow-orange-500/20",
    bg: "bg-orange-500/10",
    desc: "cliQTest simplifies report analysis through an intuitive tree-view reporting structure that visually organizes execution data in a hierarchical format across collections, test suites, test cases, and individual test steps. This structured reporting model allows teams to drill down from high-level execution summaries to detailed step-level insights, making it easier to identify failed steps, analyze execution paths, and understand validation outcomes quickly."
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Monitoring",
    icon: Activity,
    color: "from-red-500 to-rose-400",
    shadow: "shadow-red-500/20",
    bg: "bg-red-500/10",
    desc: "cliQTest provides real-time monitoring capabilities that allow teams to track test execution progress, runtime activities, environment behavior, and automation health as tests are actively running. The platform continuously streams execution updates, logs, status indicators, and live insights that help teams identify failures instantly, reduce response time, and improve operational awareness during critical testing cycles."
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    icon: SearchX,
    color: "from-indigo-500 to-blue-500",
    shadow: "shadow-indigo-500/20",
    bg: "bg-indigo-500/10",
    desc: "cliQTest enhances quality engineering workflows through intelligent failure analysis capabilities that help teams quickly identify root causes behind failed test executions, application crashes, environment issues, or automation breakdowns. By correlating execution logs, runtime events, screenshots, response patterns, and defect insights, the platform enables faster troubleshooting and more accurate defect prioritization."
  },
  {
    id: "customizable-reports",
    title: "Customizable Reports",
    icon: FileText,
    color: "from-fuchsia-500 to-purple-500",
    shadow: "shadow-fuchsia-500/20",
    bg: "bg-fuchsia-500/10",
    desc: "cliQTest enables organizations to generate highly customizable reports tailored to specific business, operational, and project requirements. Teams can configure report formats, execution filters, project views, environment details, quality metrics, and stakeholder-specific insights to create meaningful and actionable reporting outputs. With support for downloadable reports in multiple formats such as PDF, Excel, and HTML."
  },
  {
    id: "quality-trend-analysis",
    title: "Quality Trend Analysis",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-400",
    shadow: "shadow-green-500/20",
    bg: "bg-green-500/10",
    desc: "cliQTest provides advanced quality trend analysis capabilities that help organizations monitor long-term testing performance, defect patterns, automation stability, and release quality across multiple testing cycles and environments. By analyzing historical execution data and quality metrics, the platform identifies recurring risks, unstable components, and improvement opportunities that support continuous optimization of testing strategies and release processes."
  },
  {
    id: "audit-compliance",
    title: "Audit & Compliance Reporting",
    icon: ShieldCheck,
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
    bg: "bg-cyan-500/10",
    desc: "cliQTest supports enterprise-grade audit and compliance reporting by maintaining detailed records of test executions, modifications, approvals, defect mappings, and user activities across the complete quality lifecycle. The platform ensures full traceability and governance through centralized reporting structures that help organizations meet regulatory, compliance, and internal quality standards."
  },
  {
    id: "quality-metrics",
    title: "Quality Metrics",
    icon: Target,
    color: "from-yellow-500 to-orange-500",
    shadow: "shadow-yellow-500/20",
    bg: "bg-yellow-500/10",
    desc: "cliQTest enables organizations to measure and monitor critical quality metrics that drive continuous improvement and operational excellence. The platform tracks execution success rates, defect density, automation stability, test coverage, release health indicators, environment utilization, and performance trends within a centralized analytics framework."
  }
];

const FeatureNode = ({ feat, index }: { feat: typeof features[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative w-full flex items-center mb-16 md:mb-24 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
      
      {/* Content Box */}
      <div className={`w-full md:w-[45%] flex flex-col items-start relative z-10 group`}>
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`w-full bg-[#080808] border border-white/5 p-8 md:p-10 rounded-sm shadow-[#6843B7]/10 backdrop-blur-xl relative overflow-hidden`}
        >
          {/* Ambient background glow inside card */}
          <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-[#6843B7]/10 blur-[60px] opacity-40`} />
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]`}>
              {feat.title}
            </span>
          </h3>
          
          <p className="text-white/60 leading-relaxed text-[15px] md:text-base relative z-10">
            {feat.desc}
          </p>
          
        </motion.div>
      </div>

      {/* Center Line Node Indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center z-20">
        <motion.div 
           initial={{ scale: 0, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className={`w-12 h-12 rounded-full border-4 border-[#050505] bg-[#6843B7]/10 flex items-center justify-center shadow-[0_0_20px_rgba(104,67,183,0.2)]`}
        >
          <div className={`w-3 h-3 rounded-full bg-[#6843B7] animate-pulse`} />
        </motion.div>
      </div>
      
    </div>
  );
};

export default function AnalyticsFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#050505] min-h-screen py-32 relative overflow-hidden text-white font-sans">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 z-0 fixed">
         <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-[#6843B7]/20 blur-[150px]" />
         <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-[#6843B7]/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Intelligence at <span className="text-[#6843B7]">Every Layer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 leading-relaxed"
          >
            Transform raw execution data into actionable strategic insights through a powerful, centralized analytics ecosystem.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          
          {/* Glowing Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10 z-0">
            <motion.div 
              className="absolute top-0 w-full bg-[#6843B7] shadow-[0_0_15px_rgba(104,67,183,0.5)]" 
              style={{ height: lineHeight }}
            />
          </div>

          {/* Features List */}
          <div className="flex flex-col relative z-10 pt-10 pl-12 md:pl-0">
            {features.map((feat, idx) => (
              <FeatureNode key={feat.id} feat={feat} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
