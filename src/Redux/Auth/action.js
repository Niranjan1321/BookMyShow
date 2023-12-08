import { AUTH_CHECK, BOOKINGS_DETAILS, MOVIES_LIST, MOVIE_DETAILS, SET_LOADING } from "./actionTypes";


export const authStatus = (payload) => ({
    type : AUTH_CHECK,
    payload
})

export const moviesList = (payload) => ({
    type : MOVIES_LIST,
    payload
})

export const moviesDetails = (payload) => ({
    type : MOVIE_DETAILS,
    payload
})

export const bookingsDetails = (payload) => (
    {
        type : BOOKINGS_DETAILS,
        payload
    }
)

export const setLoading = () => ({
    type : SET_LOADING
})

export const fetch_login = (payload) => (dispatch) => {
    
    dispatch(setLoading())
    fetch('https://reqres.in/api/login', {
        method:"POST",
        headers:{
            "Content-Type":"application/Json"
        },
        body: JSON.stringify(payload)
    })
    .then(res=> res.json())
    .then(res=> res.token ? dispatch(authStatus(true)) : dispatch(authStatus(false)))
}

export const fetch_movies = () => (dispatch) => {

    dispatch(setLoading())
    fetch('http://localhost:8080/movies')
    .then(res=>res.json())
    .then(res=>dispatch(moviesList(res)))

}

export const fetch_movieDetails = (payload) => (dispatch) => {

    dispatch(setLoading())
    fetch(`http://localhost:8080/movies?id=${payload}`)
    .then(res=> res.json())
    .then(res=> dispatch(moviesDetails(res[0])))
}

export const fetch_bookingsDetails = () => (dispatch) => {

    dispatch(setLoading())
    fetch(`http://localhost:8080/moviesBooked`)
    .then(res=> res.json())
    .then(res=> dispatch(bookingsDetails(res)))
}
