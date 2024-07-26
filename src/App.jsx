import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import About from './components/About';
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <main className="w-full text-white bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Featured />
      <Features />
      <Footer />
    </main>
  );
}

export default App
