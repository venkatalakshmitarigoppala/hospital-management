import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register/Register'
import Navigation from './Navigation/Navigation'
import Login from './Login/Login'
import Home from './Home/Home'
import ManageAppointments from './ManageAppointments/ManageAppointments'
export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/manage-appointments' element={<ManageAppointments/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}