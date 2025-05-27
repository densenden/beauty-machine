'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { content } from '@/lib/content'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function PricingTable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prices = content.en.service.prices

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-primary mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Professional makeup services with transparent pricing. 
            All packages include consultation and premium products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prices.slice(0, 3).map((price, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                index === 1 ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {index === 1 && (
                <div className="bg-accent text-white text-sm font-light px-4 py-2 rounded-full text-center mb-6">
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-light text-primary mb-4">
                  {price.title}
                </h3>
                
                <div className="text-5xl font-thin text-accent mb-6">
                  {price.price}
                </div>
                
                <p className="text-gray-600 font-light mb-8">
                  {price.desc}
                </p>

                <Link
                  href="/book"
                  className={`block w-full py-3 px-6 rounded-full text-center font-light transition-all duration-300 ${
                    index === 1 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  Book Now
                </Link>
              </div>

              <div className="mt-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-light text-gray-600">Professional consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-light text-gray-600">Premium makeup products</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-light text-gray-600">Mobile service in Frankfurt</span>
                  </div>
                  {index >= 1 && (
                    <div className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-light text-gray-600">Touch-up guidance</span>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-light text-gray-600">Photoshoot-ready finish</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-light text-primary mb-6 text-center">
            {prices[3].title}
          </h3>
          <p className="text-center text-gray-600 font-light max-w-2xl mx-auto">
            {prices[3].desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-light text-primary mb-6">
            Full payment required to confirm booking
          </p>
          <Link
            href="/book"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Session Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 