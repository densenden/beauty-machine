import { content } from '@/lib/content'
import AppShowcase from '@/components/app/AppShowcase'

export default function AppPage() {
  const appContent = content.en.app

  return (
    <div className="pt-16">
      <AppShowcase />
      <div className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
              AI Beauty Assistant
            </span>
            <h1 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-6">
              {appContent.title}
            </h1>
            <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto">
              {appContent.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mock Phone Interface */}
            <div className="relative">
              <div className="bg-black rounded-[2.5rem] p-4 max-w-xs mx-auto">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-green-500 text-white p-4 flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-sm">BeautyMachine.AI</div>
                      <div className="text-xs opacity-80">Online</div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 h-96 bg-gray-50">
                    <div className="bg-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hi! Send me your selfie 📸</p>
                    </div>
                    
                    <div className="bg-green-500 text-white rounded-lg p-3 max-w-[80%] ml-auto">
                      <div className="w-24 h-32 bg-white/20 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs">📸</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">✨ Processing your enhanced portrait...</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 max-w-[80%]">
                      <div className="w-24 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs">✨📸</span>
                      </div>
                      <p className="text-sm">Your enhanced portrait is ready! 💕</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-primary mb-8">
                AI-Enhanced Beauty, <br />
                Exclusively for Our Clients
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-light text-primary mb-2">Smart Enhancement</h3>
                    <p className="text-gray-600 font-light">
                      Our AI analyzes your selfies and creates stunning, professional-quality portraits 
                      that maintain your natural beauty while adding that extra polish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-light text-primary mb-2">WhatsApp Integration</h3>
                    <p className="text-gray-600 font-light">
                      Simply send your photos via WhatsApp. No apps to download, 
                      no complex interfaces. Just simple, elegant results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-light text-primary mb-2">Client Exclusive</h3>
                    <p className="text-gray-600 font-light">
                      Available only to Beauty Machine IRL clients as a complimentary service. 
                      Book a session to unlock access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/book"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 text-center"
                >
                  {appContent.cta}
                </a>
                <a
                  href="/service"
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 text-center"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">AI-Powered</h3>
              <p className="text-gray-600 font-light text-sm">
                Advanced machine learning for natural-looking enhancements
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">Fast Processing</h3>
              <p className="text-gray-600 font-light text-sm">
                Get your enhanced portraits within minutes
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">Privacy First</h3>
              <p className="text-gray-600 font-light text-sm">
                Your photos are processed securely and never stored
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-light text-primary mb-2">Premium Quality</h3>
              <p className="text-gray-600 font-light text-sm">
                High-resolution results perfect for professional use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 