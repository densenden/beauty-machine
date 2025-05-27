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
    <section ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Elegant Frame Element */}
      <div className="absolute bottom-16 left-16 w-28 h-40 border-2 border-accent/15 rounded-elegant -rotate-6 hidden lg:block"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl font-light text-foreground max-w-3xl mx-auto">
            Professional makeup services with transparent pricing. 
            All packages include consultation and premium products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prices.slice(0, 3).map((price, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white rounded-elegant p-8 shadow-elegant hover:shadow-lg transition-all duration-300 ${
                index === 1 ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {index === 1 && (
                <div className="bg-accent text-white text-sm font-regular px-4 py-2 rounded-elegant text-center mb-6">
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-medium text-primary mb-4">
                  {price.title}
                </h3>
                
                <div className="text-5xl font-light text-accent mb-6">
                  {price.price}
                </div>
                
                <p className="text-foreground font-light mb-8">
                  {price.desc}
                </p>

                <Link
                  href="/book"
                  className={`group relative overflow-hidden inline-block w-full py-3 px-6 rounded-elegant text-center font-medium transition-all duration-300 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-accent hover:scale-105' 
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  <span className="relative z-10">Book Now</span>
                  {index === 1 && (
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                  )}
                </Link>
              </div>

              <div className="mt-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-regular text-foreground">Professional consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-regular text-foreground">Premium makeup products</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-regular text-foreground">Mobile service in Frankfurt</span>
                  </div>
                  {index >= 1 && (
                    <div className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-regular text-foreground">Touch-up guidance</span>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-regular text-foreground">Photoshoot-ready finish</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-elegant p-8 shadow-elegant"
        >
          <h3 className="text-2xl font-medium text-primary mb-6 text-center">
            {prices[3].title}
          </h3>
          <p className="text-center text-foreground font-light max-w-2xl mx-auto">
            {prices[3].desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-light text-primary mb-6">
            Full payment required to confirm booking
          </p>
          <Link
            href="/book"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-light text-white px-8 py-3 rounded-elegant text-base font-medium transition-all duration-300 hover:shadow-elegant hover:scale-105 inline-block"
          >
            <span className="relative z-10">Book Your Session Now</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 