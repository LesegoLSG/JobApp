import React from 'react'
import NavBar from '../../Components/Header/NavBar'
import Hero from '../../Components/Hero/Hero'
import OurServices from '../../Components/OurServices/OurServices'
import Jobs from '../../Components/Jobs/Jobs'
import Contact from '../../Components/Contact.jsx/Contact'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <OurServices/>
        <Jobs/>
        <Contact/>
    </div>
  )
}

export default HomePage