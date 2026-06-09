import { Activity, Brain, Globe, Monitor, Network, RefreshCw, Smartphone } from 'lucide-react';

const features = [
  {
    id: 'web-testing',
    title: 'Web Testing',
    desc: [
      "Modern web applications operate across multiple browsers, environments, frameworks, and user workflows, making consistent validation increasingly complex. cliQTest enables comprehensive web testing through intelligent automation, cross-browser execution, real-device validation, and AI-powered automation management.",
      "The platform supports automated validation of dynamic UI elements, authentication workflows, business transactions, and end-to-end user journeys while reducing automation maintenance through self-healing capabilities. Teams can execute scalable regression cycles across browsers and environments while monitoring execution results through centralized dashboards and reports.",
      "cliQTest ensures reliable, scalable, and high-performance web application testing for enterprise-grade digital experiences."
    ],
    benefits: [
      'Cross-browser validation',
      'AI-powered automation stability',
      'End-to-end workflow automation',
      'Faster regression execution',
      'Centralized execution analytics'
    ],
    theme: 'purple',
    icon: Globe
  },
  {
    id: 'mobile-testing',
    title: 'Mobile Testing',
    desc: [
      "Mobile applications demand seamless experiences across devices, operating systems, screen sizes, and network conditions. cliQTest’s real device lab enables organizations to validate mobile applications on actual Android and iOS devices, ensuring accurate production-level testing.",
      "The platform supports OTP automation, biometric validation, CAPTCHA handling, device-level execution, and cross-platform testing while providing real-time logs and execution visibility. Teams can automate onboarding flows, transaction journeys, customer experiences, and critical business workflows across mobile ecosystems.",
      "cliQTest improves mobile application reliability, execution consistency, and customer experience across enterprise mobility platforms."
    ],
    benefits: [
      'Real-device testing for accurate validation',
      'Cross-device and cross-platform execution',
      'OTP, biometric, and CAPTCHA automation',
      'Real-time execution logs and insights',
      'Scalable mobile automation workflows'
    ],
    theme: 'teal',
    icon: Smartphone
  },
  {
    id: 'api-testing',
    title: 'API Testing',
    desc: [
      "Enterprise applications rely heavily on APIs to power integrations, workflows, transactions, and real-time communication across systems. cliQTest enables comprehensive API testing to validate functionality, response accuracy, business logic, and data consistency across interconnected ecosystems.",
      "The platform supports automated validation of REST APIs using GET, POST, PUT, and DELETE methods while enabling synchronized UI and API testing workflows. AI-powered SQL query generation, response comparison, and data-driven testing improve backend validation efficiency and reduce manual effort.",
      "cliQTest helps organizations ensure reliable integrations, accurate data exchange, and stable backend performance across modern enterprise architectures."
    ],
    benefits: [
      'End-to-end API validation',
      'Backend data consistency checks',
      'AI-assisted SQL query generation',
      'Integrated UI and API testing',
      'Faster defect identification and debugging'
    ],
    theme: 'purple',
    icon: Network
  },
  {
    id: 'desktop-testing',
    title: 'Desktop Testing',
    desc: [
      "Enterprise desktop applications often involve complex workflows, legacy systems, and environment-specific dependencies that require reliable and scalable validation. cliQTest enables organizations to automate and manage desktop application testing through centralized execution workflows and intelligent automation capabilities.",
      "The platform supports low-code automation, reusable workflows, AI-driven maintenance, and cross-environment execution while ensuring stable validation of desktop-based business processes and critical enterprise operations.",
      "cliQTest helps enterprises modernize legacy testing approaches while improving execution efficiency, reliability, and operational continuity across desktop environments."
    ],
    benefits: [
      'Automated desktop workflow validation',
      'Low-code test automation',
      'Reduced maintenance effort',
      'Centralized reporting and traceability',
      'Improved execution consistency'
    ],
    theme: 'teal',
    icon: Monitor
  },
  {
    id: 'regression-testing',
    title: 'Regression Testing',
    desc: [
      "Frequent releases and evolving applications make regression testing critical for maintaining application stability and business continuity. cliQTest enables scalable and intelligent regression testing across web, mobile, desktop, and API ecosystems through centralized orchestration and AI-powered automation.",
      "The platform supports reusable components, parallel execution, cross-browser testing, distributed execution agents, and automated scheduling that significantly reduce regression cycle durations. AI-powered self-healing minimizes failures caused by UI changes, ensuring reliable execution across dynamic applications.",
      "cliQTest enables organizations to execute faster and more reliable regression cycles while maintaining release confidence and operational efficiency."
    ],
    benefits: [
      'Faster regression execution cycles',
      'Parallel and distributed execution',
      'AI-powered automation resilience',
      'Improved test coverage and reliability',
      'Continuous validation across releases'
    ],
    theme: 'purple',
    icon: RefreshCw
  },
  {
    id: 'performance-testing',
    title: 'Performance Testing',
    desc: [
      "High-performing applications are critical for delivering seamless digital experiences and maintaining operational reliability under varying workloads. cliQTest supports scalable performance validation by enabling organizations to monitor execution behavior, application responsiveness, and system reliability across enterprise environments.",
      "The platform supports large-scale execution orchestration, data-driven workflows, distributed execution models, and centralized reporting that help organizations identify bottlenecks, performance degradation, and scalability risks before production deployment.",
      "cliQTest enables teams to improve system performance, optimize application behavior, and ensure stable user experiences under demanding business conditions."
    ],
    benefits: [
      'Scalable execution and validation',
      'Centralized performance visibility',
      'Faster bottleneck identification',
      'Improved application reliability',
      'Enhanced release confidence'
    ],
    theme: 'teal',
    icon: Activity
  },
  {
    id: 'ai-testing',
    title: 'AI Testing',
    desc: [
      "Artificial Intelligence models and AI-driven applications require a fundamentally different validation approach compared to traditional software. cliQTest enables organizations to test AI and Machine Learning systems by evaluating model accuracy, testing edge cases, and ensuring consistent output quality.",
      "The platform supports automated validation of AI responses, algorithmic behaviors, conversational agents (LLMs), and data processing pipelines. With built-in AI evaluation metrics, teams can measure hallucination rates, contextual accuracy, and performance drift over time.",
      "cliQTest helps enterprises build trust in their AI initiatives by ensuring models remain reliable, safe, and highly performant under real-world usage."
    ],
    benefits: [
      'Automated LLM and chatbot validation',
      'Model accuracy and drift monitoring',
      'Reduced hallucination risks',
      'Edge-case evaluation workflows',
      'Improved AI reliability and safety'
    ],
    theme: 'purple',
    icon: Brain
  }
];

export default features;
