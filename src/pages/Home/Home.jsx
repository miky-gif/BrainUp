import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import WhyChooseUs from './sections/WhyChooseUs'
import PopularFormations from './sections/PopularFormations'
import StatsSection from './sections/StatsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import GallerySection from './sections/GallerySection'
import PartnersSection from './sections/PartnersSection'
import ConcoursSection from './sections/ConcoursSection'
import CTASection from './sections/CTASection'

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <PopularFormations />
      <StatsSection />
      <TestimonialsSection />
      <GallerySection />
      <PartnersSection />
      <ConcoursSection />
      <CTASection />
    </div>
  )
}

export default Home
