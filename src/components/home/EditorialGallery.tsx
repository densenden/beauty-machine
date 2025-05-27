'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function EditorialGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const galleryImages = [
    {
      src: "/images/u9967959759_Executive_woman_in_a_white_silk_blouse_standing_in__89aae728-c4fe-4027-8794-49a0d2411a70.jpeg",
      alt: "Executive woman in white silk blouse",
      title: "Executive Elegance",
      description: "Sophisticated looks for boardroom confidence"
    },
    {
      src: "/images/u9967959759_Elegant_businesswoman_inside_a_luxury_car_with_crea_bd967b06-a132-4e4c-8d0d-acb17d3cfc8d.jpeg",
      alt: "Elegant businesswoman in luxury car",
      title: "Mobile Luxury",
      description: "Beauty services that come to you"
    },
    {
      src: "/images/u9967959759_Three_businesswomen_sitting_at_a_modern_conference__73d7d3bc-f03e-44e2-8905-f12bc7391e52.jpeg",
      alt: "Three businesswomen at conference table",
      title: "Team Ready",
      description: "Group sessions for corporate events"
    },
    {
      src: "/images/u9967959759_Diverse_group_of_businesswomen_different_ages_sizes_e3a79392-539a-4599-851b-c707e54bb295.jpeg",
      alt: "Diverse group of businesswomen",
      title: "Inclusive Beauty",
      description: "Celebrating every woman's unique style"
    },
    {
      src: "/images/u9967959759_Relaxed_woman_on_a_rooftop_terrace_overlooking_Fran_71308313-cfb0-4a69-b4a8-1aa24267a828.jpeg",
      alt: "Woman on rooftop terrace overlooking Frankfurt",
      title: "Frankfurt Views",
      description: "Beauty sessions with a view"
    },
    {
      src: "/images/u9967959759_Woman_in_her_early_30s_sitting_at_a_kitchen_island__1cdf3c84-50af-4207-a6c7-a82f446fa4d6.jpeg",
      alt: "Woman at kitchen island",
      title: "Home Comfort",
      description: "Relaxed beauty in your own space"
    }
  ]

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Editorial Collection
          </span>
          <h2 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-8 leading-tight">
            Beauty in Motion
          </h2>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the artistry behind every session. From executive boardrooms to private penthouses, 
            we capture the essence of modern professional women.
          </p>
        </motion.div>

        {/* Magazine-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-elegant border border-accent/30 hover:border-accent/60 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                index === 0 ? 'aspect-[4/3]' : 
                index === 3 ? 'aspect-[3/2]' : 
                'aspect-[4/5]'
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    index === 0 ? "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw" :
                    index === 3 ? "(max-width: 1024px) 100vw, 66vw" :
                    "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-lexend-giga font-medium mb-2">{image.title}</h3>
                  <p className="text-sm font-lexend font-light opacity-90">{image.description}</p>
                </div>

                {/* Pink Accent Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-lexend-giga text-sm font-medium text-accent uppercase tracking-wider">
              View Complete Gallery
            </span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 