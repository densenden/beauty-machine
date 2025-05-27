'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {

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
        <div className="flex flex-col items-center justify-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-accent/15 text-accent-dark font-lexend-giga text-sm font-medium rounded-elegant border-2 border-accent/40 mb-6 shadow-accent">
                Frankfurt&apos;s Premier Mobile Beauty
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lexend-giga font-light text-primary mb-8 leading-tight">
              Beauty Machine <span className="text-accent">IRL</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl font-lexend font-light text-gray-700 mb-6 leading-relaxed"
            >
              High-end Makeup. Delivered to You.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl font-lexend font-light text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Professional mobile makeup services for Frankfurt&apos;s executive women. 
              Punctual, tailored, and exclusively at your location. From boardroom confidence 
              to evening elegance—we bring luxury beauty directly to you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => {
                  const bookingSection = document.getElementById('booking')
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-dark to-primary text-white px-10 py-4 rounded-elegant text-lg font-lexend font-medium transition-all duration-300 hover:shadow-elegant hover:scale-105 shadow-lg"
              >
                <span className="relative z-10">Book Your Session</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>

              <button className="group px-10 py-4 border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white transition-all duration-300 rounded-elegant font-lexend font-medium text-lg shadow-lg hover:shadow-accent">
                View Gallery
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
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


        </div>

        {/* Detail Shots Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border-2 border-accent/50 shadow-accent group hover:border-accent transition-all duration-300">
            <Image
              src="/images/u9967959759_Close-up_of_a_womans_eye_as_a_makeup_artist_draws_a_85dc588e-6522-4d1a-a802-21dcfc1af277.jpeg"
              alt="Precision eye makeup application"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/95 to-transparent p-4">
              <h3 className="text-white font-lexend-giga font-medium text-sm">Precision Artistry</h3>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border-2 border-accent/50 shadow-accent group hover:border-accent transition-all duration-300">
            <Image
              src="/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_7ecfcb04-7efc-494a-8f5c-45b72a02ca56.jpeg"
              alt="Premium makeup tools and products"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/95 to-transparent p-4">
              <h3 className="text-white font-lexend-giga font-medium text-sm">Premium Products</h3>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border-2 border-accent/50 shadow-accent group hover:border-accent transition-all duration-300">
            <Image
              src="/images/u9967959759_A_soft_pink_blush_being_gently_applied_with_a_wide__5e72881e-7fe9-44f7-bb97-de398f38bd76.jpeg"
              alt="Gentle blush application technique"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/95 to-transparent p-4">
              <h3 className="text-white font-lexend-giga font-medium text-sm">Gentle Touch</h3>
            </div>
          </div>
        </motion.div>
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