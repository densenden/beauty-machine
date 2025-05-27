'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AppShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const aiFeatures = [
    {
      title: "Instant Consultation",
      description: "Get makeup advice through WhatsApp",
      image: "/images/u9967959759_Young_woman_holding_her_phone_and_smiling_at_the_ca_ac9ba743-4393-4781-84db-2c25ac1a4a53.jpeg",
      icon: "💬"
    },
    {
      title: "Product Recommendations",
      description: "AI-powered beauty product suggestions",
      image: "/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_f4371948-5a37-4ea9-8d74-97223744ea03.jpeg",
      icon: "🤖"
    },
    {
      title: "Virtual Try-On",
      description: "See how looks work with your features",
      image: "/images/u9967959759_Cinematic_collage_layout_showing_5_seamless_frames__773599c3-6c34-4c89-a90e-0e6137dc76c2.jpeg",
      icon: "✨"
    }
  ]

  const useCases = [
    {
      title: "Quick Touch-ups",
      description: "Last-minute makeup advice before meetings",
      image: "/images/u9967959759_Executive_woman_with_long_dark_hair_walking_through_e2aa6922-6db4-4548-ab2d-9b1ed67ebb80.jpeg"
    },
    {
      title: "Product Questions",
      description: "Get expert advice on makeup products",
      image: "/images/u9967959759_Flat_angle_on_a_modern_kitchen_island_with_luxury_m_f4371948-5a37-4ea9-8d74-97223744ea03.jpeg"
    },
    {
      title: "Style Consultation",
      description: "Personalized beauty recommendations",
      image: "/images/u9967959759_Diverse_group_of_businesswomen_different_ages_sizes_e3a79392-539a-4599-851b-c707e54bb295.jpeg"
    }
  ]

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AI Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            AI-Powered Beauty
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Smart Beauty Assistant
          </h2>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Get instant makeup advice and personalized recommendations through our AI-powered WhatsApp service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30 mb-6 group-hover:border-accent/60 transition-all duration-300">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-0.5 bg-accent mb-3"></div>
                  <p className="text-sm font-lexend font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-lexend-giga font-medium text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm font-lexend font-light text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            How It Works
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Simple & Instant
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-lexend-giga font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-lexend-giga font-medium text-primary mb-2">
                    Send a Message
                  </h3>
                  <p className="text-gray-700 font-lexend font-light">
                    Text us on WhatsApp with your beauty question, photo, or makeup challenge.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-lexend-giga font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-lexend-giga font-medium text-primary mb-2">
                    AI Analysis
                  </h3>
                  <p className="text-gray-700 font-lexend font-light">
                    Our AI analyzes your request and provides personalized recommendations instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-lexend-giga font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-lexend-giga font-medium text-primary mb-2">
                    Get Expert Advice
                  </h3>
                  <p className="text-gray-700 font-lexend font-light">
                    Receive professional makeup tips, product suggestions, and step-by-step guidance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-light text-white px-8 py-4 rounded-elegant text-base font-lexend font-medium transition-all duration-300 hover:shadow-accent hover:scale-105">
                <span className="relative z-10">Try WhatsApp AI</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="bg-white rounded-elegant p-8 shadow-elegant border border-accent/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-lexend-giga font-medium text-primary">WhatsApp Chat</h4>
                  <p className="text-sm text-gray-600 font-lexend">Online now</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-elegant p-3 max-w-xs">
                  <p className="text-sm font-lexend">Hi! I have an important meeting in 30 minutes. Quick makeup tips?</p>
                </div>
                <div className="bg-accent text-white rounded-elegant p-3 max-w-xs ml-auto">
                  <p className="text-sm font-lexend">Perfect! For a quick professional look: neutral eyeshadow, mascara, concealer, and a subtle lip color. Would you like specific product recommendations?</p>
                </div>
                <div className="bg-gray-100 rounded-elegant p-3 max-w-xs">
                  <p className="text-sm font-lexend">Yes please! I have fair skin and blue eyes.</p>
                </div>
                <div className="bg-accent text-white rounded-elegant p-3 max-w-xs ml-auto">
                  <p className="text-sm font-lexend">Great! Try warm browns for eyeshadow, brown mascara, and a peachy-pink lip. This will complement your coloring beautifully! 💄</p>
                </div>
              </div>
            </div>
            {/* Decorative pink accents */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/30 rounded-elegant"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/10 rounded-elegant"></div>
          </motion.div>
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Use Cases
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            When You Need Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              className="group relative overflow-hidden rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-500"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-0.5 bg-accent mr-3"></div>
                    <span className="text-accent font-lexend-giga text-xs font-medium uppercase tracking-wider">
                      Use Case
                    </span>
                  </div>
                  <h3 className="text-xl font-lexend-giga font-medium text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-white/90 font-lexend font-light text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 