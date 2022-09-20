import React from 'react'
import HomeHead from '../HomeHead'
import Material from '../Material.js'
import Work from '../Work.js'
import Aboutus from "../Aboutus.js"
import Question from '../Question/Question'

const Home = () => {
  return (
    <div>
      <HomeHead/>
      <Material/>
      <Work/>
      <Aboutus/>
      <Question/>
      
    </div>
  )
}

export default Home
