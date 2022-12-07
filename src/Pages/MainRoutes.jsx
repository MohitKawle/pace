import React from 'react'
import Homepage from './Homepage'
import Login from './Login'
import { Route,Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/homepage' element={<Homepage/>} />
      
  </Routes>
  )
}

export default MainRoutes