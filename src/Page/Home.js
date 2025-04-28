import React from 'react'
import Offer from '../components/Offer'
import Hero from '../components/Hero'
import Exper from '../components/Exper'
import View from '../components/View'
import Amount from '../components/Amount'


function Home() {
  return (
    <div>
     <Offer />
      <Hero/>
      <br/>
      <Exper/>
      <View/>
      <Amount/>
      
    </div>
  )
}

export default Home