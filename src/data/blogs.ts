export interface BlogPost {
  slug: string;
  type: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  author: string;
  content: React.ReactNode | string;
}

export const blogsData: BlogPost[] = [
  {
    slug: "ultimate-guide-agentic-qa",
    type: "Whitepaper",
    title: "The Ultimate Guide to Agentic QA",
    excerpt: "Discover how AI agents are transforming test automation, from self-healing scripts to autonomous generation.",
    image: "/images/2.png",
    readTime: "8 min read",
    date: "June 05, 2026",
    author: "ApMoSys Research Team",
    content: `
      <h2>The Shift from Automation to Autonomy</h2>
      <p>Traditional test automation requires significant manual effort to create, maintain, and execute test scripts. With the advent of Agentic QA, we are moving from static automation to dynamic autonomy.</p>
      <p>Agentic QA leverages Large Language Models (LLMs) and advanced machine learning to create intelligent testing agents. These agents can understand requirements, generate test cases, write code, execute tests, and most importantly, heal broken scripts autonomously when the application UI changes.</p>
      
      <h2>Core Capabilities of Agentic QA</h2>
      <ul>
        <li><strong>Self-Healing Automation:</strong> Automatically adapting to locator changes (XPath, CSS) without human intervention.</li>
        <li><strong>Autonomous Test Generation:</strong> Converting natural language requirements into executable automation code.</li>
        <li><strong>Intelligent Root Cause Analysis:</strong> Analyzing test failures and providing detailed, actionable insights into code or environment issues.</li>
        <li><strong>Continuous Optimization:</strong> Learning from past test runs to optimize the test suite for maximum coverage and minimal execution time.</li>
      </ul>

      <h2>The Business Impact</h2>
      <p>Organizations adopting Agentic QA are seeing an 80% reduction in test maintenance overhead. This allows QA engineers to focus on exploratory testing, performance architecture, and security, rather than fixing broken scripts caused by minor UI tweaks.</p>
      
      <blockquote>"Agentic QA is not about replacing testers; it's about elevating them from script writers to quality architects."</blockquote>
      
      <h2>Getting Started with cliQTest</h2>
      <p>cliQTest natively integrates these capabilities into a unified platform. By connecting your repository and defining your test environments, the cliQTest AI engine can immediately begin analyzing your application and generating a baseline test suite.</p>
    `
  },
  {
    slug: "global-fintech-cuts-qa-time",
    type: "Case Study",
    title: "Global FinTech Cuts QA Time by 80%",
    excerpt: "Learn how a leading financial institution integrated cliQTest to achieve seamless continuous delivery.",
    image: "/images/enterprise.png",
    readTime: "6 min read",
    date: "May 28, 2026",
    author: "Customer Success Team",
    content: `
      <h2>The Challenge</h2>
      <p>A leading multinational financial institution was struggling with a massive legacy test suite. With over 15,000 automated UI tests, their overnight execution was taking 12+ hours, causing major bottlenecks in their CI/CD pipeline.</p>
      <p>Furthermore, minor changes to their web application resulted in hundreds of false-positive failures, requiring a dedicated team of 10 engineers just to maintain the test suite.</p>
      
      <h2>The cliQTest Solution</h2>
      <p>The institution partnered with ApMoSys to migrate their legacy scripts to the cliQTest platform. By leveraging our AI-driven import tools, 85% of their scripts were automatically converted and optimized.</p>
      
      <h3>Key Implementations:</h3>
      <ul>
        <li><strong>Distributed Device Lab:</strong> Utilizing the cliQTest cloud device lab to execute tests in parallel across 500+ nodes.</li>
        <li><strong>Self-Healing Execution:</strong> Enabling the AI agent to automatically correct broken selectors during runtime, eliminating false positives.</li>
        <li><strong>Smart Flaky Test Detection:</strong> Quarantining tests that failed intermittently due to environment issues rather than code defects.</li>
      </ul>

      <h2>The Results</h2>
      <p>Within 3 months of implementation, the results were transformative:</p>
      <ul>
        <li>Execution time reduced from <strong>12 hours to 45 minutes</strong>.</li>
        <li>Test maintenance overhead dropped by <strong>80%</strong>.</li>
        <li>Zero high-severity bugs escaped to production in the subsequent two quarters.</li>
      </ul>
      <p>By empowering their teams with Agentic QA, the organization achieved true continuous deployment, releasing features to their customers faster and with higher confidence than ever before.</p>
    `
  },
  {
    slug: "scaling-test-infrastructure-2026",
    type: "Blog Post",
    title: "Scaling Test Infrastructure in 2026",
    excerpt: "Best practices for managing parallel execution and distributed device labs.",
    image: "/images/env.png",
    readTime: "5 min read",
    date: "May 15, 2026",
    author: "DevOps Engineering Team",
    content: `
      <h2>The Modern Testing Bottleneck</h2>
      <p>As applications grow in complexity, so does the testing matrix. Testing across multiple browsers, operating systems, mobile devices, and screen sizes has become an infrastructure nightmare.</p>
      
      <h2>Cloud vs. On-Premise Grids</h2>
      <p>Historically, organizations built their own Selenium grids. Today, maintaining an on-premise device lab is highly inefficient. The hardware depreciates rapidly, mobile devices require constant battery and OS management, and scaling up for peak loads is slow.</p>
      
      <h2>The cliQTest Device Lab Approach</h2>
      <p>Our approach removes infrastructure management entirely from the QA workflow. With over 2,000 real devices and browsers available instantly, test execution scales dynamically.</p>
      
      <h3>Best Practices for Scaling:</h3>
      <ol>
        <li><strong>Atomic Tests:</strong> Keep tests small and focused. Tests that test multiple flows sequentially are prone to failure and difficult to parallelize.</li>
        <li><strong>Data Independence:</strong> Ensure tests do not rely on hardcoded data or data created by previous tests. Use API calls to set up state before the UI test begins.</li>
        <li><strong>Dynamic Provisioning:</strong> Let your CI/CD pipeline request nodes dynamically based on the size of the test suite being executed.</li>
      </ol>
    `
  },
  {
    slug: "self-healing-automation-handbook",
    type: "Whitepaper",
    title: "Self-Healing Automation Handbook",
    excerpt: "Reduce maintenance overhead with AI-powered automation.",
    image: "/images/testcase.png",
    readTime: "12 min read",
    date: "April 22, 2026",
    author: "Product Team",
    content: `
      <h2>What is Self-Healing Automation?</h2>
      <p>Self-healing is a mechanism where the test automation framework detects that an element locator has changed or failed, and automatically uses an alternative locator or machine vision to find the element and continue the test.</p>
      
      <h2>How It Works in cliQTest</h2>
      <p>When a test is executed successfully for the first time, the cliQTest AI engine extracts multiple attributes about every interacted element: XPath, CSS, text, relative position, attributes, and visual snapshot.</p>
      <p>During subsequent runs, if the primary locator fails (e.g., a developer changes an ID), the engine pauses, analyzes the DOM, and scores all elements against the historical attributes. The highest probability match is selected, the test continues, and the script is automatically updated in the repository.</p>
      
      <h2>Implementing Self-Healing Successfully</h2>
      <p>To maximize the benefits of self-healing:</p>
      <ul>
        <li>Use semantic HTML tags to help the AI engine understand context.</li>
        <li>Avoid using highly dynamic, auto-generated IDs as primary locators.</li>
        <li>Regularly review the "Healing Reports" in your dashboard to understand what UI changes are causing the most instability.</li>
      </ul>
    `
  },
  {
    slug: "insurance-enterprise-accelerates-delivery",
    type: "Case Study",
    title: "Insurance Enterprise Accelerates Delivery",
    excerpt: "See how agentic QA transformed release cycles.",
    image: "/images/analytics-hero.png",
    readTime: "7 min read",
    date: "March 10, 2026",
    author: "Customer Success Team",
    content: `
      <h2>Modernizing Legacy Systems</h2>
      <p>A Fortune 500 insurance provider needed to modernize their core claims processing system. Their legacy testing approach involved heavily manual regression testing, taking up to 3 weeks for a single release candidate.</p>
      
      <h2>The Transformation</h2>
      <p>By implementing cliQTest, they digitized their test management and utilized the AI-Assisted Test Generation to convert manual test steps into automated scripts in a fraction of the time.</p>
      
      <h2>Outcomes</h2>
      <p>The 3-week regression cycle was reduced to a 4-hour automated run overnight. The ability to deploy weekly rather than quarterly has given them a significant competitive advantage in deploying new policy products to the market.</p>
    `
  },
  {
    slug: "future-of-autonomous-testing",
    type: "Blog Post",
    title: "Future of Autonomous Testing",
    excerpt: "Exploring the next evolution of software quality.",
    image: "/images/ai-agent.png",
    readTime: "4 min read",
    date: "February 05, 2026",
    author: "AI Research Group",
    content: `
      <h2>Beyond Script Generation</h2>
      <p>The future of software testing isn't just about writing scripts faster; it's about the system exploring the application autonomously.</p>
      <p>Imagine an AI agent that is given the URL of a new application. It crawls the application, understands the business logic, identifies edge cases, generates the necessary test data, and reports back on functional anomalies—all without a single line of test code being written.</p>
      
      <h2>The Road Ahead for cliQTest</h2>
      <p>We are actively developing fully autonomous exploratory testing agents. These agents utilize reinforcement learning to understand what paths in an application are most critical and most prone to failure.</p>
      <p>Stay tuned for our upcoming beta releases where we push the boundaries of what's possible in Quality Engineering.</p>
    `
  }
];

export const trendingTopics = [
  "Agentic QA",
  "AI Testing",
  "Automation",
  "Self-Healing",
  "DevOps",
  "Quality Engineering",
];

export const getFeaturedPosts = () => {
  return blogsData.slice(0, 2);
};

export const getRecentPosts = () => {
  return [
    {
      date: "2026-06-01",
      title: "Future of AI-Powered Quality Engineering",
      slug: "future-of-autonomous-testing"
    },
    {
      date: "2026-05-24",
      title: "Performance Engineering at Scale",
      slug: "scaling-test-infrastructure-2026"
    },
  ];
};
