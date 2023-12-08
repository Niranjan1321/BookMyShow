import React from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/MovieDetails.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_bookingsDetails, fetch_movieDetails } from '../Redux/Auth/action'

export const MovieDetails = () => {

const [name, setName] = React.useState('')
const [seat, setSeat] = React.useState('')
const [message, setMessage] = React.useState('')
const [counter, setCounter] = React.useState(0)

const {id} = useParams()
const dispatch = useDispatch()
const {movie , bookings, loading} = useSelector(state=> state)

const handleBooking = () => {
    const payload = {
        name, seat, movie_id : movie.id
    }
    fetch('http://localhost:8080/moviesBooked', {
        method:"POST", 
        body: JSON.stringify(payload),
        headers:{
            "Content-Type":"application/Json"
        }
    })
    .then(res=>res.json())
    .then(res=>dispatch(fetch_bookingsDetails()))
}

React.useEffect(()=> {
    dispatch(fetch_movieDetails(id)) 
    dispatch(fetch_bookingsDetails())
}, [message])

  return (
    <>
    {
        loading ? <h1>Loading</h1>:
        <>
        <div className='MovieDetails'>
        <img src={movie.poster_path} alt="" />
        <h1>{movie.title}</h1>
        <h2>{movie.original_language}</h2>
        <h2>{movie.release_date}</h2>
        <h3>{movie.overview}</h3>
        <h4>{movie.popularity}</h4>
        <h4>{movie.release_date}</h4>
        <h4>{movie.vote_average}</h4>
      <h4>{movie.vote_count}</h4>
    </div>
    {
        bookings?.filter((booking)=> booking.movie_id===movie.id)?.length==0 ? 
        <div key={movie.id}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=> {setName(e.target.value)}}  />
            <input type="text" placeholder='Enter Seat number' value={seat} onChange={(e)=> {setSeat(e.target.value)}}  />
            <button onClick={handleBooking}> Book Ticket </button>
        </div>
        :
        <button className=''><Link to='/bookings'>Show booking details</Link></button>
    }
        </>
    }
    </>
  )
}

