import USPList from '@/components/service/USPList'
import ServiceShowcase from '@/components/service/ServiceShowcase'
import PricingTable from '@/components/service/PricingTable'

export default function ServicePage() {
  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-3 bg-accent/10 text-accent font-lexend-giga text-sm font-medium rounded-elegant border border-accent/30 mb-8">
            Professional Services
          </span>
          <h1 className="text-5xl md:text-6xl font-lexend-giga font-light text-primary mb-6">
            Service & Pricing
          </h1>
          <p className="text-xl font-lexend font-light text-gray-700 max-w-3xl mx-auto">
            Professional makeup services tailored for Frankfurt&apos;s executive women. 
            Choose your package and experience luxury at your location.
          </p>
        </div>
      </div>
      
      <USPList />
      <ServiceShowcase />
      <PricingTable />
    </div>
  )
} 