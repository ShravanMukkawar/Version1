import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent tracking-tight">
                Investment Banking House
              </span>
              <span className="text-[10px] text-indigo-400 font-medium tracking-wider uppercase">
                Strategic Financial Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className="text-base md:text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="text-base md:text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="text-base md:text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-base md:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/30"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-4 py-4 border-t border-gray-800/50">
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-200"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-200"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-200"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-base font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/30"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}