import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Case Studies | Consiono Consulting",
  description: "Explore our AI implementation success stories across hospitality, startups, and wealth management sectors."
};

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
    solution: "We implemented a comprehensive AI solution that analyzed historical booking patterns, competitive pricing, market demand signals, and even local events to dynamically adjust room rates and inventory allocation. The system continuously learns and adapts to new patterns, ensuring pricing remains optimal as market conditions change.",
    image: "/case-study-hotel.jpg",
    logoImage: "/logo-hotel.png",
    clientName: "LuxuryStay International",
    featured: true
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
    solution: "We developed an intelligent document processing system using computer vision and natural language processing to automate the extraction, verification, and analysis of loan applications and supporting documents. The solution integrated seamlessly with their existing systems and included an exception handling workflow for cases requiring human review.",
    image: "/case-study-startup.jpg",
    logoImage: "/logo-startup.png",
    clientName: "QuickCapital",
    featured: true
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
    solution: "We built a sophisticated AI risk assessment platform that analyzed thousands of market variables, alternative data sources, and macroeconomic indicators in real-time. The system used deep learning to identify subtle correlations and provided portfolio managers with clear, actionable insights through an intuitive dashboard.",
    image: "/case-study-investment.jpg",
    logoImage: "/logo-investment.png",
    clientName: "Meridian Capital Partners",
    featured: true
  },
  {
    id: "boutique-hotel-guest-experience",
    title: "Boutique Hotel Chain Guest Experience Transformation",
    summary: "How AI-powered personalization drove a 45% increase in guest satisfaction and 27% increase in repeat bookings.",
    industry: "Hospitality",
    results: [
      "45% increase in guest satisfaction scores",
      "27% increase in repeat bookings",
      "38% growth in premium service upsells"
    ],
    description: "A collection of luxury boutique hotels was struggling to deliver consistently personalized experiences across their properties. Their legacy systems contained valuable guest preference data but existed in silos, making it impossible to create truly personalized stays.",
    solution: "We developed an AI-driven guest experience platform that unified data across all touchpoints and properties, creating comprehensive guest profiles with preferences and habits. The system generates personalized recommendations for room features, amenities, dining options, and activities, which are delivered to staff through a mobile app.",
    image: "/case-study-boutique.jpg",
    logoImage: "/logo-boutique.png",
    clientName: "Signature Collection Hotels",
    featured: false
  },
  {
    id: "tech-startup-customer-acquisition",
    title: "Tech Startup Customer Acquisition Optimization",
    summary: "How our AI marketing solution helped a B2B SaaS startup reduce customer acquisition costs by 52% while increasing conversion rates.",
    industry: "Startup",
    results: [
      "52% reduction in customer acquisition costs",
      "103% increase in conversion rates",
      "215% increase in marketing ROI"
    ],
    description: "A growing B2B SaaS startup had plateaued in its growth, with rising customer acquisition costs threatening profitability. Their marketing team was running countless campaigns across multiple channels without clear visibility into what was truly driving conversions.",
    solution: "We implemented a comprehensive AI marketing analytics platform that tracked the entire customer journey across all touchpoints. The system identified the most effective channels, messages, and sequences for different customer segments, and automatically optimized budget allocation in real-time based on performance.",
    image: "/case-study-saas.jpg",
    logoImage: "/logo-saas.png",
    clientName: "CloudFlow Analytics",
    featured: false
  },
  {
    id: "wealth-advisor-client-management",
    title: "Wealth Advisory Firm Client Management Automation",
    summary: "How AI helped a wealth advisory firm increase advisor capacity by 40% while improving client satisfaction.",
    industry: "Wealth Management",
    results: [
      "40% increase in client capacity per advisor",
      "62% reduction in administrative tasks",
      "35% improvement in client retention rates"
    ],
    description: "A mid-sized wealth advisory firm with $5 billion under management was struggling with advisor workload and inconsistent client communications. Advisors were spending too much time on administrative tasks and routine communications, limiting their capacity to provide high-value advice.",
    solution: "We developed an AI-powered client management system that automated routine communications, report generation, and administrative tasks. The solution includes an intelligent scheduling system that optimizes advisor time allocation based on client needs and value, and a natural language generation system that creates personalized client communications.",
    image: "/case-study-wealth.jpg",
    logoImage: "/logo-wealth.png",
    clientName: "Fortitude Wealth Advisors",
    featured: false
  }
];

export default function CaseStudiesPage() {
  // Group case studies by industry for the filters
  const industries = [...new Set(caseStudies.map(study => study.industry))];

  // Get featured case studies for the top section
  const featuredStudies = caseStudies.filter(study => study.featured);

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

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Success Stories
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              Explore how we've helped leading organizations transform their operations, enhance customer experiences, and drive growth through tailored AI solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Featured Case Studies Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Featured Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover how our AI solutions have delivered exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <div key={study.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-600/70 flex items-center justify-center text-white">
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.summary}</p>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Results:</h4>
                  <ul className="space-y-2 mb-4">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center justify-center w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              All Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Filter by industry to find the most relevant success stories for your business.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                All Industries
              </button>
              {industries.map((industry) => (
                <button 
                  key={industry}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{study.summary}</p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Results:</h4>
                      <ul className="space-y-1 mb-4">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="ml-2 text-gray-600 dark:text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
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
              Ready to Write Your Own Success Story?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Schedule a consultation to discuss how our tailored AI solutions can help your business achieve similar results.
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