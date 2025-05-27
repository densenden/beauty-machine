export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">
            Datenschutzerklärung
          </h1>
          <p className="text-xl font-light text-foreground">
            Privacy Policy according to GDPR
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                1. Data Protection Overview
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  We take the protection of your personal data very seriously. We treat your personal data confidentially 
                  and in accordance with the statutory data protection regulations and this privacy policy.
                </p>
                <p>
                  <strong className="text-primary">Responsible for data processing:</strong><br />
                  sen.co UG (haftungsbeschränkt)<br />
                  Mainzer Landstraße 123<br />
                  60329 Frankfurt am Main<br />
                  Email: hello@beautymachine-irl.com
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                2. Data Collection and Processing
              </h2>
              <div className="text-foreground space-y-4">
                <h3 className="text-xl font-medium text-primary">Website Visits</h3>
                <p>
                  When you visit our website, our web server automatically collects information such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Date and time of access</li>
                  <li>Pages visited</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>
                <p>
                  This data is used for technical administration and to improve our service. 
                  Legal basis: Art. 6 para. 1 lit. f GDPR (legitimate interest).
                </p>
              </div>
            </section>

            {/* Contact Forms */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                3. Contact Forms and Booking
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  When you use our contact form or booking system, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Message content</li>
                  <li>Booking preferences</li>
                </ul>
                <p>
                  This data is used exclusively to process your inquiry and provide our services. 
                  Legal basis: Art. 6 para. 1 lit. b GDPR (contract processing).
                </p>
              </div>
            </section>

            {/* Payment Processing */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                4. Payment Processing
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  For payment processing, we use Stripe. When you make a payment, your payment data is processed directly by Stripe. 
                  We do not store your payment information on our servers.
                </p>
                <p>
                  <strong className="text-primary">Stripe Inc.</strong><br />
                  Privacy Policy: <a href="https://stripe.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    https://stripe.com/privacy
                  </a>
                </p>
              </div>
            </section>

            {/* WhatsApp Integration */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                5. WhatsApp Business Integration
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  Our AI-enhanced photo service uses WhatsApp Business API. When you use this service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your photos are processed temporarily for enhancement</li>
                  <li>Photos are automatically deleted after processing</li>
                                     <li>WhatsApp&apos;s privacy policy applies to message transmission</li>
                </ul>
                <p>
                  Legal basis: Art. 6 para. 1 lit. b GDPR (contract processing).
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                6. Your Rights
              </h2>
              <div className="text-foreground space-y-4">
                <p>You have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to information (Art. 15 GDPR)</li>
                  <li>Right to rectification (Art. 16 GDPR)</li>
                  <li>Right to erasure (Art. 17 GDPR)</li>
                  <li>Right to restriction of processing (Art. 18 GDPR)</li>
                  <li>Right to data portability (Art. 20 GDPR)</li>
                  <li>Right to object (Art. 21 GDPR)</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at: hello@beautymachine-irl.com
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                7. Data Security
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  We use appropriate technical and organizational measures to protect your data against 
                  unauthorized access, loss, or misuse. Our website uses SSL encryption for secure data transmission.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-3xl font-light text-primary mb-6">
                8. Updates to this Policy
              </h2>
              <div className="text-foreground">
                <p>
                  We may update this privacy policy from time to time. The current version is always available on our website.
                </p>
                <p className="mt-4">
                  <strong className="text-primary">Last updated:</strong> {new Date().toLocaleDateString('de-DE')}
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
} 