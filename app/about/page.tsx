import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Consiono Consulting",
  description: "Learn about Consiono Consulting's mission, vision, and our team of AI experts dedicated to transforming businesses through innovative AI solutions."
};

export default function AboutPage() {
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
                  <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-1 py-2 text-sm font-medium">
                    Case Studies
                  </Link>
                  <Link href="/about" className="text-blue-600 dark:text-blue-400 px-1 py-2 text-sm font-medium border-b-2 border-blue-600 dark:border-blue-400">
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
              Our Mission: Transform Business Through AI
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              We're a team of AI specialists, data scientists, and industry experts dedicated to making artificial intelligence accessible and impactful for organizations of all sizes.
            </p>
          </div>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg prose-blue max-w-none dark:prose-invert">
              <p>
                Consiono Consulting was founded in 2018 by a group of AI researchers and industry veterans who recognized a critical gap in the market: businesses understood the potential of AI but lacked the expertise to implement it effectively.
              </p>
              <p>
                What began as a small team of five passionate AI specialists has grown into a global consultancy with offices in four countries and a team of over 120 experts. Our growth has been driven by our commitment to delivering measurable results and our unique approach that combines cutting-edge AI research with practical business applications.
              </p>
              <p>
                We pride ourselves on making AI accessible and delivering solutions that create real business value. Unlike many technology consultancies, we don't believe in AI for AI's sake—we believe in AI for results.
              </p>
              <p>
                Today, we work with leading hotel chains, innovative startups, and sophisticated wealth management firms to transform how they operate, serve customers, and create value in an increasingly AI-driven world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              These core principles guide everything we do at Consiono Consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Client Partnership",
                description: "We view ourselves as an extension of your team, deeply invested in your success. Our collaborative approach ensures solutions that align perfectly with your business goals.",
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: "Innovation with Purpose",
                description: "We're technology enthusiasts who believe innovation should serve a clear business purpose. Every AI solution we develop is designed to solve real problems and create measurable value.",
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                )
              },
              {
                title: "Ethical AI",
                description: "We believe in developing AI solutions that are not only powerful but also ethical, responsible, and transparent. We're committed to minimizing bias and ensuring our AI systems benefit all stakeholders.",
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex justify-center">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Meet the experts guiding our mission to transform businesses through AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Founder & CEO",
                bio: "Former AI research lead at Stanford and Google. PhD in Machine Learning with a passion for making AI accessible to businesses of all sizes.",
                image: "/team-ceo.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                bio: "20+ years in AI and software development. Previously led engineering teams at Amazon and Microsoft focusing on large-scale AI systems.",
                image: "/team-cto.jpg"
              },
              {
                name: "Emma Williams",
                role: "Head of Hospitality Solutions",
                bio: "Former operations executive at Marriott and Hilton. Expert in applying AI to transform guest experiences and hotel operations.",
                image: "/team-hospitality.jpg"
              },
              {
                name: "James Park",
                role: "Head of Startup Solutions",
                bio: "Serial entrepreneur with 3 successful exits. Specialized in helping startups scale through strategic AI implementation.",
                image: "/team-startup.jpg"
              },
              {
                name: "Dr. Robert Turner",
                role: "Head of Financial AI",
                bio: "PhD in Financial Mathematics. 15 years experience in quantitative analysis and AI applications in wealth management.",
                image: "/team-finance.jpg"
              },
              {
                name: "Olivia Garcia",
                role: "Chief Client Officer",
                bio: "Customer success expert with deep experience in enterprise consulting. Ensures all our solutions deliver measurable client value.",
                image: "/team-client.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Consiono by the Numbers
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The impact we've created since our founding in 2018.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "120+", label: "AI Experts" },
              { value: "250+", label: "Projects Completed" },
              { value: "4", label: "Global Offices" },
              { value: "98%", label: "Client Retention" }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Technology Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We collaborate with the world's leading technology providers to deliver cutting-edge AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {["AWS", "Microsoft", "Google Cloud", "IBM", "NVIDIA", "Salesforce", "Oracle", "SAP"].map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <span className="text-xl font-medium text-gray-400 dark:text-gray-500">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Team
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              We're always looking for talented individuals passionate about AI and its power to transform businesses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/careers" 
                className="rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                View Open Positions
              </Link>
              <Link 
                href="/contact" 
                className="rounded-md bg-blue-700 dark:bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Contact Us
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