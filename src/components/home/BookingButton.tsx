'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function BookingButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="booking" ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-8">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-xl font-regular text-gray-700 mb-12 max-w-2xl mx-auto">
            Book your professional makeup session now. Choose your package, select your time, 
            and let us bring the luxury experience directly to you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book"
              className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-light text-white px-8 py-3 rounded-elegant text-base font-medium transition-all duration-300 hover:shadow-accent hover:scale-105 flex items-center space-x-3"
            >
              <span className="relative z-10">Book Your Session</span>
              <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>

            <Link
              href="/service"
              className="group text-primary hover:text-accent font-regular text-base relative transition-colors duration-300"
            >
              <span>View Packages & Pricing</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-2xl font-light text-accent mb-2">100%</div>
              <div className="text-sm font-regular text-gray-600">Punctual & Professional</div>
            </div>
            <div>
              <div className="text-2xl font-light text-accent mb-2">€89+</div>
              <div className="text-sm font-regular text-gray-600">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-light text-accent mb-2">Frankfurt</div>
              <div className="text-sm font-regular text-gray-600">Mobile Service Area</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 