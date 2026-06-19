import { Activity, Bot, Brain, Bug, Cpu, Crosshair, Database, DatabaseZap, FileText, FunctionSquare, Lightbulb, ShieldCheck, Sparkles, Wrench } from 'lucide-react';

const features = [
  { 
    id: "ai-testing-&-evaluation", 
    title: "AI Testing & Evaluation",
    benefits: ["Validate LLMs and RAG pipelines", "Detect hallucinations", "Automated semantic analysis"], 
    icon: Brain,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest provides advanced AI testing and evaluation capabilities designed to validate the performance, reliability, contextual accuracy, and consistency of modern AI systems including LLMs, RAG pipelines, machine learning models, deep learning systems, chatbots, and voicebots. The platform enables teams to upload structured datasets containing prompts, inputs, expected responses, and evaluation criteria while executing intelligent validation workflows across diverse AI models and use cases. Through flexible data mapping, built-in validation engines, semantic analysis, hallucination detection, contextual response evaluation, and scalable execution capabilities, cliQTest simplifies the complex process of AI model evaluation and ensures production-ready AI quality across enterprise environments." 
  },
  { 
    id: "genai-test-case-generation", 
    title: "GenAI Test Case Generation",
    benefits: ["Automated from BRDs/Jira", "Intelligent workflow interpretation", "Comprehensive edge cases"], 
    icon: Sparkles,
    span: "col-span-1",
    desc: "cliQTest leverages Generative AI to automate the creation of comprehensive and context-aware test cases directly from BRDs, Jira stories, user flows, Figma designs, and business requirements. The platform intelligently interprets workflows, validation logic, UI structures, and functional dependencies to generate positive, negative, and edge-case scenarios with complete execution steps and expected outcomes. By reducing manual test authoring effort and improving coverage consistency, cliQTest accelerates test preparation, enhances traceability, and enables faster and more scalable quality engineering practices across modern application ecosystems." 
  },
  { 
    id: "ai-test-data-generator", 
    title: "AI Test Data Generator",
    benefits: ["Privacy-compliant synthetic data", "Domain-specific generation", "Rapid bulk creation"], 
    icon: Database,
    span: "col-span-1",
    desc: "cliQTest’s AI-powered Test Data Generator enables organizations to create realistic, context-aware, and privacy-compliant synthetic datasets for automation, performance, regression, and AI model testing workflows. The platform intelligently generates test data aligned with business rules, field constraints, application patterns, and domain-specific scenarios while ensuring sensitive information is masked and regulatory compliance is maintained. By eliminating dependency on production data and accelerating bulk dataset generation, cliQTest improves testing scalability, coverage quality, and operational efficiency across enterprise testing environments." 
  },
  { 
    id: "ai-x-path-finder", 
    title: "AI X-Path Finder",
    benefits: ["Intelligent DOM analysis", "Resilient locator generation", "Reduced script flakiness"], 
    icon: Crosshair,
    span: "col-span-1",
    desc: "cliQTest simplifies locator management through its intelligent AI-powered XPath Finder that automatically analyzes DOM structures and generates accurate, optimized, and resilient XPath locators for web automation workflows. The platform understands element relationships, UI hierarchies, and structural patterns to generate dynamic locators capable of adapting to minor application changes and reducing automation flakiness. By eliminating manual XPath creation and simplifying locator maintenance, cliQTest improves automation stability, accelerates script development, and reduces debugging effort across rapidly evolving applications." 
  },
  { 
    id: "agentic-ai-function-generator", 
    title: "Agentic AI Function Generator",
    benefits: ["Automated script generation", "Self-optimizing workflows", "Natural language inputs"], 
    icon: FunctionSquare,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest’s Agentic AI Function Generator transforms natural language instructions into production-ready automation functions and reusable code components without requiring deep scripting expertise. The platform intelligently interprets user intent, business workflows, and automation requirements to generate clean, modular, and executable functions that integrate seamlessly into existing testing frameworks and workflows. By democratizing automation development and reducing manual coding effort, cliQTest accelerates automation adoption and empowers cross-functional teams to contribute to intelligent automation initiatives." 
  },
  { 
    id: "ai-powered-auto-healing", 
    title: "AI-Powered Auto Healing",
    benefits: ["Runtime script repair", "Zero manual intervention", "Continuous execution stability"], 
    icon: Wrench,
    span: "col-span-1",
    desc: "cliQTest’s AI-driven Auto Healing capability continuously monitors application changes and dynamically repairs broken automation scripts during execution by identifying alternate locators and adapting to evolving UI structures in real time. The platform intelligently detects attribute changes, layout modifications, and object shifts while autonomously maintaining execution continuity without manual intervention. This significantly reduces automation maintenance overhead, minimizes execution failures, and ensures long-term automation stability across fast-changing enterprise applications." 
  },
  { 
    id: "mcp-automation", 
    title: "MCP Automation",
    benefits: ["Multi-model orchestration", "Cross-system synchronization", "Scalable AI integration"], 
    icon: Cpu,
    span: "col-span-1",
    desc: "cliQTest utilizes Model Context Protocol (MCP)-based automation to intelligently generate and execute automation scripts by understanding application context, business workflows, and user interactions holistically. The platform creates execution-ready automation flows without requiring extensive scripting effort while ensuring alignment with real business processes and testing objectives. By leveraging contextual understanding and intelligent workflow orchestration, cliQTest accelerates automation scalability, improves execution consistency, and simplifies enterprise automation adoption." 
  },
  { 
    id: "agentic-automation", 
    title: "Agentic Automation",
    benefits: ["Autonomous execution flows", "Adaptive reasoning", "Self-correcting pathways"], 
    icon: Bot,
    span: "col-span-1 md:col-span-2 lg:col-span-1",
    desc: "cliQTest introduces next-generation Agentic Automation capabilities that enable intelligent AI agents to independently analyze, plan, generate, optimize, and execute complex automation workflows with minimal human intervention. The platform decomposes high-level testing goals into structured execution flows, orchestrates multiple specialized AI agents collaboratively, and continuously refines automation scripts based on execution feedback and application behavior. This autonomous and adaptive automation model significantly improves scalability, reduces manual effort, and transforms traditional automation into intelligent quality engineering." 
  },
  { 
    id: "ai-sql-query-agent", 
    title: "AI SQL Query Agent",
    benefits: ["Natural language to SQL", "Intelligent data validation", "Complex query synthesis"], 
    icon: DatabaseZap,
    span: "col-span-1",
    desc: "cliQTest transforms database testing by utilizing an AI-powered SQL Query Agent that converts natural language prompts into optimized queries, directly aiding comprehensive DB validation. The platform enables testers and QA teams to perform complex database validations, data consistency checks, and backend verification without extensive SQL expertise. By accelerating query generation and reducing manual effort, cliQTest improves data validation efficiency, enhances defect detection accuracy, and streamlines backend testing workflows across enterprise applications." 
  },
  { 
    id: "ai-captcha-automation", 
    title: "AI CAPTCHA Automation",
    benefits: ["Automated image recognition", "Seamless security bypass", "Uninterrupted workflows"], 
    icon: ShieldCheck,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest enables intelligent CAPTCHA automation by automatically identifying, processing, and handling CAPTCHA challenges during test execution without interrupting automation workflows. The platform uses AI-driven recognition and execution strategies to ensure uninterrupted validation across secure authentication flows, onboarding journeys, transaction processes, and enterprise applications that rely on CAPTCHA verification. This capability significantly improves end-to-end automation continuity and reduces manual intervention during critical business workflows." 
  },
  { 
    id: "ai-report-summarization", 
    title: "AI Report Summarization",
    benefits: ["Actionable insights extraction", "Executive summary generation", "Automated defect highlighting"], 
    icon: FileText,
    span: "col-span-1",
    desc: "cliQTest enhances reporting efficiency through AI-powered report summarization that automatically transforms complex execution reports, logs, defect insights, and testing data into concise, actionable, and stakeholder-friendly summaries. The platform intelligently extracts key trends, failure patterns, anomalies, quality risks, and execution highlights while generating executive-ready insights for faster analysis and decision-making. By reducing manual report review effort and improving visibility into testing outcomes, cliQTest accelerates release readiness assessments and enterprise quality governance." 
  },
  { 
    id: "ai-model-evaluation", 
    title: "AI Model Evaluation",
    benefits: ["End-to-end model testing", "Contextual consistency checks", "Performance benchmarking"], 
    icon: Activity,
    span: "col-span-1",
    desc: "cliQTest delivers comprehensive AI model evaluation capabilities designed specifically for modern conversational AI, generative AI, and intelligent automation ecosystems. The platform supports validation of LLMs, RAG systems, chatbots, voicebots, and AI-driven applications through contextual response analysis, hallucination detection, prompt testing, bias identification, conversational flow evaluation, and response quality assessment. By ensuring fairness, consistency, reliability, and contextual correctness, cliQTest enables organizations to confidently deploy enterprise-grade AI systems into production environments." 
  },
  { 
    id: "defect-insights", 
    title: "Defect Insights",
    benefits: ["Intelligent bug triaging", "Historical defect correlation", "Predictive failure modeling"], 
    icon: Bug,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest delivers AI-driven defect intelligence that helps organizations identify, analyze, and prioritize quality issues more effectively. The platform analyzes execution data, failure trends, defect patterns, and historical outcomes to provide deeper visibility into root causes and testing risks. AI-powered report summarization transforms large execution datasets into concise and actionable insights, enabling stakeholders to understand failures, quality trends, and release risks faster. This intelligent analysis capability improves debugging efficiency, accelerates defect resolution, and enables data-driven decision-making across quality engineering teams." 
  },
  { 
    id: "smart-recommendations", 
    title: "Smart Recommendations",
    benefits: ["Optimization suggestions", "Coverage gap identification", "Proactive quality coaching"], 
    icon: Lightbulb,
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    desc: "cliQTest utilizes AI-driven recommendation engines to continuously optimize testing strategies, automation coverage, and execution efficiency. By analyzing historical execution behavior, defect trends, environment performance, and test stability, the platform provides intelligent recommendations for improving quality outcomes. The platform can suggest automation optimizations, coverage improvements, execution prioritization strategies, and maintenance actions that help organizations maximize testing effectiveness while reducing operational overhead. These intelligent recommendations enable teams to proactively improve quality engineering practices, accelerate delivery cycles, and maintain higher release confidence across enterprise environments.",
    stats: [
      { value: "AI", label: "Powered" },
      { value: "10x", label: "Faster" },
      { value: "100%", label: "Automated" },
      { value: "Zero", label: "Maintenance" }
    ]
  }
];

export default features;