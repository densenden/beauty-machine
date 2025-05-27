import USPList from '@/components/service/USPList'
import PricingTable from '@/components/service/PricingTable'

export default function ServicePage() {
  return (
    <div className="pt-16">
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-thin text-primary mb-6">
            Service & Pricing
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Professional makeup services tailored for Frankfurt&apos;s executive women. 
            Choose your package and experience luxury at your location.
          </p>
        </div>
      </div>
      
      <USPList />
      <PricingTable />
    </div>
  )
} 