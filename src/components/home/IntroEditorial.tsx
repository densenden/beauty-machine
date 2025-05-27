'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/lib/content'

export default function IntroEditorial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const homeContent = content.en.home

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-800 tracking-wide">
            {homeContent.editorialText}
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>

        {/* Quote or highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-thin text-primary italic">
            &ldquo;Always on time. Always tailored. Always exquisite.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
} 