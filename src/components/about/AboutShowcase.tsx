'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const portfolioImages = [
    "/images/u9967959759_Portrait_of_a_professional_female_makeup_artist_in__a7a4145d-e3cd-4392-9e9f-0992fd5e6564.jpeg",
    "/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_22363eea-cf18-42f7-9e05-38bc073a7366.jpeg",
    "/images/u9967959759_Confident_older_businesswoman_55-65_years_old_in_a__c06ef969-1bbc-4859-880d-02b584c8b27b.jpeg",
    "/images/u9967959759_Elegant_asian_businesswoman_inside_a_luxury_car_wit_83cc5573-96d3-43c9-817a-9d358627d996.jpeg",
    "/images/u9967959759_Elegant_black_businesswoman_inside_a_luxury_car_wit_2ad9c55b-e5c5-42f9-98d5-d4af642f1e67.jpeg",
    "/images/u9967959759_Young_woman_holding_her_phone_and_smiling_at_the_ca_c8e8f5d4-bd30-40b6-ae46-4b405d585351.jpeg"
  ]

  const expertise = [
    {
      title: "Executive Makeup",
      description: "Boardroom-ready looks that command respect",
      icon: "💼"
    },
    {
      title: "Event Styling", 
      description: "Special occasions and corporate events",
      icon: "✨"
    },
    {
      title: "Mobile Service",
      description: "Professional setup at your location",
      icon: "🚗"
    },
    {
      title: "Premium Products",
      description: "Only the finest makeup brands",
      icon: "💎"
    }
  ]

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Artist Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
              Meet Your Artist
            </span>
            <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
              Olga Kreuzer
            </h2>
            <div className="space-y-6 text-lg font-lexend font-light text-gray-700 leading-relaxed">
              <p>
                With over a decade of experience in the beauty industry, Olga has perfected the art of 
                mobile makeup services for Frankfurt&apos;s most discerning professional women.
              </p>
              <p>
                Her expertise spans from subtle executive looks to glamorous evening styles, 
                always tailored to enhance each client&apos;s unique features and personal brand.
              </p>
              <p>
                Based in Frankfurt, Olga understands the fast-paced lifestyle of executive women 
                and provides punctual, professional service that fits seamlessly into busy schedules.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-lexend-giga font-light text-accent mb-2">10+</div>
                <div className="text-sm font-lexend text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-lexend-giga font-light text-accent mb-2">500+</div>
                <div className="text-sm font-lexend text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30">
              <Image
                src="/images/u9967959759_Portrait_of_a_professional_female_makeup_artist_in__a7a4145d-e3cd-4392-9e9f-0992fd5e6564.jpeg"
                alt="Olga Kreuzer - Professional Makeup Artist"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative pink accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-elegant"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-elegant"></div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            What I Specialize In
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="text-center p-8 bg-gray-50 rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-lexend-giga font-medium text-primary mb-4">
                {skill.title}
              </h3>
              <p className="text-sm font-lexend font-light text-gray-600">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            My Work
          </h2>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A selection of recent work showcasing the diversity and quality of my makeup artistry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative ${
                index === 0 ? 'aspect-[4/3]' : 
                index === 3 ? 'aspect-[3/2]' : 
                'aspect-square'
              }`}>
                <Image
                  src={image}
                  alt={`Portfolio work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-lexend-giga text-sm font-medium text-accent uppercase tracking-wider">
              Ready to Work Together?
            </span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 