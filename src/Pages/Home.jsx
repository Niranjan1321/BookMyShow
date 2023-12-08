import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetch_movies } from '../Redux/Auth/action'
import '../Styles/Home.css'
import {Link} from "react-router-dom"

export const Home = () => {

    const {authenticated, movies, loading} = useSelector(state=> state)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    React.useEffect(()=> {
        dispatch(fetch_movies())
        if(authenticated===false){
            navigate('/login')
        }
    }, [authenticated])


  return (
    <>
    {loading ? "Loading.." : 
    <div className='Home'>
    {
      movies.map((movie)=> 
     <div className='MovieCard' key={movie.id}>
      <img src={movie.poster_path} alt="" />
      <h1> {movie.title} </h1>
      <h1> <Link to = {`/details/${movie.id}`}> more details.. </Link></h1>
     </div>
      )
    }
  </div>}
    </>
  )
}

