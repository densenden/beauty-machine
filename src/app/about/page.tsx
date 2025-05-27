import { content } from '@/lib/content'
import AboutShowcase from '@/components/about/AboutShowcase'

export default function AboutPage() {
  const aboutContent = content.en.about

  return (
    <div className="pt-16">
      <AboutShowcase />
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
                {/* Placeholder for Olga's photo */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl text-accent">O</span>
                    </div>
                    <p className="text-sm text-gray-500">Professional Photo</p>
                    <p className="text-xs text-gray-400 mt-2 max-w-xs">
                      {aboutContent.photoPrompt}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full"></div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-thin text-primary mb-6">
                Meet {aboutContent.name}
              </h1>
              
              <p className="text-xl font-light text-gray-700 leading-relaxed mb-8">
                {aboutContent.desc}
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-light text-primary mb-2">Experience</h3>
                  <p className="text-gray-600 font-light">
                    Over 8 years specializing in professional makeup for executive women, 
                    corporate events, and high-profile meetings in Frankfurt&apos;s business district.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-light text-primary mb-2">Philosophy</h3>
                  <p className="text-gray-600 font-light">
                    &ldquo;Every woman has her unique power. My job is to enhance that natural 
                    confidence and help her present her best self to the world.&rdquo;
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-light text-primary mb-2">Specialization</h3>
                  <p className="text-gray-600 font-light">
                    Business makeup, executive styling, camera-ready looks, 
                    and consultation for personal branding through beauty.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="/book"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 text-center"
                >
                  Book with Olga
                </a>
                <a
                  href="/contact"
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">⏰</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">Punctuality</h3>
              <p className="text-gray-600 font-light">
                Always on time, respecting your schedule and commitments.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">🎯</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">Precision</h3>
              <p className="text-gray-600 font-light">
                Attention to detail that meets the highest professional standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">💝</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">Personal Touch</h3>
              <p className="text-gray-600 font-light">
                Warm, professional service that makes you feel comfortable and confident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 