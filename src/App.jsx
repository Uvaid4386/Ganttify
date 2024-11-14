import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Pricing/>
    <Contacts/>
    <Footer/>
    </div>
  )
}

export default App