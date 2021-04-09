import React from 'react'
import DisneyCarousel from '../components/DisneyCarousel'
import DisneyNavbar from '../components/DisneyNavbar'
import DisneyCards from '../components/DisneyCards'
import DisneyCreditCards from '../components/DisneyCreditCard'
import DisneyRides from '../components/DisneyRides'


export default function Home() {
  return (
    <div>
      <DisneyNavbar />
      <DisneyCarousel />
      <DisneyCards />
      <DisneyRides />
      <DisneyCreditCards />
    </div>
  )
}
