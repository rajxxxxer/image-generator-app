import React from 'react'
import Header from '../components/Header'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import Generatebtn from '../components/Generatebtn'

const Home = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(to bottom right, #fdfbfb, #ebedee)', // light subtle gradient
        color: '#1a1a1a' // default text color
      }}
    >
      <Header />
      <Description />
      <Testimonial />
      <Generatebtn/>
    </div>
  )
}

export default Home
