import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../Styles/Bookings.css'
import { fetch_bookingsDetails } from '../Redux/Auth/action'

export const Bookings = () => {

    const {authenticated, bookings} = useSelector(state=> state)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    React.useEffect(()=> {
      dispatch(fetch_bookingsDetails())
        if(authenticated===false){
            navigate('/login')
        }
    }, [authenticated])

  return (
    <div className='Bookings'>
      {bookings.map(booking=> (
        <div className='Booking'>
          <h1>Booking name is {booking.name} <br />Booked seat is {booking.seat}</h1>
        </div>
      ))}
    </div>
  )
}

