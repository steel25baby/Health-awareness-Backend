import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Hero from './Hero'
import About from './About'
import Sampleservices from './Sampleservices'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Sampleservices/>
    <Testimonials/>
    </>
  )
}

export default Home