'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-white/95 via-amber-50/95 to-white/95 backdrop-blur-md shadow-2xl border-b-2 border-amber-200/50' 
          : 'bg-gradient-to-r from-white/90 via-amber-50/90 to-white/90 backdrop-blur-sm shadow-xl border-b border-amber-100/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Pioneer Sports</span>
              <p className="text-sm text-gray-600">Consultancy</p>
            </div>
          </Link> */}
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 p-1 shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                <Image
                  src="/smalllogo.jpeg"
                  alt="Pioneer Sports Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain bg-white"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl font-display font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                Pioneer Sports
              </span>
              <p className="text-sm text-gray-600 font-medium">Consultancy</p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div key={link.name} whileHover={{ scale: 1.05, y: -2 }}>
                <Link
                  href={link.href}
                  className="relative px-6 py-3 text-gray-800 hover:text-amber-600 font-bold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-emerald-50 group overflow-hidden"
                >
                  <span className="relative z-10 tracking-wide">{link.name}</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100"
                    whileHover={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <Link href="/contact" className="ml-6">
              <motion.button
                className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black px-8 py-3 rounded-2xl font-black hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-2xl hover:shadow-amber-500/40 border-2 border-amber-400/50 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Shimmer */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  GET STARTED
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-green-600 hover:border-green-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                isOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
