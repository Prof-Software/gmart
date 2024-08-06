import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Intro from '../components/Intro'
import ActiveOffers from '../components/ActiveOffers'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Intro/>
        <ActiveOffers/>
        <Footer/>
    </div>
  )
}

export default Home