'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/lib/content'

export default function CityContext() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const cityContent = content.en.home.cityContext

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
            {cityContent.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cityContent.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg font-light text-gray-700 leading-relaxed">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-primary max-w-3xl mx-auto">
            {cityContent.closing}
          </p>
        </motion.div>

        {/* Visual Enhancement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-accent to-primary rounded-full opacity-80"></div>
            <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-thin text-lg">FFM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 