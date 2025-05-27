import HeroSection from '@/components/home/HeroSection'
import IntroEditorial from '@/components/home/IntroEditorial'
import EditorialGallery from '@/components/home/EditorialGallery'
import CityContext from '@/components/home/CityContext'
import BookingButton from '@/components/home/BookingButton'

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <IntroEditorial />
      <EditorialGallery />
      <CityContext />
      <BookingButton />
    </div>
  )
}
