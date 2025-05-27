'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'

export default function HeroSection() {
  const homeContent = content.en.home

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-primary mb-6 leading-tight">
            {homeContent.heroTitle}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-light text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            {homeContent.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => {
                const bookingSection = document.getElementById('booking')
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {homeContent.ctaText}
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 