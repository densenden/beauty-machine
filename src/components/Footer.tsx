import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-light mb-4">Beauty Machine IRL</h3>
            <p className="text-sm font-thin text-white/80">
              Professional mobile makeup services for executive women in Frankfurt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/service" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Service & Pricing
              </Link>
              <Link href="/book" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Book Appointment
              </Link>
              <Link href="/about" className="block text-sm text-white/80 hover:text-accent transition-colors">
                About Olga
              </Link>
              <Link href="/contact" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-light mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/legal/impressum" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Impressum
              </Link>
              <Link href="/legal/privacy" className="block text-sm text-white/80 hover:text-accent transition-colors">
                Datenschutz
              </Link>
              <Link href="/legal/terms" className="block text-sm text-white/80 hover:text-accent transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} sen.co UG, Frankfurt am Main. Service by Olga Kreuzer.
          </p>
        </div>
      </div>
    </footer>
  )
} 