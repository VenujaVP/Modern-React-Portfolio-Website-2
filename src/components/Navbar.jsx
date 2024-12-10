import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 pl-2">
            <a href="#" className="text-3xl font-bold tracking-tight">
              <span className="text-red-500">Code</span>
              <span className="text-white">Essence</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <a href="#" className="text-white hover:text-red-500 transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
                Hire Me
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-800`}>
        <div className="px-4 pt-3 pb-4 space-y-2">
          <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Home</a>
          <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">About</a>
          <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Portfolio</a>
          <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Services</a>
          <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Contact</a>
          <button className="w-full mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
} 