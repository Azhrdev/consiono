// Create a new file: app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/full_logo.png" 
                alt="Consiono Consulting" 
                width={150} 
                height={40} 
                priority
              />
            </Link>
            <div className="hidden md:block ml-10">
              {/* Navigation links */}
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
  );
}