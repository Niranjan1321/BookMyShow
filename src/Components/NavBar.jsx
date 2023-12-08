import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const {authenticated} = useSelector(state=> state)

  const handleAuthenticated = () => {
    window.location.reload();
  } 

  return (
    <div className='NavBar'>
      <h1> <Link to='/'> Home </Link></h1>
      <h1> {authenticated ? <h3 onClick={handleAuthenticated}> LOGOUT </h3> : <Link to='/login'> LOGIN </Link> }</h1>
      <h1> <Link to='/bookings'> BOOKINGS </Link></h1>
    </div>
  )
}

export default NavBar
