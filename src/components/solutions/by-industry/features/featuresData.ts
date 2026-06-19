import { CheckCircle2, CreditCard, Landmark, RadioTower, ShieldCheck, Stethoscope, Store, Tags, Wifi } from 'lucide-react';

const industries = [
  {
    id: "fintech",
    name: "FinTech",
    icon: ShieldCheck,
    theme: "purple",
    desc: [
      "FinTech applications demand speed, reliability, security, and real-time validation across highly regulated financial ecosystems. cliQTest enables end-to-end automation of complex financial workflows including onboarding, payments, remittances, authentication, portfolio management, and transaction validation.",
      "The platform equips teams with specialized tools for testing biometric authentication, multi-factor security flows, and continuous ledger consistency to ensure secure and reliable customer experiences. By streamlining these critical financial validations, cliQTest helps organizations minimize operational vulnerabilities, accelerate go-to-market cycles, and enforce strict regulatory compliance."
    ],
    benefits: [
      'Secure transaction workflow validation',
      'OTP and biometric automation',
      'Real-time API and backend testing',
      'Faster compliance-focused regression cycles',
      'Improved financial system reliability'
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    theme: "green",
    desc: [
      "Healthcare applications require high accuracy, reliability, compliance, and uninterrupted operational workflows across patient-facing and backend systems. cliQTest enables healthcare organizations to automate critical workflows, validate integrations, and improve quality assurance across digital healthcare ecosystems.",
      "The platform supports centralized testing, secure execution environments, traceable workflows, AI-powered automation, and scalable validation capabilities that improve operational efficiency while maintaining testing consistency and governance.",
      "cliQTest helps healthcare organizations reduce manual effort, improve system reliability, and deliver secure and seamless digital healthcare experiences."
    ],
    benefits: [
      'Reliable healthcare workflow validation',
      'Improved traceability and governance',
      'Secure testing environments',
      'Scalable quality engineering practices',
      'Enhanced operational efficiency'
    ]
  },
  {
    id: "retail",
    name: "Retail",
    icon: Tags,
    theme: "purple",
    desc: [
      "Retail businesses operate across fast-moving digital ecosystems where user experience, performance, and cross-platform consistency directly impact revenue and customer satisfaction. cliQTest enables retailers to automate end-to-end shopping journeys, payment flows, inventory systems, and customer engagement workflows across web and mobile platforms.",
      "The platform supports cross-browser testing, real-device validation, API testing, and AI-powered automation that help retailers ensure smooth customer experiences during high-demand business cycles. cliQTest enables retailers to improve release speed, reduce customer-facing defects, and deliver seamless omnichannel digital experiences."
    ],
    benefits: [
      'Omnichannel customer journey validation',
      'Cross-platform retail application testing',
      'Faster release cycles',
      'Improved user experience consistency',
      'Reduced operational risks'
    ]
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    icon: CreditCard,
    theme: "green",
    desc: [
      "E-Commerce platforms require stable, scalable, and high-performing digital experiences across diverse customer journeys, payment systems, and transactional workflows. cliQTest enables organizations to validate complete e-commerce ecosystems including product discovery, cart management, checkout, payment processing, and order fulfillment.",
      "The platform supports AI-driven automation, real-device testing, API validation, cross-browser execution, and distributed regression testing that ensure consistent shopping experiences across devices and environments. cliQTest helps e-commerce organizations improve platform reliability, accelerate feature releases, and maintain customer trust in highly competitive digital marketplaces."
    ],
    benefits: [
      'End-to-end e-commerce workflow validation',
      'Cross-browser and mobile testing',
      'Reliable payment and checkout validation',
      'Faster regression testing',
      'Improved customer experience quality'
    ]
  },
  {
    id: "telecom",
    name: "Telecom",
    icon: Wifi,
    theme: "purple",
    desc: [
      "Telecom ecosystems involve highly interconnected systems, real-time workflows, customer onboarding, service provisioning, billing platforms, and multi-channel digital interactions. cliQTest enables telecom organizations to automate and validate complex workflows across web, mobile, API, and backend systems within a unified quality engineering platform.",
      "The platform supports large-scale regression testing, real-device validation, AI-powered automation, distributed execution, and centralized reporting that improve testing efficiency and operational reliability across telecom environments.",
      "cliQTest helps telecom providers accelerate service delivery, improve customer experience consistency, and reduce risks across mission-critical digital operations."
    ],
    benefits: [
      'Large-scale workflow automation',
      'Cross-system integration validation',
      'Real-device and API testing',
      'Faster release and regression cycles',
      'Improved operational stability'
    ]
  },
  { 
    id: "banking", 
    name: "Banking", 
    icon: Landmark, 
    theme: "green",
    desc: [
      "Banking ecosystems require highly reliable, secure, and scalable testing across core banking platforms, mobile applications, APIs, payment systems, and omnichannel customer journeys. cliQTest enables end-to-end automation of critical banking workflows including customer onboarding, account management, loan origination, fund transfers, transaction validation, and branch operations across interconnected systems.",
      "The platform facilitates rigorous checks of identity verification modules, core banking endpoints, and complex multi-channel user journeys to maintain operational integrity and compliance. By orchestrating large-scale regression cycles, cliQTest empowers financial institutions to bolster system resilience, mitigate risks, and confidently drive their digital transformation."
    ],
    benefits: [
      "End-to-end core banking workflow validation",
      "OTP and authentication automation",
      "Real-time API and backend testing",
      "Omnichannel banking journey validation",
      "Improved compliance and operational reliability"
    ]
  },
  { 
    id: "insurance", 
    name: "Insurance", 
    icon: ShieldCheck, 
    theme: "purple",
    desc: [
      "Insurance platforms involve highly complex workflows across underwriting, policy issuance, claims processing, renewals, cancellations, refunds, and customer servicing operations. cliQTest enables intelligent automation and validation of multi-stage insurance workflows across web, mobile, APIs, and interconnected backend systems.",
      "The platform supports CAPTCHA handling, financial validations, reusable automation components, API integrations, cross-platform execution, and AI-powered automation stability to ensure accurate validation of business-critical insurance processes. By streamlining insurance workflow testing and improving execution consistency, cliQTest helps organizations reduce manual effort, improve policy lifecycle reliability, and strengthen compliance across insurance ecosystems."
    ],
    benefits: [
      "End-to-end policy lifecycle automation",
      "CAPTCHA and secure workflow handling",
      "Reusable and scalable test automation",
      "Cross-platform insurance workflow validation",
      "Improved process reliability and compliance"
    ]
  },
  { 
    id: "capital-markets", 
    name: "Capital Markets", 
    icon: Landmark, 
    theme: "green",
    desc: [
      "Capital market systems require precise validation of high-volume trading workflows, portfolio operations, financial calculations, and real-time transaction processing across complex financial ecosystems. cliQTest enables intelligent automation and data-driven validation for trading platforms, investment systems, portfolio management workflows, and reporting engines.",
      "The platform supports scenario-based testing, API validation, real-time data synchronization checks, AI-assisted automation, and audit-ready reporting to ensure accuracy across P&L calculations, NAV processing, margin validations, and trade execution workflows. By improving testing precision and operational visibility, cliQTest helps organizations reduce financial risks and maintain confidence in mission-critical investment systems."
    ],
    benefits: [
      "Trading and portfolio workflow validation",
      "Real-time financial data consistency checks",
      "Scenario-based automation testing",
      "Audit-ready reporting and traceability",
      "Improved accuracy in financial operations"
    ]
  },
  { 
    id: "payments-&-remittance", 
    name: "Payments & Remittance", 
    icon: CreditCard, 
    theme: "purple",
    desc: [
      "Payment and remittance platforms require secure, real-time validation of transaction flows, payment gateways, beneficiary management, authentication mechanisms, and cross-border financial operations. cliQTest enables end-to-end automation of complex payment journeys across mobile and web ecosystems while ensuring transaction consistency and operational reliability.",
      "The platform accelerates the testing of complex clearance protocols, digital wallet authentication, and cross-border settlement logic to guarantee complete remittance lifecycle integrity. By safeguarding critical transaction workflows from execution failures, cliQTest helps organizations assure uninterrupted service, limit exposure, and expedite feature delivery in the payment sector."
    ],
    benefits: [
      "End-to-end remittance workflow validation",
      "OTP and PIN authentication automation",
      "Payment gateway and API testing",
      "Real-device mobile payment validation",
      "Improved transaction reliability and stability"
    ]
  },
  { 
    id: "wealth-management", 
    name: "Wealth Management", 
    icon: Landmark, 
    theme: "green",
    desc: [
      "Wealth management and investment platforms require reliable validation of portfolio management, SIP operations, investment transactions, redemption workflows, and customer financial journeys across digital ecosystems. cliQTest enables scalable automation of mutual fund operations, investment dashboards, transaction processing, and customer engagement workflows with improved visibility and execution consistency.",
      "The platform supports data-driven testing, real-time financial validation, cross-device execution, dynamic workflow testing, and AI-powered automation to ensure accurate handling of investment scenarios and business logic changes. By streamlining testing operations and improving automation scalability, cliQTest helps wealth management organizations deliver secure and seamless customer investment experiences."
    ],
    benefits: [
      "Investment and portfolio workflow validation",
      "Data-driven financial testing",
      "Cross-device investment platform testing",
      "Real-time dashboard and transaction validation",
      "Improved customer experience reliability"
    ]
  },
  { 
    id: "enterprise-crm", 
    name: "Enterprise CRM", 
    icon: Store, 
    theme: "purple",
    desc: [
      "Enterprise CRM platforms involve complex business workflows, multi-level approvals, document management, financial validations, and role-based operational processes across distributed enterprise environments. cliQTest enables intelligent automation of CRM workflows while ensuring process consistency, execution reliability, and operational transparency.",
      "The platform supports role-based automation, reusable test workflows, centralized reporting, workflow orchestration, and compliance-focused validation to streamline testing across interconnected enterprise systems. By improving testing efficiency and reducing manual intervention, cliQTest helps enterprises strengthen operational governance and improve workflow continuity across CRM ecosystems."
    ],
    benefits: [
      "Multi-level workflow automation",
      "Role-based validation and execution",
      "Document and financial process testing",
      "Centralized reporting and traceability",
      "Improved enterprise workflow reliability"
    ]
  },
  { 
    id: "transportation-&-mobility", 
    name: "Transportation & Mobility", 
    icon: RadioTower, 
    theme: "green",
    desc: [
      "Transportation and mobility platforms require seamless validation of booking systems, payment workflows, reservation processes, approvals, and cross-platform customer interactions across interconnected applications. cliQTest enables unified automation of transportation workflows spanning web, mobile, APIs, and backend systems while ensuring reliable execution across complex operational ecosystems.",
      "The platform addresses the unique challenges of mobility apps by seamlessly evaluating real-time location services, intricate ticketing logic, and rapid cross-platform UI interactions to bolster customer experience consistency. By conquering these demanding mobility use cases, cliQTest enables organizations to optimize routing dependability and scale their transportation services with confidence."
    ],
    benefits: [
      "End-to-end booking and reservation validation",
      "Flutter and mobile application testing",
      "OTP and CAPTCHA workflow automation",
      "Cross-platform transportation testing",
      "Improved operational efficiency and reliability"
    ]
  },
  { 
    id: "railway-&-reservation-systems", 
    name: "Railway & Reservation Systems", 
    icon: CheckCircle2, 
    theme: "purple",
    desc: [
      "Railway reservation systems require highly accurate API validation, backend synchronization, and environment consistency across large-scale reservation, timetable, fare enquiry, and ticketing services. cliQTest enables structured multi-environment testing and automated response validation across complex railway and transportation APIs.",
      "The platform supports field-level response comparison, automated mismatch detection, environment-based execution workflows, and centralized reporting to ensure accurate migration validation and backend reliability across reservation ecosystems. By improving data consistency and reducing release risks, cliQTest helps railway platforms maintain operational stability and seamless customer experiences."
    ],
    benefits: [
      "Multi-environment API validation",
      "Field-level response comparison",
      "Automated mismatch detection",
      "Centralized execution reporting",
      "Improved backend reliability and accuracy"
    ]
  },
  { 
    id: "financial-services", 
    name: "Financial Services", 
    icon: Landmark, 
    theme: "green",
    desc: [
      "Financial service organizations require secure, scalable, and highly reliable validation across customer onboarding, lending, leasing, transaction processing, compliance operations, and digital customer engagement platforms. cliQTest enables intelligent automation of complex financial workflows across web, mobile, APIs, and backend systems.",
      "The platform streamlines the validation of credit assessment models, intricate leasing agreements, and secure onboarding procedures to maintain accurate execution across distributed financial hubs. By enhancing testing visibility and scaling governance seamlessly, cliQTest helps organizations fast-track their financial innovations without compromising client trust."
    ],
    benefits: [
      "End-to-end financial workflow automation",
      "OTP and biometric validation",
      "AI-driven automation capabilities",
      "Cross-system and API testing",
      "Improved compliance and release reliability"
    ]
  },
  { 
    id: "public-sector-&-government", 
    name: "Public Sector & Government", 
    icon: ShieldCheck, 
    theme: "purple",
    desc: [
      "Government and public sector platforms require reliable validation of citizen services, workflow approvals, digital documentation, and large-scale public-facing applications while ensuring governance, transparency, and operational continuity. cliQTest enables centralized automation and quality validation across complex public sector workflows and digital service ecosystems.",
      "The platform supports secure workflow automation, role-based execution, cross-platform validation, audit-ready reporting, and scalable testing operations that improve service reliability and operational efficiency. By modernizing testing practices and streamlining workflow validation, cliQTest helps government organizations improve digital service delivery and maintain compliance across critical public systems."
    ],
    benefits: [
      "Citizen service workflow validation",
      "Secure and scalable testing operations",
      "Role-based execution management",
      "Audit-ready reporting and traceability",
      "Improved operational transparency and efficiency"
    ]
  },
  { 
    id: "logistics-&-supply-chain", 
    name: "Logistics & Supply Chain", 
    icon: Store, 
    theme: "green",
    desc: [
      "Logistics and supply chain ecosystems require reliable validation of shipment tracking, inventory management, warehouse operations, transportation coordination, and order fulfillment workflows across interconnected enterprise systems. cliQTest enables intelligent automation and end-to-end validation across supply chain platforms to ensure operational continuity and process accuracy.",
      "The platform supports API testing, mobile execution, real-time workflow validation, centralized reporting, and cross-platform automation to streamline logistics operations and improve execution reliability. By accelerating testing cycles and reducing operational failures, cliQTest helps logistics organizations optimize supply chain efficiency and deliver seamless customer experiences."
    ],
    benefits: [
      "End-to-end logistics workflow validation",
      "Real-time shipment and inventory testing",
      "API and mobile platform validation",
      "Centralized execution visibility",
      "Improved supply chain operational efficiency"
    ]
  }
];

export default industries;
