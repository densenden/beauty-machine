'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would integrate with your email service
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl font-regular text-gray-700 max-w-3xl mx-auto">
              Ready to experience luxury mobile makeup services? 
              Contact us to discuss your needs or book a consultation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light text-primary mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-elegant border border-accent/30 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-elegant flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Email</h3>
                    <p className="text-gray-800">hello@beautymachine-irl.com</p>
                    <p className="text-text-secondary text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-elegant border border-accent/30 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-elegant flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Phone</h3>
                    <p className="text-gray-800">+49 69 123 456 789</p>
                    <p className="text-text-secondary text-sm">Available Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-elegant border border-accent/30 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-elegant flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">Service Area</h3>
                    <p className="text-gray-800">Frankfurt am Main</p>
                    <p className="text-text-secondary text-sm">Mobile service throughout the city</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-elegant border border-accent/30">
                <h3 className="text-lg font-medium text-primary mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-800">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By appointment only</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-light text-primary mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-elegant focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-300 text-gray-800"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-elegant focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-300 text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-elegant focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-300 text-foreground"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-elegant focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-300 text-foreground resize-none"
                    placeholder="Tell us about your event, preferences, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-light text-white px-8 py-3 rounded-elegant text-base font-medium transition-all duration-300 hover:shadow-accent hover:scale-105"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 