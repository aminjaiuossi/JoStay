import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Gallary from '../components/Gallary'
import Newsletter from '../components/Newsletter'
import TripTypes from '../components/TripTypes'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <TripTypes/>
        <FeatureDestination />
        <ExclusiveOffers />
        <Gallary />
        <Testimonial />
        <Newsletter />
    </>
  )
}

export default Home