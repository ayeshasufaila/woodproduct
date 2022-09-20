import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Empty from './components/empty/Empty';
import Home from './components/Pages/Home.js'
import Gallary from "./components/Gallary/Gallary.js"
import Service from './components/Service/Service';
import About from './components/about/About';
import Contact from './components/contact/Contact';
 
function App() {
  return (
      <div>
       
      <BrowserRouter>
      
        <Routes>
        <Route path='/' element={<Empty/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Gallary' element={<Gallary/>} />
          <Route path='/Service' element={<Service/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          </Routes>
      
          </BrowserRouter>
   
   
     
</div>

  )
}

export default App;
