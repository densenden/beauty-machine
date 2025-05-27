'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import Image from 'next/image'

export default function HeroSection() {
  const homeContent = content.en.home

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/u9967959759_A_client_looks_into_a_hand_mirror_while_the_artist__bdfb5e8a-6772-4b02-82a8-cc55c094e6f3.png"
          alt="Professional makeup artist with client"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-left lg:pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-6">
                Frankfurt&apos;s Premier Mobile Beauty
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-lexend-giga font-light text-primary mb-8 leading-tight">
              {homeContent.heroTitle}
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl font-lexend font-light text-gray-700 mb-12 leading-relaxed"
            >
              {homeContent.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => {
                  const bookingSection = document.getElementById('booking')
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-elegant text-base font-lexend font-medium transition-all duration-300 hover:shadow-elegant hover:scale-105"
              >
                <span className="relative z-10">{homeContent.ctaText}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-elegant font-lexend font-medium">
                View Gallery
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-lexend-giga font-light text-accent mb-2">100%</div>
                <div className="text-sm font-lexend text-gray-600">Punctual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-lexend-giga font-light text-accent mb-2">€89+</div>
                <div className="text-sm font-lexend text-gray-600">Starting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-lexend-giga font-light text-accent mb-2">5★</div>
                <div className="text-sm font-lexend text-gray-600">Rated</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Side - Additional Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Close-up_of_a_womans_eye_as_a_makeup_artist_draws_a_85dc588e-6522-4d1a-a802-21dcfc1af277.jpeg"
                    alt="Professional eye makeup application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_7ecfcb04-7efc-494a-8f5c-45b72a02ca56.jpeg"
                    alt="Luxury makeup tools"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_A_soft_pink_blush_being_gently_applied_with_a_wide__5e72881e-7fe9-44f7-bb97-de398f38bd76.jpeg"
                    alt="Soft pink blush application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Portrait_of_a_professional_female_makeup_artist_in__a7a4145d-e3cd-4392-9e9f-0992fd5e6564.jpeg"
                    alt="Professional makeup artist portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
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
    </section>
  )
} 