'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ServiceShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const serviceSteps = [
    {
      step: "01",
      title: "Consultation & Setup",
      description: "We arrive at your location with professional equipment and discuss your desired look",
      images: [
        "/images/u9967959759_Makeup_artist_preparing_tools_in_a_luxury_bathroom__80d97adf-e041-41d5-bb28-4159e634f5aa.jpeg",
        "/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_2664ecd4-565a-4a07-9796-3f20734aef1b.jpeg"
      ]
    },
    {
      step: "02", 
      title: "Professional Application",
      description: "Expert makeup application using premium products tailored to your skin tone and preferences",
      images: [
        "/images/u9967959759_Close-up_of_a_makeup_artist_styling_hair_and_applyi_438638d0-d1e0-4e3f-a5da-8f9facc6d7c2.jpeg",
        "/images/u9967959759_Close-up_of_a_womans_eye_as_a_makeup_artist_draws_a_59174da0-8549-448f-9ab3-a868914c91e9.jpeg"
      ]
    },
    {
      step: "03",
      title: "Final Touches & Review", 
      description: "Perfect finishing touches and mirror review to ensure you're completely satisfied",
      images: [
        "/images/u9967959759_A_client_looks_into_a_hand_mirror_while_the_artist__3d236452-8976-45a2-85e3-00991a4cd731.jpeg",
        "/images/u9967959759_A_soft_pink_blush_being_gently_applied_with_a_wide__5e72881e-7fe9-44f7-bb97-de398f38bd76.jpeg"
      ]
    }
  ]

  const clientTypes = [
    {
      title: "Executive Women",
      description: "Boardroom-ready looks for C-suite professionals",
      image: "/images/u9967959759_Executive_woman_in_a_white_silk_blouse_standing_in__89aae728-c4fe-4027-8794-49a0d2411a70.jpeg"
    },
    {
      title: "Mature Professionals",
      description: "Sophisticated beauty for experienced leaders",
      image: "/images/u9967959759_Stylish_60_yrs_old_businesswoman_in_a_tailored_suit_d6f38e48-1d46-4293-b0c8-6448e4716395.jpeg"
    },
    {
      title: "Team Events",
      description: "Group sessions for corporate gatherings",
      image: "/images/u9967959759_Three_businesswomen_sitting_at_a_modern_conference__d0da8cf6-b4ba-4c20-8394-32be4f077e5d.jpeg"
    },
    {
      title: "Diverse Clientele",
      description: "Beauty services for women of all backgrounds",
      image: "/images/u9967959759_Diverse_group_of_businesswomen_different_ages_sizes_e3a79392-539a-4599-851b-c707e54bb295.jpeg"
    }
  ]

  const locations = [
    {
      title: "Corporate Offices",
      description: "Professional makeup in your workplace",
      image: "/images/u9967959759_Executive_woman_with_long_dark_hair_walking_through_e2aa6922-6db4-4548-ab2d-9b1ed67ebb80.jpeg"
    },
    {
      title: "Luxury Vehicles", 
      description: "Mobile beauty services in premium cars",
      image: "/images/u9967959759_Elegant_businesswoman_inside_a_luxury_car_with_crea_bd967b06-a132-4e4c-8d0d-acb17d3cfc8d.jpeg"
    },
    {
      title: "Private Residences",
      description: "Comfortable beauty sessions at home",
      image: "/images/u9967959759_Woman_in_her_early_30s_sitting_at_a_kitchen_island__1cdf3c84-50af-4207-a6c7-a82f446fa4d6.jpeg"
    },
    {
      title: "Penthouse Views",
      description: "Luxury beauty with Frankfurt skyline",
      image: "/images/u9967959759_Relaxed_woman_on_a_rooftop_terrace_overlooking_Fran_509de604-ef26-4d7c-900b-a5098c68f7c2.jpeg"
    }
  ]

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Service Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Our Process
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            How We Work
          </h2>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From arrival to final touch, every step is designed for your comfort and satisfaction
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-24 mb-32">
          {serviceSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-lexend-giga font-light text-accent/30 mr-6">
                    {step.step}
                  </span>
                  <div className="w-16 h-0.5 bg-accent"></div>
                </div>
                <h3 className="text-3xl font-lexend-giga font-medium text-primary mb-6">
                  {step.title}
                </h3>
                <p className="text-lg font-lexend font-light text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {step.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative aspect-[4/5] rounded-elegant overflow-hidden border border-accent/30 group">
                    <Image
                      src={image}
                      alt={`${step.title} - Image ${imgIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Our Clients
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Who We Serve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-elegant overflow-hidden border border-accent/30 mb-6 group-hover:border-accent/60 transition-all duration-300">
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-0.5 bg-accent mb-3"></div>
                </div>
              </div>
              <h3 className="text-xl font-lexend-giga font-medium text-primary mb-3">
                {client.title}
              </h3>
              <p className="text-sm font-lexend font-light text-gray-600">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Locations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Service Locations
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Where We Come to You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              className="group relative overflow-hidden rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-500"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={location.image}
                  alt={location.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-0.5 bg-accent mr-4"></div>
                    <span className="text-accent font-lexend-giga text-sm font-medium uppercase tracking-wider">
                      Location
                    </span>
                  </div>
                  <h3 className="text-2xl font-lexend-giga font-medium text-white mb-3">
                    {location.title}
                  </h3>
                  <p className="text-white/90 font-lexend font-light">
                    {location.description}
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