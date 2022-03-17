import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import Product from '../Products/Product'
import CompanyProfile from '../CompanyProfile/CompanyProfile'
import About from '../About/About'
import CompanyInfo from '../CompanyInfo/CompanyInfo'

function Home() {
  return (
    <>
      <HeroSection />
      <Product />
      <CompanyProfile />
      <About />
      <CompanyInfo />
      <Footer />
    </>
  )
}

export default Home