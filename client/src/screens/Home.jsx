import React from 'react'
import DisneyCarousel from '../components/DisneyCarousel'
import DisneyNavbar from '../components/DisneyNavbar'
import DisneyCreditCards from '../components/DisneyCreditCard'
import DisneyRides from '../components/DisneyRides'
import DisneyPhotos from '../components/DisneyPhotos'
import AllParks from './AllParks'


export default function Home() {
  return (
    <div>
      <DisneyNavbar />
      <DisneyCarousel />
      <AllParks />
      {/* <DisneyRides /> */}
      <DisneyCreditCards />
      <DisneyPhotos />
    </div>
  )
}
