import HeroSection from '@/components/home/HeroSection'
import IntroEditorial from '@/components/home/IntroEditorial'
import CityContext from '@/components/home/CityContext'
import BookingButton from '@/components/home/BookingButton'

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <IntroEditorial />
      <CityContext />
      <BookingButton />
    </div>
  )
}
