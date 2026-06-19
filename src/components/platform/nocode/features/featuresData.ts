import { Layers, Wand2, Code, Monitor, ShieldCheck, Settings, Network, CheckCircle2, Video, Blocks } from 'lucide-react';

const features = [
  {
    id: "recorder",
    title: "Intelligent Recorder",
    icon: Video,
    theme: "purple",
    desc: [
      "cliQTest’s intelligent Recorder simplifies the automation journey by enabling users to capture application workflows, user interactions, and business processes in real time without the need for extensive coding expertise. Designed for both technical and non-technical users, the recorder automatically captures multiple element locators, actions, validations, and navigation flows while generating reusable automation scripts in the background.",
      "The Recorder significantly accelerates test creation by eliminating repetitive scripting activities and reducing dependency on specialized automation engineers. Teams can rapidly convert business scenarios into executable test cases, enabling faster automation adoption across enterprise environments.",
      "Built with scalability and resilience in mind, the Recorder supports web, mobile, desktop, and API workflows while ensuring consistency across dynamic applications and evolving UI environments. By streamlining automation development, cliQTest empowers organizations to reduce onboarding effort, improve execution speed, and accelerate software delivery cycles."
    ],
    benefits: [
      "Real-time workflow and action capture",
      "Cross-platform support (Web, Mobile, Desktop, API)",
      "Automatic element locator generation"
    ]
  },
  {
    id: "scriptless-automation",
    title: "Scriptless Automation",
    icon: Blocks,
    theme: "green",
    desc: [
      "cliQTest’s Scriptless Automation empowers QA teams and business users to create, maintain, and scale automated testing without writing code. The platform abstracts technical complexities by offering an intuitive visual interface where users can drag, drop, and configure test steps using pre-built actions and reusable components.",
      "By eliminating the steep learning curve associated with traditional automation frameworks, cliQTest accelerates test design, increases coverage, and enables rapid validation of business processes. This democratized approach allows domain experts, business analysts, and manual testers to actively participate in the automation lifecycle, ensuring testing aligns closely with business objectives.",
      "With built-in support for data-driven testing, dynamic validations, and complex flow orchestration, the scriptless engine delivers robust, enterprise-grade automation that minimizes maintenance overhead and maximizes ROI."
    ],
    benefits: [
      "Democratized testing for QA and Business Users",
      "Seamless CI/CD ecosystem integration",
      "Enterprise-level maintainability and governance"
    ]
  },

    {
      id: "reusable-components",
      title: "Reusable Components",
      icon: Layers,
      theme: "purple",
      desc: [
        "cliQTest enhances automation efficiency through reusable components that enable teams to standardize common actions, workflows, test data, and validation steps across projects and environments. By leveraging centralized repositories, organizations can create modular automation assets that are shared and reused across multiple test scenarios, significantly reducing duplication and maintenance effort.",
        "Reusable components improve consistency in automation design while simplifying updates and long-term management. Any changes made to shared components automatically propagate across associated test cases, minimizing manual intervention and ensuring execution stability.",
        "The platform also supports reusable test steps, global variables, shared object repositories, and centralized data management capabilities, enabling enterprise teams to maintain scalable automation architectures with improved governance and operational efficiency."
      ],
      benefits: [
        "Standardized actions and test data",
        "Centralized modular repositories",
        "Auto-propagating workflow updates"
      ]
    },
    {
      id: "ai-auto-healing",
      title: "AI Auto-Healing",
      icon: Wand2,
      theme: "green",
      desc: [
        "cliQTest’s AI-powered Auto-Healing capability ensures stable and resilient automation execution even when applications undergo UI changes, layout updates, or object modifications. The platform intelligently detects broken locators, identifies alternative object attributes, and automatically repairs automation scripts during runtime without requiring manual intervention.",
        "This significantly reduces automation maintenance overhead, minimizes false failures, and improves execution reliability across dynamic application environments. By continuously adapting to UI changes, cliQTest helps organizations sustain automation ROI while accelerating release cycles and improving testing continuity.",
        "The self-healing engine leverages intelligent locator strategies and execution intelligence to ensure smoother automation performance across rapidly evolving enterprise applications, enabling teams to focus more on quality engineering and less on script maintenance."
      ],
      benefits: [
        "Zero manual intervention required",
        "Intelligent broken locator detection",
        "Significantly reduced maintenance overhead"
      ]
    },
    {
      id: "api-automation",
      title: "API Automation",
      icon: Code,
      theme: "purple",
      desc: [
        "cliQTest enables intelligent and scalable API automation through a unified low-code testing interface that allows teams to create, execute, validate, and manage API workflows without relying on external tools. The platform supports multiple HTTP methods including GET, POST, PUT, DELETE, and PATCH while providing centralized environment management, reusable requests, authentication handling, response validation, and real-time execution reporting.",
        "With built-in support for automated assertions, dynamic parameters, pre-request scripting, and execution history tracking, cliQTest simplifies backend validation, improves testing efficiency, and accelerates continuous delivery across enterprise applications."
      ],
      benefits: [
        "Unified low-code API testing interface",
        "Support for all HTTP methods & assertions",
        "Pre-request scripting and auth handling"
      ]
    },
    {
      id: "desktop-automation",
      title: "Desktop Automation",
      icon: Monitor,
      theme: "green",
      desc: [
        "cliQTest simplifies desktop application automation by providing a low-code framework that enables teams to automate complex desktop workflows, legacy systems, and business-critical applications with improved speed and reliability.",
        "The platform allows users to record desktop interactions, configure validations, create reusable workflows, and execute automation scenarios through a centralized interface without extensive scripting expertise.",
        "With intelligent object identification, execution orchestration, reusable components, and detailed reporting capabilities, cliQTest ensures scalable and maintainable desktop automation for enterprise environments."
      ],
      benefits: [
        "Record and automate desktop interactions",
        "Support for legacy systems and apps",
        "Intelligent object identification"
      ]
    },
    {
      id: "smart-authentication",
      title: "Smart Authentication",
      icon: ShieldCheck,
      theme: "purple",
      desc: [
        "cliQTest streamlines secure authentication workflow automation by enabling intelligent handling of CAPTCHA and OTP-based validations during test execution. The platform automatically detects CAPTCHA elements using configured XPaths and processes them without interrupting automation flows, while integrated OTP automation capabilities fetch real-time OTPs from registered mobile devices and input them directly into the application under test.",
        "By eliminating manual intervention during authentication flows, cliQTest enables uninterrupted end-to-end automation for login processes, onboarding journeys, transaction validations, and secure enterprise workflows across web and mobile applications."
      ],
      benefits: [
        "Intelligent CAPTCHA element detection",
        "Real-time mobile OTP automation",
        "Uninterrupted end-to-end test flows"
      ]
    },
    {
      id: "environment-management",
      title: "Environment Management",
      icon: Settings,
      theme: "green",
      desc: [
        "cliQTest provides centralized environment management capabilities that allow teams to seamlessly configure, manage, and execute tests across development, QA, staging, and production-like environments.",
        "The platform enables environment-specific parameterization, reusable configurations, dynamic execution switching, and centralized control of execution settings to ensure consistent validation across multiple deployment stages.",
        "By simplifying environment orchestration and reducing configuration complexity, cliQTest improves execution reliability, accelerates testing workflows, and supports scalable enterprise testing operations."
      ],
      benefits: [
        "Centralized multi-environment execution",
        "Dynamic parameterization and switching",
        "Reduced configuration complexity"
      ]
    },
    {
      id: "distributed-execution",
      title: "Distributed Execution",
      icon: Network,
      theme: "purple",
      desc: [
        "cliQTest’s distributed execution architecture enables organizations to execute automated tests in parallel across multiple environments, devices, browsers, and systems through lightweight execution agents and scalable orchestration capabilities.",
        "The platform supports local execution, hybrid deployment models, and run-time execution logging to accelerate regression cycles and improve testing efficiency across enterprise ecosystems.",
        "By enabling distributed and parallel execution workflows, cliQTest significantly reduces execution time, improves scalability, and ensures consistent automation performance across large and complex testing environments."
      ],
      benefits: [
        "Parallel cross-device/browser testing",
        "Lightweight execution agents",
        "Run-time execution logging"
      ]
    }
  
];

export default features;