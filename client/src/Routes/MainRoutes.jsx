import React from 'react'
import {Routes, Route} from "react-router-dom"

import Home from '../components/Home'
import Login from '../components/Login'
//import ProductDetails from '../components/ProductDetails'
import Signup from '../components/Signup'
import Navbar from './Navbar'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            {/* <Route path="/product/:id" element={ <ProductDetails/>}/> */}
            <Route path='/signup' element={ <Signup/> }  />
            <Route path='/login' element={ <Login/> }  />

        </Routes>
      
    </div>
  )
}

export default MainRoutes