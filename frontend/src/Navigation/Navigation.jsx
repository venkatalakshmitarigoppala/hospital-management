import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navigation.css"
export default function Navigation() {
  const patientId = localStorage.getItem("patientId")
  const isAdmin = localStorage.getItem("isAdmin")
  console.log(localStorage.getItem("isAdmin"))
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("patientId")
    localStorage.removeItem("isAdmin")
    navigate("/")
  }
  return isAdmin == "admin" ? (
    <div className='navbar'> {console.log("isAdmin", isAdmin)}
      <Link to="/">Home</Link>
      <Link to="/manage-appointments">Manage Appointments</Link>
      <Link onClick={logout}>Logout</Link>
    </div>
  ) :

    (
      <>
        {
          patientId ? (
            <div className='navbar'> {console.log("isAdmin", isAdmin)}
              <Link to="/">Home</Link>
              <Link onClick={logout}>Logout</Link>
            </div>
          ) : (
            <div className='navbar'>
              <Link to="/">Home</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )
        }
      </>
    )
}