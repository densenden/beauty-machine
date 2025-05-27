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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-thin text-primary mb-8">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
            Book your professional makeup session now. Choose your package, select your time, 
            and let us bring the luxury experience directly to you.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book"
              className="group bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <span>Book Your Session</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/service"
              className="text-primary hover:text-accent font-light text-lg underline underline-offset-4 transition-colors duration-200"
            >
              View Packages & Pricing
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-2xl font-thin text-accent mb-2">100%</div>
              <div className="text-sm font-light text-gray-600">Punctual & Professional</div>
            </div>
            <div>
              <div className="text-2xl font-thin text-accent mb-2">€89+</div>
              <div className="text-sm font-light text-gray-600">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-thin text-accent mb-2">Frankfurt</div>
              <div className="text-sm font-light text-gray-600">Mobile Service Area</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 