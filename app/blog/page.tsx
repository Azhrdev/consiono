import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog & Insights | Consiono Consulting",
  description: "Explore our latest insights, thought leadership, and educational content on AI in hospitality, startups, wealth management and more."
};

// Blog posts data
// In a real application, this would likely come from a CMS or API
const blogPosts = [
  {
    id: "ai-revolution-hospitality",
    title: "The AI Revolution in Hospitality: Beyond Chatbots and Virtual Concierges",
    summary: "How leading hotel chains are implementing sophisticated AI solutions to transform operations and guest experiences.",
    category: "Hospitality",
    author: {
      name: "Emma Williams",
      role: "Head of Hospitality Solutions",
      image: "/authors/emma-williams.jpg"
    },
    date: "March 6, 2025",
    readTime: "8 min read",
    image: "/blog/hospitality-ai.jpg",
    featured: true
  },
  {
    id: "scaling-startup-operations",
    title: "Scaling Startup Operations Without Scaling Headcount: The AI Advantage",
    summary: "How AI automation is helping startups handle 3x the workload without proportional team growth.",
    category: "Startups",
    author: {
      name: "James Park",
      role: "Head of Startup Solutions",
      image: "/authors/james-park.jpg"
    },
    date: "February 28, 2025",
    readTime: "6 min read",
    image: "/blog/startup-scaling.jpg",
    featured: true
  },
  {
    id: "alternative-data-wealth-management",
    title: "Beyond Market Data: How Alternative Data is Transforming Wealth Management",
    summary: "How wealth managers are using AI to extract insights from non-traditional data sources for investment advantage.",
    category: "Wealth Management",
    author: {
      name: "Dr. Robert Turner",
      role: "Head of Financial AI",
      image: "/authors/robert-turner.jpg"
    },
    date: "February 15, 2025",
    readTime: "10 min read",
    image: "/blog/alternative-data.jpg",
    featured: true
  },
  {
    id: "personalization-hospitality",
    title: "The Science of Personalization in Hospitality",
    summary: "How AI is enabling true 1:1 personalization at scale across the entire guest journey.",
    category: "Hospitality",
    author: {
      name: "Emma Williams",
      role: "Head of Hospitality Solutions",
      image: "/authors/emma-williams.jpg"
    },
    date: "February 10, 2025",
    readTime: "7 min read",
    image: "/blog/personalization.jpg",
    featured: false
  },
  {
    id: "ai-startup-product-development",
    title: "Incorporating AI Into Your Startup's Product Development Cycle",
    summary: "A practical guide to embedding AI capabilities in your product from day one.",
    category: "Startups",
    author: {
      name: "James Park",
      role: "Head of Startup Solutions",
      image: "/authors/james-park.jpg"
    },
    date: "January 24, 2025",
    readTime: "9 min read",
    image: "/blog/product-development.jpg",
    featured: false
  },
  {
    id: "predictive-analytics-risk-management",
    title: "Predictive Analytics: The New Frontier in Risk Management",
    summary: "How predictive models are helping financial institutions identify and mitigate risks before they materialize.",
    category: "Wealth Management",
    author: {
      name: "Dr. Robert Turner",
      role: "Head of Financial AI",
      image: "/authors/robert-turner.jpg"
    },
    date: "January 18, 2025",
    readTime: "8 min read",
    image: "/blog/risk-management.jpg",
    featured: false
  },
  {
    id: "energy-optimization-hotels",
    title: "AI-Driven Energy Optimization in Hotels: The Sustainability Imperative",
    summary: "How AI is helping hotel chains reduce energy consumption while maintaining guest comfort.",
    category: "Hospitality",
    author: {
      name: "Emma Williams",
      role: "Head of Hospitality Solutions",
      image: "/authors/emma-williams.jpg"
    },
    date: "January 12, 2025",
    readTime: "6 min read",
    image: "/blog/energy-optimization.jpg",
    featured: false
  },
  {
    id: "customer-acquisition-optimization",
    title: "The AI Advantage in Customer Acquisition",
    summary: "How startups are using AI to reduce customer acquisition costs and improve conversion rates.",
    category: "Startups",
    author: {
      name: "James Park",
      role: "Head of Startup Solutions",
      image: "/authors/james-park.jpg"
    },
    date: "January 5, 2025",
    readTime: "7 min read",
    image: "/blog/customer-acquisition.jpg",
    featured: false
  },
  {
    id: "explainable-ai-finance",
    title: "Explainable AI in Finance: Building Trust in Black Box Models",
    summary: "How financial institutions are making complex AI models transparent and explainable to stakeholders.",
    category: "Wealth Management",
    author: {
      name: "Dr. Robert Turner",
      role: "Head of Financial AI",
      image: "/authors/robert-turner.jpg"
    },
    date: "December 27, 2024",
    readTime: "9 min read",
    image: "/blog/explainable-ai.jpg",
    featured: false
  }
];

export default function BlogPage() {
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Get all categories
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
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
                  <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    Case Studies
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    About
                  </Link>
                  <Link href="/blog" className="text-blue-600 dark:text-blue-400 px-1 py-2 text-sm font-medium border-b-2 border-blue-600 dark:border-blue-400">
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
              Insights & Thought Leadership
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              Expert perspectives on the latest trends and developments in AI for hospitality, startups, and wealth management.
            </p>
          </div>
        </div>
      </header>

      {/* Featured Posts Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Featured Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 m-4">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
                  <div className="flex items-center mt-auto">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                      <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                        <span>&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                  >
                    Read article
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

      {/* All Posts Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              All Articles
            </h2>
          </div>

          {/* Category Filter */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                All Categories
              </button>
              {categories.map((category) => (
                <button 
                  key={category}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 m-4">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
                  <div className="flex items-center mt-auto">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                      <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                        <span>&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                  >
                    Read article
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                1
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-white"
              >
                2
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                3
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Stay Updated with Our Newsletter
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Subscribe to receive our latest insights, case studies, and AI industry trends directly to your inbox.
            </p>
            <div className="mt-8 max-w-xl mx-auto">
              <form className="sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button 
                    type="submit" 
                    className="block w-full rounded-md bg-blue-600 py-3 px-4 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
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