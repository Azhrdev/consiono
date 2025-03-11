import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Our services data
// In a real application, this would likely come from a CMS or API
const services = [
  {
    id: "hospitality",
    title: "AI for Hospitality",
    subtitle: "Transform Guest Experiences & Optimize Operations",
    description: "Our specialized AI solutions help hotel chains leverage data to enhance guest experiences, optimize operations, and maximize revenue.",
    longDescription: "The hospitality industry sits on a goldmine of data that, when properly harnessed, can transform guest experiences and operational efficiency. Consiono Consulting helps leading hotel chains implement cutting-edge AI solutions that deliver personalized guest experiences, optimize pricing and inventory, and streamline operations.\n\nFrom the moment a guest searches for accommodations to long after they check out, our AI solutions help you understand preferences, anticipate needs, and create loyal brand advocates while maximizing revenue and minimizing costs.",
    icon: (
      <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    features: [
      {
        title: "Dynamic Pricing Optimization",
        description: "Our AI-driven pricing systems analyze market conditions, competitor rates, historical patterns, and real-time demand signals to continuously adjust room rates for maximum revenue.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      },
      {
        title: "Personalized Guest Experiences",
        description: "Our systems unify guest data across all touchpoints to create comprehensive profiles, enabling truly personalized experiences from booking to post-stay engagement.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        )
      },
      {
        title: "Intelligent Inventory Management",
        description: "Our AI solutions optimize room inventory allocation across distribution channels to maximize occupancy and average daily rate.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
        )
      },
      {
        title: "Predictive Maintenance",
        description: "Our systems analyze IoT sensor data to predict equipment failures before they happen, reducing maintenance costs and guest disruptions.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        )
      },
      {
        title: "Intelligent Energy Management",
        description: "Our AI solutions optimize HVAC and other energy systems in real-time based on occupancy, weather, and guest preferences, reducing energy costs while maintaining comfort.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        )
      },
      {
        title: "Voice-Enabled Guest Services",
        description: "Our AI-powered voice assistants provide seamless, natural interaction for room service, concierge requests, and in-room controls.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>
        )
      }
    ],
    benefits: [
      "Up to 32% increase in revenue per available room",
      "20-25% reduction in operational costs",
      "15-20% improvement in guest satisfaction scores",
      "40% reduction in energy consumption",
      "60% decrease in maintenance emergencies"
    ],
    process: [
      {
        title: "Assessment",
        description: "We analyze your current systems, data, and operational challenges to identify AI opportunities."
      },
      {
        title: "Strategy Development",
        description: "We create a tailored AI roadmap aligned with your business goals and guest experience vision."
      },
      {
        title: "Solution Design",
        description: "Our experts design custom AI solutions that integrate with your existing systems."
      },
      {
        title: "Implementation",
        description: "We deploy solutions in phases to minimize disruption and validate results."
      },
      {
        title: "Training & Support",
        description: "We provide comprehensive training and ongoing support to ensure lasting success."
      }
    ],
    caseStudies: [
      {
        title: "Global Hotel Chain Revenue Optimization",
        description: "How we helped a leading hotel chain increase revenue by 32% with AI-driven pricing and inventory management.",
        id: "global-hotel-revenue-optimization"
      },
      {
        title: "Boutique Hotel Chain Guest Experience Transformation",
        description: "How AI-powered personalization drove a 45% increase in guest satisfaction and 27% increase in repeat bookings.",
        id: "boutique-hotel-guest-experience"
      }
    ],
    faq: [
      {
        question: "How long does it typically take to implement an AI solution for a hotel chain?",
        answer: "Implementation timelines vary based on the scope and complexity of the solution. A typical phased rollout for a mid-sized hotel chain takes 3-6 months from initial assessment to full deployment across properties. We often begin with pilot implementations to validate results before scaling."
      },
      {
        question: "Do we need to replace our existing property management system?",
        answer: "No. Our solutions are designed to integrate with your existing PMS and other systems. We have experience integrating with all major hospitality technology platforms and can build custom connectors when needed."
      },
      {
        question: "How do you ensure guest privacy with AI systems?",
        answer: "Privacy is a top priority in all our implementations. We design systems with privacy by design principles, ensure GDPR and CCPA compliance, implement robust data protection measures, and provide transparency to guests about data usage."
      },
      {
        question: "What kind of ROI can we expect?",
        answer: "While results vary, our hospitality clients typically see ROI within 6-12 months of implementation. Revenue optimization solutions often deliver the fastest returns, with 20-30% increases in RevPAR being common. Operational efficiency solutions typically reduce costs by 15-25%."
      }
    ]
  },
  {
    id: "startups",
    title: "AI for Startups",
    subtitle: "Scale Efficiently & Create Competitive Advantage",
    description: "Custom AI solutions that help startups automate processes, enhance decision-making, and create sustainable competitive advantages.",
    longDescription: "Startups face unique challenges: the need to scale rapidly, operate efficiently with limited resources, and create sustainable competitive advantages. Consiono Consulting helps innovative startups leverage AI to address these challenges head-on.\n\nOur solutions enable startups to automate routine processes, enhance decision-making with data-driven insights, and create truly differentiated products and services powered by AI. We understand the startup mindset and design solutions that deliver immediate value while laying the foundation for future growth.",
    icon: (
      <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    features: [
      {
        title: "Scalable Operational Workflows",
        description: "Our AI solutions automate routine processes and workflows, allowing your team to focus on innovation and growth rather than repetitive tasks.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        )
      },
      {
        title: "Intelligent Customer Service",
        description: "Our AI-powered customer service solutions provide instant responses to common questions, route complex issues to human agents, and continuously learn from interactions.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        )
      },
      {
        title: "AI-Enhanced Product Development",
        description: "We help you integrate AI capabilities into your products and services, creating differentiated offerings that provide unique value to your customers.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
        )
      },
      {
        title: "Market Intelligence & Competitor Analysis",
        description: "Our AI systems analyze market trends, customer feedback, and competitor activities to provide actionable insights for strategic decision-making.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
          </svg>
        )
      },
      {
        title: "Customer Acquisition Optimization",
        description: "Our AI marketing solutions optimize customer acquisition channels, messaging, and targeting to reduce acquisition costs and improve conversion rates.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
          </svg>
        )
      },
      {
        title: "Predictive Financial Modeling",
        description: "Our financial forecasting models help you anticipate cash flow needs, optimize resource allocation, and make data-driven financial decisions.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        )
      }
    ],
    benefits: [
      "50-70% reduction in time spent on routine tasks",
      "30-50% decrease in customer acquisition costs",
      "2-3x faster response to market changes",
      "25-40% improvement in customer retention",
      "Ability to scale operations without proportional headcount growth"
    ],
    process: [
      {
        title: "Discovery",
        description: "We conduct a thorough assessment of your current operations, challenges, and growth objectives."
      },
      {
        title: "Opportunity Identification",
        description: "We identify high-impact AI opportunities aligned with your business model and growth stage."
      },
      {
        title: "Solution Design",
        description: "Our experts design AI solutions tailored to your specific needs and technology stack."
      },
      {
        title: "Agile Implementation",
        description: "We use agile methodologies to deliver value quickly and iterate based on feedback."
      },
      {
        title: "Knowledge Transfer",
        description: "We ensure your team has the skills and understanding to maintain and evolve the solutions."
      }
    ],
    caseStudies: [
      {
        title: "FinTech Startup Scaling Operations",
        description: "How our AI automation solutions helped a fast-growing FinTech startup scale operations without proportional headcount growth.",
        id: "fintech-startup-scaling"
      },
      {
        title: "Tech Startup Customer Acquisition Optimization",
        description: "How our AI marketing solution helped a B2B SaaS startup reduce customer acquisition costs by 52% while increasing conversion rates.",
        id: "tech-startup-customer-acquisition"
      }
    ],
    faq: [
      {
        question: "Is my startup too early stage for AI implementation?",
        answer: "It's never too early to start thinking about how AI can support your growth. While some solutions require substantial historical data, many AI implementations can be valuable even at early stages. We tailor our approach based on your growth stage, focusing on solutions that deliver immediate value while laying the foundation for more advanced capabilities as you scale."
      },
      {
        question: "How much does it cost to implement AI solutions for a startup?",
        answer: "We understand that startups have budget constraints. That's why we offer flexible engagement models and phased implementation approaches that align with your resources. Initial implementations can start as low as $25,000, with options to scale as you grow. We also offer special pricing for venture-backed startups."
      },
      {
        question: "Do we need to hire a data science team to maintain AI solutions?",
        answer: "Not necessarily. We design our solutions with maintainability in mind, providing user-friendly interfaces and comprehensive documentation. For many solutions, your existing technical team can handle day-to-day management. For more complex solutions, we offer ongoing support and maintenance packages."
      },
      {
        question: "How can AI help us compete with larger, more established companies?",
        answer: "AI can be a significant equalizer, allowing startups to deliver personalized experiences, optimize operations, and make data-driven decisions at a scale previously only possible for large enterprises. By strategically implementing AI in areas that directly impact customer experience and operational efficiency, startups can outmaneuver larger competitors despite resource disadvantages."
      }
    ]
  },
  {
    id: "wealth-management",
    title: "AI for Wealth Management",
    subtitle: "Transform Investment Strategies & Client Relationships",
    description: "Advanced AI solutions that transform investment strategies, risk assessment, and client relationships for wealth management firms.",
    longDescription: "The wealth management industry is being transformed by artificial intelligence, creating both challenges and opportunities for firms. Consiono Consulting helps wealth managers leverage AI to enhance investment strategies, optimize risk assessment, and create deeper client relationships.\n\nOur solutions enable you to process vast amounts of traditional and alternative data, identify subtle patterns and correlations that humans might miss, and generate actionable insights for portfolio managers and advisors. The result is better investment outcomes, more efficient operations, and truly personalized client experiences.",
    icon: (
      <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
    features: [
      {
        title: "AI-Driven Market Analysis",
        description: "Our systems analyze thousands of traditional and alternative data sources to identify market opportunities and risks beyond the capabilities of traditional analysis.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
          </svg>
        )
      },
      {
        title: "Advanced Risk Modeling",
        description: "Our AI-powered risk assessment platforms use deep learning to model complex, non-linear risks and provide clear, actionable insights to portfolio managers.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        )
      },
      {
        title: "Personalized Portfolio Construction",
        description: "Our solutions enable truly personalized portfolio construction that balances client goals, risk tolerance, and preferences with market opportunities.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        )
      },
      {
        title: "Client Insights & Next Best Action",
        description: "Our systems analyze client behavior, preferences, and life events to provide advisors with actionable insights and recommendations for client engagement.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        )
      },
      {
        title: "Automated Regulatory Compliance",
        description: "Our compliance solutions automate documentation, monitoring, and reporting processes to ensure regulatory compliance while reducing administrative burden.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        )
      },
      {
        title: "Intelligent Client Communications",
        description: "Our communications systems generate personalized, compliant client communications and reports that explain complex concepts in accessible language.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        )
      }
    ],
    benefits: [
      "20-40% improvement in investment prediction accuracy",
      "15-30% reduction in operational costs",
      "25-35% increase in advisor productivity",
      "40% decrease in regulatory compliance effort",
      "Significant competitive advantage through data-driven insights"
    ],
    process: [
      {
        title: "Assessment & Strategy",
        description: "We evaluate your current systems, data assets, and business objectives to develop a strategic AI roadmap."
      },
      {
        title: "Data Integration & Enhancement",
        description: "We integrate traditional and alternative data sources and implement data quality processes to support AI initiatives."
      },
      {
        title: "Custom Model Development",
        description: "Our quant team develops models tailored to your investment philosophy and client base."
      },
      {
        title: "Platform Implementation",
        description: "We implement user-friendly tools and dashboards that present AI insights in actionable formats."
      },
      {
        title: "Validation & Deployment",
        description: "We validate results against historical data and deploy solutions with comprehensive training."
      }
    ],
    caseStudies: [
      {
        title: "Investment Fund Risk Assessment AI",
        description: "How we helped a major investment fund improve prediction accuracy and reduce risk exposure through advanced AI analytics.",
        id: "investment-fund-risk-assessment"
      },
      {
        title: "Wealth Advisory Firm Client Management Automation",
        description: "How AI helped a wealth advisory firm increase advisor capacity by 40% while improving client satisfaction.",
        id: "wealth-advisor-client-management"
      }
    ],
    faq: [
      {
        question: "How do you ensure the explainability of AI models for investment decisions?",
        answer: "Explainability is crucial in wealth management. We implement proprietary explainable AI techniques that translate complex model outputs into clear narratives that explain the factors driving predictions. This is essential for both regulatory compliance and building trust with clients and advisors."
      },
      {
        question: "How do you handle data security and client privacy?",
        answer: "Security and privacy are paramount in all our implementations. We use industry-leading encryption, access controls, and anonymization techniques. All our solutions are designed to comply with relevant regulations including GDPR, CCPA, and industry-specific requirements. We can also deploy solutions within your existing security perimeter."
      },
      {
        question: "Can AI solutions integrate with our existing portfolio management systems?",
        answer: "Yes. We have experience integrating with all major wealth management platforms and can build custom connectors when needed. Our solutions are designed to augment your existing systems rather than replace them, creating a seamless workflow for your team."
      },
      {
        question: "How do you measure the ROI of AI implementations in wealth management?",
        answer: "We establish clear KPIs at the beginning of each engagement, aligned with your business objectives. These typically include improvements in investment performance, risk metrics, advisor productivity, client satisfaction, and operational efficiency. We provide regular reporting on these metrics throughout the implementation."
      }
    ]
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    subtitle: "Transform Data into Strategic Advantage",
    description: "Custom predictive analytics solutions that transform your data into actionable insights and future forecasts for strategic advantage.",
    longDescription: "In today's data-rich environment, the ability to extract actionable insights and accurately forecast future trends is a critical competitive advantage. Consiono Consulting helps organizations across industries implement sophisticated predictive analytics solutions that go beyond basic reporting to deliver true strategic intelligence.\n\nOur custom predictive models are designed to address your specific business questions, leveraging advanced machine learning techniques to identify patterns, correlations, and trends that would be impossible to detect through traditional analysis. We deliver these insights through intuitive dashboards that enable informed decision-making at all levels of your organization.",
    icon: (
      <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
    features: [
      {
        title: "Custom Predictive Modeling",
        description: "We develop custom machine learning models tailored to your specific business questions and data environment.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        )
      },
      {
        title: "Interactive Visualization Dashboards",
        description: "Our intuitive dashboards present complex analytics in visual formats that enable quick understanding and decision-making.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
          </svg>
        )
      },
      {
        title: "Real-time Analytics Processing",
        description: "Our systems process and analyze data in real-time, providing up-to-the-minute insights for time-sensitive decisions.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      },
      {
        title: "Anomaly Detection Systems",
        description: "Our solutions identify unusual patterns and outliers that may represent opportunities or risks requiring attention.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        )
      },
      {
        title: "Forecasting & Trend Analysis",
        description: "Our predictive models forecast future trends and scenarios to support strategic planning and proactive decision-making.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        )
      },
      {
        title: "Business Intelligence Integration",
        description: "Our solutions integrate with your existing BI tools and systems to enhance their capabilities without disrupting workflows.",
        icon: (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
          </svg>
        )
      }
    ],
    benefits: [
      "30-50% improvement in forecast accuracy",
      "20-35% reduction in operational costs through optimization",
      "15-25% increase in revenue through identified opportunities",
      "40-60% faster response to market changes",
      "Data-driven culture that enhances decision quality across the organization"
    ],
    process: [
      {
        title: "Business Question Definition",
        description: "We work with you to define the specific business questions you need answered through analytics."
      },
      {
        title: "Data Assessment & Preparation",
        description: "We evaluate your data landscape, identify relevant sources, and prepare data for analysis."
      },
      {
        title: "Model Development & Validation",
        description: "Our data scientists develop and validate custom predictive models tailored to your needs."
      },
      {
        title: "Dashboard Creation",
        description: "We design intuitive visualization dashboards that present insights in actionable formats."
      },
      {
        title: "Deployment & Knowledge Transfer",
        description: "We implement the solution and ensure your team can effectively use and maintain it."
      }
    ],
    caseStudies: [
      {
        title: "Global Hotel Chain Revenue Optimization",
        description: "How we helped a leading hotel chain increase revenue by 32% with AI-driven pricing and inventory management.",
        id: "global-hotel-revenue-optimization"
      },
      {
        title: "Investment Fund Risk Assessment AI",
        description: "How we helped a major investment fund improve prediction accuracy and reduce risk exposure through advanced AI analytics.",
        id: "investment-fund-risk-assessment"
      }
    ],
    faq: [
      {
        question: "What types of data can be used for predictive analytics?",
        answer: "Virtually any type of structured or unstructured data can be valuable for predictive analytics. This includes internal transaction data, customer information, operational metrics, external market data, social media, text documents, images, and more. Our approach begins with identifying what data will be most valuable for your specific business questions."
      },
      {
        question: "How much historical data is needed for accurate predictions?",
        answer: "The amount of historical data needed varies depending on the specific use case, the complexity of the patterns being analyzed, and the frequency of the data. Generally, we recommend at least 1-2 years of historical data for most business applications, but some models can work effectively with less. We can perform an assessment to determine if your available data is sufficient."
      },
      {
        question: "How do you ensure the quality and accuracy of predictive models?",
        answer: "We implement a rigorous model development and validation process that includes: 1) Thorough data quality assessment and cleaning, 2) Feature engineering to maximize predictive power, 3) Cross-validation to test model performance on unseen data, 4) Ensemble techniques to improve robustness, and 5) Continuous monitoring and recalibration to maintain accuracy over time."
      },
      {
        question: "Can predictive analytics integrate with our existing systems?",
        answer: "Yes. Our solutions are designed to integrate with your existing systems and workflow. This can include direct API integrations with your CRM, ERP, or other business systems, as well as export capabilities to feed insights into your current processes. We aim to enhance your existing technology ecosystem rather than replace it."
      }
    ]
  }
];

// This function generates metadata for the page based on the service
export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find(service => service.id === params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} | Consiono Consulting Services`,
    description: service.description
  };
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  // Find the service by ID
  const service = services.find(service => service.id === params.id);
  
  // If no service is found, return a 404
  if (!service) {
    notFound();
  }

  // Get related case studies
  const relatedCaseStudies = service.caseStudies;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar - Consistent across pages */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image 
                  src="/full_logo_2.png" 
                  alt="Consiono Consulting" 
                  width={150} 
                  height={90} 
                  priority
                />
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-8">
                  <Link href="/services" className="text-blue-600 dark:text-blue-400 px-1 py-2 text-sm font-medium border-b-2 border-blue-600 dark:border-blue-400">
                    Services
                  </Link>
                  <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    Case Studies
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    About
                  </Link>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    Insights
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="inline-flex items-center text-blue-100 hover:text-white">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Services
              </Link>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/30 rounded-lg mr-4">
                  {service.icon}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-6">
              Overview
            </h2>
            <div className="prose prose-lg prose-blue max-w-none dark:prose-invert mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 whitespace-pre-line">{service.longDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">
              Our {service.title} Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">
              Explore our comprehensive range of AI solutions for {service.id === 'hospitality' ? 'hotel chains' : service.id === 'startups' ? 'startups' : service.id === 'wealth-management' ? 'wealth managers' : 'your business'}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-6">
              Key Benefits
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-700 dark:text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">
              Our Implementation Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">
              Our proven methodology ensures successful AI implementations with measurable results.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
              
              <div className="space-y-12">
                {service.process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                    
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-white dark:bg-gray-800 rounded-xl shadow-md p-6`}>
                      <div className="flex items-center mb-2">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-lg font-bold mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">
                Success Stories
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">
                Explore how our {service.title} solutions have delivered exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedCaseStudies.map((study, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white px-6 text-center">{study.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                    >
                      Read full case study
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your {service.id === 'hospitality' ? 'Hotel Chain' : service.id === 'startups' ? 'Startup' : service.id === 'wealth-management' ? 'Wealth Management Firm' : 'Business'} with AI?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Schedule a consultation to discuss how our tailored {service.title} solutions can address your specific challenges.
            </p>
            <div className="mt-10">
              <Link 
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage for consistency */}
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">Consiono</span>
                <span className="ml-1 text-blue-600 dark:text-blue-400">Consulting</span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                AI-powered solutions for enterprise transformation.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider dark:text-gray-100">Solutions</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/services/hospitality" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Hospitality AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/startups" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Startup Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/wealth-management" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Wealth Management AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/analytics" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Predictive Analytics
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider dark:text-gray-100">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider dark:text-gray-100">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/white-papers" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      White Papers
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/webinars" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Webinars
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Consiono Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}