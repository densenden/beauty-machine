export default function ImpressumPage() {
  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">
            Impressum
          </h1>
          <p className="text-xl font-light text-foreground">
            Legal notice according to German law (§5 TMG)
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Company Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                Company Information
              </h2>
              <div className="bg-gray-50 rounded-elegant p-6 space-y-3">
                <div>
                  <strong className="text-primary">Company:</strong><br />
                  <span className="text-foreground">sen.co UG (haftungsbeschränkt)</span>
                </div>
                <div>
                  <strong className="text-primary">Managing Director:</strong><br />
                  <span className="text-foreground">Denis Kochetkov</span>
                </div>
                <div>
                  <strong className="text-primary">Address:</strong><br />
                  <span className="text-foreground">
                    Mainzer Landstraße 123<br />
                    60329 Frankfurt am Main<br />
                    Germany
                  </span>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-elegant p-6 space-y-3">
                <div>
                  <strong className="text-primary">Email:</strong><br />
                  <span className="text-foreground">hello@beautymachine-irl.com</span>
                </div>
                <div>
                  <strong className="text-primary">Phone:</strong><br />
                  <span className="text-foreground">+49 69 123 456 789</span>
                </div>
                <div>
                  <strong className="text-primary">Website:</strong><br />
                  <span className="text-foreground">www.beautymachine-irl.com</span>
                </div>
              </div>
            </section>

            {/* Registration Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                Registration Information
              </h2>
              <div className="bg-gray-50 rounded-elegant p-6 space-y-3">
                <div>
                  <strong className="text-primary">Commercial Register:</strong><br />
                  <span className="text-foreground">Amtsgericht Frankfurt am Main</span>
                </div>
                <div>
                  <strong className="text-primary">Registration Number:</strong><br />
                  <span className="text-foreground">HRB 123456</span>
                </div>
                <div>
                  <strong className="text-primary">VAT ID:</strong><br />
                  <span className="text-foreground">DE123456789</span>
                </div>
              </div>
            </section>

            {/* Service Provider */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                Service Provider
              </h2>
              <div className="bg-gray-50 rounded-elegant p-6 space-y-3">
                <div>
                  <strong className="text-primary">Makeup Artist:</strong><br />
                  <span className="text-foreground">Olga Kreuzer</span>
                </div>
                <div>
                  <strong className="text-primary">Service:</strong><br />
                  <span className="text-foreground">Mobile makeup services for executive women</span>
                </div>
                <div>
                  <strong className="text-primary">Service Area:</strong><br />
                  <span className="text-foreground">Frankfurt am Main and surrounding areas</span>
                </div>
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                Liability Disclaimer
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  <strong className="text-primary">Content:</strong> The contents of our pages have been created with the utmost care. 
                  However, we cannot guarantee the contents&apos; accuracy, completeness or topicality.
                </p>
                <p>
                  <strong className="text-primary">Links:</strong> Our website contains links to external websites over which we have no control. 
                  Therefore, we cannot accept any liability for these external contents.
                </p>
                <p>
                  <strong className="text-primary">Copyright:</strong> The content and works on these pages created by the site operators are subject to German copyright law.
                </p>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-3xl font-light text-primary mb-6">
                Data Protection
              </h2>
              <div className="text-foreground">
                <p>
                  Information about data processing can be found in our{' '}
                  <a href="/legal/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
} 