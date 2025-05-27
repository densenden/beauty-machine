export default function TermsPage() {
  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xl font-light text-foreground">
            Terms and Conditions for Beauty Machine IRL Services
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* General Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                1. General Information
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  These terms and conditions apply to all services provided by sen.co UG through 
                  Beauty Machine IRL, a mobile makeup service for executive women in Frankfurt.
                </p>
                <p>
                  <strong className="text-primary">Service Provider:</strong> Olga Kreuzer<br />
                  <strong className="text-primary">Operated by:</strong> sen.co UG (haftungsbeschränkt)<br />
                  <strong className="text-primary">Contact:</strong> hello@beautymachine-irl.com
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                2. Services
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  Beauty Machine IRL offers professional mobile makeup services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Executive Touch (45 minutes) - €89</li>
                  <li>Boardroom Ready (60 minutes) - €129</li>
                  <li>Power Glam (90 minutes) - €189</li>
                  <li>Additional services: Hair touch-up (+€49), Express booking (+€30)</li>
                </ul>
                <p>
                  All services are provided at the client&apos;s location within Frankfurt am Main.
                </p>
              </div>
            </section>

            {/* Booking and Payment */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                3. Booking and Payment
              </h2>
              <div className="text-foreground space-y-4">
                <h3 className="text-xl font-medium text-primary">Booking Process</h3>
                <p>
                  Bookings can be made through our website or by direct contact. 
                  All appointments are subject to availability and confirmation.
                </p>
                
                <h3 className="text-xl font-medium text-primary">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full payment is required in advance via Stripe</li>
                  <li>Payment must be completed to confirm the booking</li>
                  <li>All prices include VAT where applicable</li>
                  <li>No cash payments are accepted</li>
                </ul>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                4. Cancellation and Rescheduling
              </h2>
              <div className="text-foreground space-y-4">
                <h3 className="text-xl font-medium text-primary">Client Cancellation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cancellations with 48+ hours notice: Full refund</li>
                  <li>Cancellations with 24-48 hours notice: 50% refund</li>
                  <li>Cancellations with less than 24 hours notice: No refund</li>
                  <li>Rescheduling is free with 24+ hours notice</li>
                </ul>
                
                <h3 className="text-xl font-medium text-primary">Service Provider Cancellation</h3>
                <p>
                  If we need to cancel due to illness or emergency, you will receive a full refund 
                  or can reschedule at no additional cost.
                </p>
              </div>
            </section>

            {/* Service Conditions */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                5. Service Conditions
              </h2>
              <div className="text-foreground space-y-4">
                <h3 className="text-xl font-medium text-primary">Client Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate contact information and address</li>
                  <li>Be available at the agreed time and location</li>
                  <li>Inform us of any allergies or skin sensitivities</li>
                  <li>Provide adequate lighting and mirror access</li>
                </ul>
                
                <h3 className="text-xl font-medium text-primary">Service Area</h3>
                <p>
                  Services are provided within Frankfurt am Main. Additional travel fees may apply 
                  for locations outside the city center.
                </p>
              </div>
            </section>

            {/* Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                6. Liability and Insurance
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  We maintain professional liability insurance for our services. 
                  Our liability is limited to cases of gross negligence or intentional misconduct.
                </p>
                <p>
                  Clients with known allergies or sensitivities must inform us before the appointment. 
                  We are not liable for reactions to products if such information is not disclosed.
                </p>
              </div>
            </section>

            {/* AI Service */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                7. BeautyMachine.AI Service
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  Our AI-enhanced photo service is available exclusively to clients who have booked 
                  a makeup session. Terms for this service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Photos are processed temporarily and automatically deleted</li>
                  <li>Service is provided via WhatsApp Business</li>
                  <li>No guarantees on processing results</li>
                  <li>Client owns all rights to original and enhanced photos</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <h2 className="text-3xl font-light text-primary mb-6">
                8. Data Protection
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  Personal data is processed in accordance with our{' '}
                  <a href="/legal/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and applicable data protection laws.
                </p>
              </div>
            </section>

            {/* Final Provisions */}
            <section>
              <h2 className="text-3xl font-light text-primary mb-6">
                9. Final Provisions
              </h2>
              <div className="text-foreground space-y-4">
                <p>
                  <strong className="text-primary">Applicable Law:</strong> These terms are governed by German law.
                </p>
                <p>
                  <strong className="text-primary">Jurisdiction:</strong> Frankfurt am Main, Germany.
                </p>
                <p>
                  <strong className="text-primary">Severability:</strong> If any provision is invalid, 
                  the remaining terms remain in effect.
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