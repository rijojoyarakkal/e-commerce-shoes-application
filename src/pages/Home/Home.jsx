import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Cards from './Card'
import "../Home/Cards.css"
function Home() {
  return (
    <div className='homepage'>
        <Header/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home