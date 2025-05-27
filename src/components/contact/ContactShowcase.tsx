'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ContactShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const serviceAreas = [
    {
      title: "Frankfurt City Center",
      description: "Banking district and corporate headquarters",
      image: "/images/u9967959759_Executive_woman_with_long_dark_hair_walking_through_e2aa6922-6db4-4548-ab2d-9b1ed67ebb80.jpeg"
    },
    {
      title: "Westend Business District", 
      description: "Premium offices and executive suites",
      image: "/images/u9967959759_Three_businesswomen_sitting_at_a_modern_conference__73d7d3bc-f03e-44e2-8905-f12bc7391e52.jpeg"
    },
    {
      title: "Private Residences",
      description: "Luxury homes and penthouses",
      image: "/images/u9967959759_Relaxed_woman_on_a_rooftop_terrace_overlooking_Fran_71308313-cfb0-4a69-b4a8-1aa24267a828.jpeg"
    }
  ]

  const contactMethods = [
    {
      icon: "📱",
      title: "WhatsApp",
      description: "Quick booking and consultation",
      detail: "+49 (0) 69 XXX XXXX",
      accent: true
    },
    {
      icon: "📧", 
      title: "Email",
      description: "Detailed inquiries and planning",
      detail: "hello@beautymachine-irl.com",
      accent: false
    },
    {
      icon: "📅",
      title: "Online Booking",
      description: "Schedule your appointment",
      detail: "Available 24/7",
      accent: false
    }
  ]

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Service Areas
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Where We Serve
          </h2>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Professional mobile makeup services across Frankfurt&apos;s business districts and luxury residential areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-500"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-0.5 bg-accent mr-3"></div>
                    <span className="text-accent font-lexend-giga text-xs font-medium uppercase tracking-wider">
                      Service Area
                    </span>
                  </div>
                  <h3 className="text-xl font-lexend-giga font-medium text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-white/90 font-lexend font-light text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Get in Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Contact Methods
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className={`text-center p-8 rounded-elegant border transition-all duration-300 group ${
                method.accent 
                  ? 'bg-accent/5 border-accent/30 hover:border-accent/60' 
                  : 'bg-white border-accent/30 hover:border-accent/60'
              }`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-2xl font-lexend-giga font-medium text-primary mb-4">
                {method.title}
              </h3>
              <p className="text-gray-600 font-lexend font-light mb-4">
                {method.description}
              </p>
              <div className={`font-lexend font-medium ${
                method.accent ? 'text-accent' : 'text-primary'
              }`}>
                {method.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
              Ready to Book?
            </span>
            <h2 className="text-4xl md:text-5xl font-lexend-giga font-light text-primary mb-6 leading-tight">
              Let&apos;s Create Your Perfect Look
            </h2>
            <div className="space-y-6 text-lg font-lexend font-light text-gray-700 leading-relaxed">
              <p>
                Whether you need a quick touch-up before an important meeting or a complete 
                makeover for a special event, I&apos;m here to help you look and feel your best.
              </p>
              <p>
                Contact me today to discuss your needs and schedule your personalized 
                beauty session in Frankfurt.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-light text-white px-8 py-4 rounded-elegant text-base font-lexend font-medium transition-all duration-300 hover:shadow-accent hover:scale-105">
                <span className="relative z-10">WhatsApp Now</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-elegant font-lexend font-medium">
                Send Email
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Young_woman_holding_her_phone_and_smiling_at_the_ca_ac9ba743-4393-4781-84db-2c25ac1a4a53.jpeg"
                    alt="Happy client with phone"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_7ecfcb04-7efc-494a-8f5c-45b72a02ca56.jpeg"
                    alt="Professional makeup tools"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Woman_in_her_early_30s_sitting_at_a_kitchen_island__1cdf3c84-50af-4207-a6c7-a82f446fa4d6.jpeg"
                    alt="Client at home"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_A_client_looks_into_a_hand_mirror_while_the_artist__bdfb5e8a-6772-4b02-82a8-cc55c094e6f3.png"
                    alt="Client with mirror"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative pink accents */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/30 rounded-elegant"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/10 rounded-elegant"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 