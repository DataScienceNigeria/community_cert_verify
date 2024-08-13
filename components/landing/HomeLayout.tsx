import React from 'react'
import HeaderNav from './Header'
import { Hero } from './Hero'
import Purpose from './Purpose'
import Security from './Security'
import Footer from './Footer'
import End from './End'


const Layout = ( ) => {
  return (
    <>
    <HeaderNav />
      <div className='container'>
      <Hero />
      <Purpose />
      <Security />
      <Footer />
    </div>
    <End /> 
    </>
    
  )
}

export default Layout