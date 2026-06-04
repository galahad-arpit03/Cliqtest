"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently mostly in view
      const viewportCenter = window.innerHeight / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // Calculate distance from center of viewport to center of the element
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <section className="bg-black min-h-screen relative text-white font-sans selection:bg-[#6843B7] selection:text-white pb-32">
      
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col lg:flex-row relative items-start gap-12 lg:gap-24 pt-20">
        
        {/* Left Side: Scrolling Content */}
        <div className="w-full lg:w-1/2 flex flex-col z-10">
          
          <div className="mb-20 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight"
            >
              Intelligence at <br/>
              <span className="text-[#6843B7]">Every Layer</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/50 leading-relaxed max-w-xl"
            >
              Transform raw execution data into actionable strategic insights through a powerful, centralized analytics ecosystem.
            </motion.p>
          </div>

          <div className="flex flex-col gap-32 pb-32">
            {features.map((feat, idx) => (
              <div 
                key={feat.id} 
                id={feat.id}
                ref={el => { sectionRefs.current[idx] = el; }}
                className={`transition-all duration-700 \${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {(() => {
                      const words = feat.title.split(' ');
                      const lastWord = words.pop();
                      return (
                        <>
                          {words.length > 0 && words.join(' ') + ' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-white">
                            {lastWord}
                          </span>
                        </>
                      );
                    })()}
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed text-[16px] md:text-lg">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Visualizer */}
        <div className="w-full lg:w-1/2 hidden lg:flex flex-col sticky top-32 h-[calc(100vh-12rem)] items-center justify-center z-0 perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40, rotateX: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, rotateX: -10, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full max-h-[700px] bg-[#050505] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group"
            >
              {/* Dynamic Glow */}
              <div className="absolute inset-0 bg-[#6843B7]/10 opacity-50 blur-[100px] transition-opacity duration-1000 group-hover:opacity-100" />
              
              {/* Grid Lines */}
              <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

              <div className="relative z-10 flex flex-col items-center text-center p-12">
                {React.createElement(features[activeIndex].icon, {
                  size: 100,
                  className: "text-[#6843B7] mb-12 drop-shadow-[0_0_40px_rgba(104,67,183,0.8)] animate-pulse"
                })}
                
                <h4 className="text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-xl">
                  {features[activeIndex].stat}
                </h4>
                <p className="text-xl text-[#6843B7] font-semibold tracking-widest uppercase">
                  {features[activeIndex].statLabel}
                </p>
              </div>

              {/* Decorative Tech Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[300px] h-[300px] border border-[#6843B7] rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[400px] h-[400px] border border-dashed border-[#6843B7]/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
