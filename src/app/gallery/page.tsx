import { content } from '@/lib/content'

export default function GalleryPage() {
  const galleryContent = content.en.gallery

  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Elegant Frame Element */}
        <div className="absolute bottom-12 left-12 w-32 h-48 border-2 border-accent/20 rounded-elegant -rotate-6 hidden lg:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl font-light text-foreground max-w-3xl mx-auto">
            Discover the art of mobile beauty through our curated collection of moments, 
            from executive boardrooms to intimate penthouse settings.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {galleryContent.scenes.map((scene, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-elegant bg-gray-100 aspect-[4/5] hover:shadow-elegant transition-all duration-500"
              >
                {/* Image Placeholder with Scene Description */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl text-accent">📸</span>
                    </div>
                    <h3 className="text-lg font-medium text-primary mb-3">
                      {scene.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {scene.desc}
                    </p>
                    <div className="text-xs text-text-muted bg-white/80 backdrop-blur-sm rounded-elegant p-3 max-w-xs">
                      <strong className="text-primary">Concept:</strong><br />
                      {scene.prompt}
                    </div>
                  </div>
                </div>

                {/* Overlay with Scene Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-light mb-2">{scene.title}</h3>
                    <p className="text-sm text-white/90">{scene.desc}</p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behind the Scenes Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Behind the Elegance
            </h2>
            <p className="text-xl font-light text-foreground max-w-3xl mx-auto">
              Every session is carefully crafted to capture your unique essence 
              in the environments where you shine brightest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-elegant flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">🎨</span>
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">Artistry</h3>
              <p className="text-foreground font-light">
                Each look is meticulously crafted to enhance your natural beauty 
                while complementing your professional environment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-elegant flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">📍</span>
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">Location</h3>
              <p className="text-foreground font-light">
                From corporate headquarters to private residences, 
                we bring our mobile studio directly to you.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-elegant flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">✨</span>
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">Experience</h3>
              <p className="text-foreground font-light">
                More than makeup application—it&apos;s a moment of tranquility 
                and transformation in your busy day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-8">
            Ready to Create Your Moment?
          </h2>
          <p className="text-xl font-light text-text-secondary mb-12">
            Let us capture your elegance in your own environment.
          </p>
          <a
            href="/book"
            className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-light text-white px-8 py-3 rounded-elegant text-base font-medium transition-all duration-300 hover:shadow-accent hover:scale-105 inline-block"
          >
            <span className="relative z-10">Book Your Session</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  )
} 