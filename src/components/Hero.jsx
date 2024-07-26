import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Hero = () => {


  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.5 })
  }, [])

  return (
    <section data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Our Website</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none h-[450px] mt-6 ml-[220px]"  autoPlay muted playsInline>
            <source src="/public/assets/videos/introcom.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0  translate-y-20"
      >
        <a href="#" className="btn">Explore</a>
        <p className="font-normal text-xl">Explore all products in our shop</p>
      </div>
    </section>
  )
}

export default Hero