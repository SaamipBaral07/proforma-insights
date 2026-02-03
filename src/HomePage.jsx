import React from 'react'
import { Header } from './components/Header.jsx'
import { ImageSlider } from './components/ImageSlider.jsx'
import { OurServices } from './components/OurServices.jsx'
import { Introduction } from './components/Introduction.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { CompanyDetail } from './components/CompanyDetail.jsx'
import { Footer } from './components/Footer.jsx'
import { sliderImages } from './imageUrls'

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <ImageSlider images={sliderImages} autoPlayInterval={2000} showText={true} />
        <OurServices />
        <Introduction />
        <HeroSection />
        <CompanyDetail />
      </main>
      <Footer />
    </div>
  )
}
