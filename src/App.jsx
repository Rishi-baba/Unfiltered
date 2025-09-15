import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agences from './pages/Agences'
import Projects from './pages/Projects'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Navbar from './Components/Navigation/navbar'
import FullScreenNav from './Components/Navigation/FullScreenNav'

const App = () => {
  return (
    <div >
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/aboutus' element={<Aboutus/>} ></Route>
        <Route path='/agence' element={<Agences/>} ></Route>
        <Route path='/projects' element={<Projects/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>

      </Routes>
    </div>
  )
}

export default App