import React, { useState, useEffect } from 'react'
import { Header } from './components/Header.jsx'
import { ImageSlider } from './components/ImageSlider.jsx'
import { OurServices } from './components/OurServices.jsx'
import { Introduction } from './components/Introduction.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { CompanyDetail } from './components/CompanyDetail.jsx'
import { Footer } from './components/Footer.jsx'
import { sliderImages } from './imageUrls'


export const HomePage = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after scrolling down 300px
      if (window.scrollY > 300) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <ImageSlider images={sliderImages} autoPlayInterval={2000} showText={true} />
        <Introduction />
        <OurServices />
        <HeroSection />
        <CompanyDetail />
      </main>
      <Footer />

      {/* Scroll Down Indicator */}
      <div
        className={`scroll-indicator ${showScrollIndicator ? 'visible' : 'hidden'}`}
        onClick={handleScrollClick}
        title="Scroll down"
      >
        <div className="scroll-indicator-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  )
}
