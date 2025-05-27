'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function BookingShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const bookingSteps = [
    {
      step: "1",
      title: "Choose Your Package",
      description: "Select from our three professional packages",
      image: "/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_2664ecd4-565a-4a07-9796-3f20734aef1b.jpeg"
    },
    {
      step: "2",
      title: "Pick Date & Time",
      description: "Schedule at your convenience",
      image: "/images/u9967959759_Young_woman_holding_her_phone_and_smiling_at_the_ca_c8e8f5d4-bd30-40b6-ae46-4b405d585351.jpeg"
    },
    {
      step: "3",
      title: "Confirm Location",
      description: "We come to your office or home",
      image: "/images/u9967959759_Elegant_businesswoman_inside_a_luxury_car_with_crea_bd967b06-a132-4e4c-8d0d-acb17d3cfc8d.jpeg"
    },
    {
      step: "4",
      title: "Enjoy Your Session",
      description: "Professional makeup application",
      image: "/images/u9967959759_Close-up_of_a_makeup_artist_styling_hair_and_applyi_438638d0-d1e0-4e3f-a5da-8f9facc6d7c2.jpeg"
    }
  ]

  const testimonialImages = [
    "/images/u9967959759_Executive_woman_in_a_white_silk_blouse_standing_in__89aae728-c4fe-4027-8794-49a0d2411a70.jpeg",
    "/images/u9967959759_Stylish_60_yrs_old_businesswoman_in_a_tailored_suit_28c15854-8f18-48aa-bd0d-47d2b1642a91.jpeg",
    "/images/u9967959759_Confident_older_businesswoman_55-65_years_old_in_a__c06ef969-1bbc-4859-880d-02b584c8b27b.jpeg"
  ]

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Booking Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            How It Works
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Simple Booking Process
          </h2>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Book your professional makeup session in just a few clicks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {bookingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30 mb-6 group-hover:border-accent/60 transition-all duration-300">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-lexend-giga font-medium">{step.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-lexend-giga font-medium text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm font-lexend font-light text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Book With Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Professional Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-elegant flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl font-lexend-giga font-medium text-primary mb-2">
                    Always Punctual
                  </h3>
                  <p className="text-gray-700 font-lexend font-light">
                    We respect your time and arrive exactly when scheduled, 
                    ready to begin your session immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-elegant flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">💎</span>
                </div>
                <div>
                  <h3 className="text-xl font-lexend-giga font-medium text-primary mb-2">
                    Premium Products
                  </h3>
                  <p className="text-gray-700 font-lexend font-light">
                    Only the finest makeup brands and professional-grade products 
                    for long-lasting, camera-ready results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-elegant flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-lexend-giga font-medium text-primary mb-2">
                    Tailored Service
                  </h3>
                  <p className="text-gray-700 font-lexend font-light">
                    Every session is customized to your skin tone, preferences, 
                    and the occasion you&apos;re preparing for.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_A_client_looks_into_a_hand_mirror_while_the_artist__3d236452-8976-45a2-85e3-00991a4cd731.jpeg"
                    alt="Client with mirror"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_A_soft_pink_blush_being_gently_applied_with_a_wide__5e72881e-7fe9-44f7-bb97-de398f38bd76.jpeg"
                    alt="Blush application"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Close-up_of_a_womans_eye_as_a_makeup_artist_draws_a_85dc588e-6522-4d1a-a802-21dcfc1af277.jpeg"
                    alt="Eye makeup detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30">
                  <Image
                    src="/images/u9967959759_Makeup_artist_preparing_tools_in_a_luxury_bathroom__80d97adf-e041-41d5-bb28-4159e634f5aa.jpeg"
                    alt="Professional setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative pink accents */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent/30 rounded-elegant"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-elegant"></div>
          </motion.div>
        </div>

        {/* Happy Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Happy Clients
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Confidence Delivered
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              className="group relative overflow-hidden rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-500"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={`Happy client ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-0.5 bg-accent mb-3"></div>
                  <p className="text-sm font-lexend font-light">
                    &ldquo;Professional, punctual, and absolutely perfect results every time.&rdquo;
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