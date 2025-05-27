'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'

export default function HeroSection() {
  const homeContent = content.en.home

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background Pattern - More Subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-primary mb-6 leading-tight">
            {homeContent.heroTitle}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light text-text-secondary mb-12 max-w-3xl mx-auto"
          >
            {homeContent.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              onClick={() => {
                const bookingSection = document.getElementById('booking')
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-light text-white px-8 py-3 rounded-elegant text-base font-medium transition-all duration-300 hover:shadow-accent hover:scale-105"
            >
              <span className="relative z-10">{homeContent.ctaText}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </button>
          </motion.div>
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 