import Navbar from '@/app/components/navbar'
import Bannersection from '@/app/components/bannersection'
import Brands from '@/app/components/brands'
import About from '@/app/components/about'
import Services from '@/app/components/services'
export default function Home() {

  return (
    <>
    <Navbar />
    <Bannersection />
    <Brands />
    <About />
    <Services />
    <div className='p-5'></div>
    </>
  );
}