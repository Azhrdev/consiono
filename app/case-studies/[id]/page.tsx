import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Our case studies data
// In a real application, this would likely come from a CMS or API
const caseStudies = [
  {
    id: "global-hotel-revenue-optimization",
    title: "Global Hotel Chain Revenue Optimization",
    summary: "How we helped a leading hotel chain increase revenue by 32% with AI-driven pricing and inventory management.",
    industry: "Hospitality",
    results: [
      "32% increase in revenue per available room",
      "24% reduction in operational costs",
      "18% improvement in guest satisfaction scores"
    ],
    description: "Our client, a global hotel chain with over 200 properties, was facing challenges with pricing optimization and inventory management across diverse markets. Traditional pricing approaches were leaving significant revenue on the table, especially during high-demand periods.",
    challenge: "The client was struggling with several key challenges:\n\n1. **Inconsistent pricing strategies** across properties leading to revenue leakage\n\n2. **Limited ability to react** to rapid market changes and demand fluctuations\n\n3. **Siloed data systems** preventing holistic analysis of booking patterns\n\n4. **Manual decision-making processes** that couldn't scale across their global portfolio",
    solution: "We implemented a comprehensive AI solution that analyzed historical booking patterns, competitive pricing, market demand signals, and even local events to dynamically adjust room rates and inventory allocation. The system continuously learns and adapts to new patterns, ensuring pricing remains optimal as market conditions change.",
    approach: [
      {
        title: "Data Integration & Cleansing",
        description: "We unified data from multiple sources including the property management system, booking channels, competitive rate tracking, and market intelligence platforms. Our data engineers built robust pipelines to clean, normalize, and prepare this data for analysis."
      },
      {
        title: "Machine Learning Model Development",
        description: "Our data scientists developed custom machine learning models to predict demand patterns, optimal price points, and inventory allocation strategies. These models incorporated both structured data (historical bookings, rates) and unstructured data (reviews, local events)."
      },
      {
        title: "Real-time Decision Engine",
        description: "We built a sophisticated decision engine that translated model outputs into actionable pricing and inventory decisions. The system operates in real-time, automatically adjusting rates and availability across all channels."
      },
      {
        title: "User-friendly Dashboard",
        description: "Revenue managers were provided with an intuitive dashboard that explained the AI's decisions and allowed for manual overrides when needed. The system also proactively alerted managers to unusual patterns or opportunities."
      },
      {
        title: "Continuous Learning Loop",
        description: "We implemented a feedback mechanism that continuously evaluated the performance of pricing decisions and fed this information back into the models, creating a virtuous cycle of improvement."
      }
    ],
    implementation: "The implementation was rolled out in phases:\n\n* **Phase 1:** Pilot program with 5 properties to validate the approach\n* **Phase 2:** Expansion to 50 properties with iterative improvements\n* **Phase 3:** Full deployment across all 200+ properties globally\n\nThroughout the process, we worked closely with the client's revenue management team, providing comprehensive training and establishing a center of excellence to ensure sustained success.",
    results_detailed: "The AI-driven revenue optimization solution delivered impressive results across key metrics:\n\n* **32% increase in RevPAR (Revenue Per Available Room)** compared to the control group\n* **24% reduction in operational costs** related to pricing and inventory management\n* **18% improvement in guest satisfaction scores** by better matching inventory with guest needs\n* **41% reduction in pricing decision time** by revenue managers\n* **$125 million estimated additional annual revenue** across the portfolio",
    testimonial: {
      quote: "The AI revenue optimization solution developed by Consiono Consulting has transformed how we approach pricing across our global portfolio. Not only have we seen substantial revenue gains, but our revenue managers can now focus on strategy rather than tactical decisions. The system's ability to adapt to changing market conditions has been especially valuable during uncertain times.",
      name: "Jennifer Thompson",
      title: "Chief Revenue Officer",
      company: "LuxuryStay International"
    },
    image: "/case-study-hotel.jpg",
    logoImage: "/logo-hotel.png",
    clientName: "LuxuryStay International",
    featured: true,
    technologies: ["Machine Learning", "Time Series Forecasting", "Natural Language Processing", "Computer Vision", "Cloud Computing"],
    timeline: "8 months from initial assessment to full deployment",
    team: "7 data scientists, 4 engineers, 3 solutions architects, 2 project managers"
  },
  {
    id: "fintech-startup-scaling",
    title: "FinTech Startup Scaling Operations",
    summary: "How our AI automation solutions helped a fast-growing FinTech startup scale operations without proportional headcount growth.",
    industry: "Startup",
    results: [
      "67% reduction in document processing time",
      "85% decrease in error rates",
      "300% increase in processing capacity with no additional staff"
    ],
    description: "A rapidly growing FinTech startup specializing in small business loans was struggling to scale its operations. As application volume tripled in just six months, their manual review processes were creating bottlenecks, increasing errors, and threatening customer satisfaction.",
    challenge: "The client was facing several critical challenges:\n\n1. **Manual document review processes** that couldn't scale with growth\n\n2. **High error rates** in data extraction and validation\n\n3. **Long processing times** leading to potential customer loss\n\n4. **Inconsistent decision-making** across different reviewers",
    solution: "We developed an intelligent document processing system using computer vision and natural language processing to automate the extraction, verification, and analysis of loan applications and supporting documents. The solution integrated seamlessly with their existing systems and included an exception handling workflow for cases requiring human review.",
    approach: [
      {
        title: "Process Assessment & Reengineering",
        description: "We conducted a thorough analysis of the existing workflow, identifying bottlenecks and opportunities for automation. We then redesigned the process to optimize for automation while maintaining necessary human oversight."
      },
      {
        title: "Custom AI Model Development",
        description: "Our team developed specialized computer vision and NLP models trained on the client's document types. These models could extract relevant information from various financial documents with high accuracy."
      },
      {
        title: "Intelligent Workflow Automation",
        description: "We built an end-to-end automation system that could route documents, extract information, verify data across sources, flag discrepancies, and make preliminary approval recommendations."
      },
      {
        title: "Exception Handling Framework",
        description: "We implemented a sophisticated exception handling system that could identify when human review was needed and route cases to the appropriate specialists with all relevant information highlighted."
      },
      {
        title: "Integration & Scaling",
        description: "The system was seamlessly integrated with the client's existing loan management platform and designed to scale horizontally as volume increased."
      }
    ],
    implementation: "The implementation followed an agile methodology:\n\n* **Sprint 1-2:** Core document processing capabilities\n* **Sprint 3-4:** Data verification and cross-validation\n* **Sprint 5-6:** Workflow automation and exception handling\n* **Sprint 7-8:** Integration, testing, and training\n\nThe system was deployed incrementally, starting with less complex document types and gradually expanding to handle all aspects of the process.",
    results_detailed: "The intelligent automation solution delivered transformative results:\n\n* **67% reduction in document processing time** from application to decision\n* **85% decrease in data extraction error rates** compared to manual processing\n* **300% increase in processing capacity** without additional headcount\n* **92% of standard applications** processed without human intervention\n* **43% improvement in customer satisfaction scores** due to faster processing\n* **$2.1 million annual cost savings** from avoided hiring and reduced errors",
    testimonial: {
      quote: "Consiono Consulting's solution has been transformative for our business. We went from drowning in paperwork to having a streamlined, mostly automated process that scales effortlessly as we grow. The accuracy of the AI system actually exceeds our human review process, and our team is now free to focus on complex cases that truly need their expertise.",
      name: "Michael Chen",
      title: "Co-Founder & COO",
      company: "QuickCapital"
    },
    image: "/case-study-startup.jpg",
    logoImage: "/logo-startup.png",
    clientName: "QuickCapital",
    featured: true,
    technologies: ["Computer Vision", "Natural Language Processing", "OCR", "Machine Learning", "Robotic Process Automation"],
    timeline: "4 months from kick-off to production deployment",
    team: "5 data scientists, 3 engineers, 2 solutions architects, 1 project manager"
  },
  {
    id: "investment-fund-risk-assessment",
    title: "Investment Fund Risk Assessment AI",
    summary: "How we helped a major investment fund improve prediction accuracy and reduce risk exposure through advanced AI analytics.",
    industry: "Wealth Management",
    results: [
      "41% improved prediction accuracy for market movements",
      "28% reduction in risk exposure",
      "$420M additional returns in first year of implementation"
    ],
    description: "A leading wealth management firm managing over $50 billion in assets needed to enhance their risk assessment capabilities amid increasing market volatility. Their existing models were failing to capture complex market patterns and emerging risk factors.",
    challenge: "The client faced several sophisticated challenges:\n\n1. **Limitations of traditional risk models** in capturing non-linear market relationships\n\n2. **Inability to process alternative data sources** at scale\n\n3. **Slow response to emerging market conditions** due to manual analysis requirements\n\n4. **Difficulty explaining risk factors** to portfolio managers and clients",
    solution: "We built a sophisticated AI risk assessment platform that analyzed thousands of market variables, alternative data sources, and macroeconomic indicators in real-time. The system used deep learning to identify subtle correlations and provided portfolio managers with clear, actionable insights through an intuitive dashboard.",
    approach: [
      {
        title: "Data Sourcing & Integration",
        description: "We expanded the client's data universe by integrating traditional financial data with alternative sources including news sentiment, social media trends, satellite imagery, and supply chain disruptions."
      },
      {
        title: "Advanced Model Development",
        description: "Our quantitative team developed a suite of deep learning models specializing in different aspects of risk: market risk, credit risk, liquidity risk, and systemic risk. These models were designed to capture complex, non-linear relationships."
      },
      {
        title: "Real-time Processing Framework",
        description: "We implemented a high-performance computing infrastructure capable of processing and analyzing data in real-time, providing up-to-the-minute risk assessments."
      },
      {
        title: "Explainable AI Layer",
        description: "We built a proprietary explainability layer that translated complex model outputs into clear, understandable risk narratives and visualizations for portfolio managers."
      },
      {
        title: "Scenario Simulation Engine",
        description: "The platform included a powerful simulation engine that allowed managers to stress-test portfolios against custom scenarios and historical crisis patterns."
      }
    ],
    implementation: "The implementation was structured as follows:\n\n* **Phase 1:** Core platform development and model training\n* **Phase 2:** Integration with existing portfolio management systems\n* **Phase 3:** User interface development and dashboard creation\n* **Phase 4:** Validation, testing, and calibration\n* **Phase 5:** Phased rollout to investment teams and training\n\nThroughout the process, we worked closely with the client's risk and investment teams to ensure the system met their specific needs and integrated with their investment philosophy.",
    results_detailed: "The AI risk assessment platform delivered exceptional results:\n\n* **41% improvement in predictive accuracy** for major market movements\n* **28% reduction in overall risk exposure** while maintaining target returns\n* **$420 million in additional returns** during the first year by avoiding key downdrafts\n* **62% faster risk assessment process** from data acquisition to decision\n* **3.2x increase in alternative data sources** incorporated into analysis\n* **94% of portfolio managers reported** improved confidence in risk assessment",
    testimonial: {
      quote: "The risk assessment platform developed by Consiono Consulting has fundamentally changed how we evaluate investment opportunities. The system's ability to process massive amounts of data and identify subtle risk patterns has given us a significant edge. Most importantly, the explainability features allow our portfolio managers to understand and trust the AI's insights, which has been crucial for adoption.",
      name: "Dr. Robert Turner",
      title: "Chief Risk Officer",
      company: "Meridian Capital Partners"
    },
    image: "/case-study-investment.jpg",
    logoImage: "/logo-investment.png",
    clientName: "Meridian Capital Partners",
    featured: true,
    technologies: ["Deep Learning", "Natural Language Processing", "Time Series Analysis", "High-Performance Computing", "Explainable AI"],
    timeline: "10 months from initial design to full implementation",
    team: "9 data scientists, 6 engineers, 4 quantitative analysts, 3 solutions architects, 2 project managers"
  }
];

// This function generates metadata for the page based on the case study
export async function generateMetadata({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies.find(study => study.id === params.id);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.'
    };
  }

  return {
    title: `${caseStudy.title} | Consiono Consulting Case Study`,
    description: caseStudy.summary
  };
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  // Find the case study by ID
  const caseStudy = caseStudies.find(study => study.id === params.id);
  
  // If no case study is found, return a 404
  if (!caseStudy) {
    notFound();
  }

  // Get related case studies from the same industry (excluding the current one)
  const relatedStudies = caseStudies
    .filter(study => study.industry === caseStudy.industry && study.id !== caseStudy.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar - Consistent across pages */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">Consiono</span>
                <span className="ml-1 text-blue-600 dark:text-blue-400">Consulting</span>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-8">
                  <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    Services
                  </Link>
                  <Link href="/case-studies" className="text-blue-600 dark:text-blue-400 px-1 py-2 text-sm font-medium border-b-2 border-blue-600 dark:border-blue-400">
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

      {/* Case Study Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-4">
              <Link href="/case-studies" className="inline-flex items-center text-blue-100 hover:text-white">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Case Studies
              </Link>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 w-fit">
                {caseStudy.industry}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {caseStudy.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {caseStudy.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Client and Results Overview */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Client</h2>
                  <p className="text-gray-600 dark:text-gray-300">{caseStudy.clientName}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Industry</h2>
                  <p className="text-gray-600 dark:text-gray-300">{caseStudy.industry}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Timeline</h2>
                  <p className="text-gray-600 dark:text-gray-300">{caseStudy.timeline}</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                      <p className="text-gray-600 dark:text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg prose-blue max-w-none dark:prose-invert mb-12">
              <h2>Overview</h2>
              <p>{caseStudy.description}</p>

              <h2>The Challenge</h2>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.challenge.replace(/\n\n/g, '<br/><br/>') }} />

              <h2>Our Solution</h2>
              <p>{caseStudy.solution}</p>

              <h2>Our Approach</h2>
              <div className="not-prose mb-8">
                <div className="space-y-4">
                  {caseStudy.approach.map((step, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2>Implementation</h2>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.implementation.replace(/\n\n/g, '<br/><br/>') }} />

              <h2>Results</h2>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.results_detailed.replace(/\n\n/g, '<br/><br/>') }} />

              <h2>Technologies Used</h2>
              <div className="not-prose mb-8">
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-16">
              <svg className="h-10 w-10 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900 dark:text-white">{caseStudy.testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{caseStudy.testimonial.title}, {caseStudy.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Related Case Studies
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Explore more success stories in {caseStudy.industry}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedStudies.map((study) => (
                <div key={study.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{study.summary}</p>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                    >
                      Read case study
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Achieve Similar Results?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Schedule a consultation to discuss how our tailored AI solutions can help your business solve similar challenges.
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