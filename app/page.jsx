import Navbar from '@/app/components/navbar'
import Bannersection from '@/app/components/bannersection'
import Brands from '@/app/components/brands'
import About from '@/app/components/about'
import Services from '@/app/components/services'
import Choose from '@/app/components/choose'
import Stats from '@/app/components/stats'
import TestimonialsSection from '@/app/components/testimonials'
import Pricing from '@/app/components/pricing'
import Footer from '@/app/components/footer' 
export default function Home() {

  return (
    <>
    <Navbar />
    <Bannersection />
    <Brands />
    <About />
    <Services />
    <Choose />
    <Stats />
    <TestimonialsSection />
    <Pricing />
    <Footer />
    </>
  );
}