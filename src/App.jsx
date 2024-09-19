import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import PricingSection from "./sections/PricingSection";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(() => window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <>
      <Header isTopOfPage={isTopOfPage} />
      <HeroSection />
      <Features />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;
