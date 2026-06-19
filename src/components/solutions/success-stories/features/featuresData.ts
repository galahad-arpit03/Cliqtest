import { Building2, Code2, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: "banking",
    title: "Banking: Scaling Reliable Core Systems",
    theme: "purple",
    icon: Building2,
    stories: [
      {
        company: "Axis Bank",
        desc: "Axis Bank adopted ApMoSys’s innovative solutions as part of their digital transformation journey. The partnership enabled smooth deployment of tailored technology that aligned with their strategic goals, significantly boosting operational efficiency and streamlining key banking functions across their ecosystem.",
        benefits: ['Boosted operational efficiency', 'Streamlined banking functions', 'Tailored technology deployment']
      },
      {
        company: "Bank of Maharashtra",
        desc: "Bank of Maharashtra deployed the cliQTest platform, ensuring end-to-end testing visibility, faster defect detection, and improved digital channel reliability.",
        benefits: ['End-to-end testing visibility', 'Faster defect detection', 'Improved channel reliability']
      },
      {
        company: "UCO Bank, RBL Bank & More",
        desc: "UCO Bank, RBL Bank and IDBI Bank implemented our cliQTest solution to enable real-time execution visibility, faster issue resolution, and improved system reliability.",
        benefits: ['Faster issue resolution', 'Real-time execution visibility', 'Improved system reliability']
      }
    ]
  },
  {
    id: "fintech-&-payments",
    title: "FinTech & Payments: Streamlined Execution",
    theme: "teal",
    icon: ShieldCheck,
    stories: [
      {
        company: "CRIS",
        desc: "CRIS leveraged ApMoSys’s cliQTest platform to streamline their testing processes. The platform’s robust automation capabilities and user-friendly interface significantly improved test accuracy and speed, empowering the team to deliver quality software with greater efficiency and confidence across projects.",
        benefits: ['Improved test accuracy and speed', 'Greater delivery efficiency', 'Robust automation capabilities']
      },
      {
        company: "Protean & NSDL",
        desc: "Protean implemented our cliQTest solution for Protean eGov Technologies, enabling continuous availability validation, proactive testing alerts, and seamless digital experience assurance. NSDL Payments Bank leveraged our cliQTest solution for real-time execution visibility.",
        benefits: ['Continuous availability validation', 'Proactive testing alerts', 'Real-time execution visibility']
      }
    ]
  },
  {
    id: "financial-services",
    title: "Financial Services: Operational Excellence",
    theme: "purple",
    icon: LineChart,
    stories: [
      {
        company: "Muscat Finance",
        desc: "Muscat Finance collaborated with ApMoSys on their FinXplore OCR automation platform and were impressed by their expertise and dedicated support. Their team delivered tailored solutions that aligned perfectly with our needs, ensuring smooth integration and enhancing our operational efficiency.",
        benefits: ['Smooth system integration', 'Enhanced operational efficiency', 'Dedicated tailored support']
      },
      {
        company: "L&T Finance",
        desc: "L&T Finance deployed the cliQTest platform, ensuring end-to-end testing visibility, faster defect detection, and improved digital channel reliability.",
        benefits: ['Faster defect detection', 'End-to-end testing visibility', 'Reliable digital channels']
      }
    ]
  },
  {
    id: "insurance-&-pharma",
    title: "Insurance & Pharma: Real-Time Performance",
    theme: "teal",
    icon: Code2,
    stories: [
      {
        company: "Generali Central Life Insurance",
        desc: "Generali Central Life Insurance implemented its cliQTest solution, enabling real-time execution visibility, faster defect resolution, and improved software reliability across their entire application ecosystem.",
        benefits: ['Real-time testing visibility', 'Faster defect resolution', 'System ecosystem reliability']
      },
      {
        company: "FDC India",
        desc: "In the pharmaceutical sector, FDC India implemented its cliQTest solution, enabling real-time execution visibility, faster defect resolution, and improved software reliability.",
        benefits: ['Real-time testing visibility', 'Faster defect resolution', 'Improved software reliability']
      }
    ]
  }
];

export default features;
