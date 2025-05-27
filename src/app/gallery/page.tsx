import Image from 'next/image'

export default function GalleryPage() {

  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Visual Stories
          </span>
          <h1 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto">
            Discover the art of mobile beauty through our curated collection of moments, 
            from executive boardrooms to intimate penthouse settings.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-elegant aspect-[4/5] border border-accent/30 hover:border-accent/60 transition-all duration-500">
              <Image
                src="/images/u9967959759_Close-up_of_a_makeup_artist_styling_hair_and_applyi_438638d0-d1e0-4e3f-a5da-8f9facc6d7c2.jpeg"
                alt="Makeup artist styling hair and applying makeup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-lexend-giga font-medium mb-2">The Process</h3>
                <p className="text-sm font-lexend font-light opacity-90">Professional styling in action</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-elegant aspect-[4/5] border border-accent/30 hover:border-accent/60 transition-all duration-500">
              <Image
                src="/images/u9967959759_Makeup_artist_preparing_tools_in_a_luxury_bathroom__80d97adf-e041-41d5-bb28-4159e634f5aa.jpeg"
                alt="Makeup artist preparing tools in luxury bathroom"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-lexend-giga font-medium mb-2">Preparation</h3>
                <p className="text-sm font-lexend font-light opacity-90">Setting up in luxury spaces</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-elegant aspect-[4/5] border border-accent/30 hover:border-accent/60 transition-all duration-500">
              <Image
                src="/images/u9967959759_Stylish_60_yrs_old_businesswoman_in_a_tailored_suit_28c15854-8f18-48aa-bd0d-47d2b1642a91.jpeg"
                alt="Stylish 60 year old businesswoman in tailored suit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-lexend-giga font-medium mb-2">Timeless Elegance</h3>
                <p className="text-sm font-lexend font-light opacity-90">Beauty at every age</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-elegant aspect-[4/5] border border-accent/30 hover:border-accent/60 transition-all duration-500 md:col-span-2">
              <Image
                src="/images/u9967959759_Cinematic_collage_layout_showing_5_seamless_frames__773599c3-6c34-4c89-a90e-0e6137dc76c2.jpeg"
                alt="Cinematic collage of makeup sessions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-lexend-giga font-medium mb-2">The Journey</h3>
                <p className="text-sm font-lexend font-light opacity-90">From consultation to final touch</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-elegant aspect-[4/5] border border-accent/30 hover:border-accent/60 transition-all duration-500">
              <Image
                src="/images/u9967959759_Young_woman_holding_her_phone_and_smiling_at_the_ca_ac9ba743-4393-4781-84db-2c25ac1a4a53.jpeg"
                alt="Young woman with phone smiling at camera"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-lexend-giga font-medium mb-2">Modern Beauty</h3>
                <p className="text-sm font-lexend font-light opacity-90">Connected and confident</p>
              </div>
            </div>
          </div>

          {/* Additional Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
              <Image
                src="/images/u9967959759_Flatlay_of_luxury_makeup_tools_on_white_marble_feat_22363eea-cf18-42f7-9e05-38bc073a7366.jpeg"
                alt="Luxury makeup tools flatlay"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
              <Image
                src="/images/u9967959759_Elegant_asian_businesswoman_inside_a_luxury_car_wit_83cc5573-96d3-43c9-817a-9d358627d996.jpeg"
                alt="Elegant Asian businesswoman in luxury car"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
              <Image
                src="/images/u9967959759_Elegant_black_businesswoman_inside_a_luxury_car_wit_2ad9c55b-e5c5-42f9-98d5-d4af642f1e67.jpeg"
                alt="Elegant Black businesswoman in luxury car"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-elegant overflow-hidden border border-accent/30">
              <Image
                src="/images/u9967959759_Confident_older_businesswoman_55-65_years_old_in_a__c06ef969-1bbc-4859-880d-02b584c8b27b.jpeg"
                alt="Confident older businesswoman"
                fill
                className="object-cover"
              />
            </div>
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
            <div className="text-center p-6 bg-white rounded-elegant border border-accent/30">
              <div className="w-16 h-16 bg-accent/10 rounded-elegant flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">🎨</span>
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">Artistry</h3>
              <p className="text-gray-700 font-regular">
                Each look is meticulously crafted to enhance your natural beauty 
                while complementing your professional environment.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-elegant border border-accent/30">
              <div className="w-16 h-16 bg-accent/10 rounded-elegant flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">📍</span>
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">Location</h3>
              <p className="text-gray-700 font-regular">
                From corporate headquarters to private residences, 
                we bring our mobile studio directly to you.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-elegant border border-accent/30">
              <div className="w-16 h-16 bg-accent/10 rounded-elegant flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent">✨</span>
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">Experience</h3>
              <p className="text-gray-700 font-regular">
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
          <p className="text-xl font-regular text-gray-700 mb-12">
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