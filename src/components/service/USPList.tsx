'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/lib/content'
import { 
  ClockIcon, 
  MapPinIcon, 
  CreditCardIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline'

export default function USPList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const usps = content.en.service.usps

  const icons = [
    ClockIcon,
    MapPinIcon,
    CreditCardIcon,
    SparklesIcon
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-primary mb-6">
            Why Choose Beauty Machine IRL?
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usps.map((usp, index) => {
            const IconComponent = icons[index]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-start space-x-6 p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <div>
                  <p className="text-lg font-light text-gray-800 leading-relaxed">
                    {usp}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-light text-primary max-w-3xl mx-auto">
            Experience the difference of professional, mobile beauty services 
            designed for Frankfurt&apos;s most ambitious women.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 