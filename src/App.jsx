import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import SectionFour from './components/SectionFour/SectionFour'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app-container'>
      <Header/>
      <HeroSection/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>
  )
}

export default App
