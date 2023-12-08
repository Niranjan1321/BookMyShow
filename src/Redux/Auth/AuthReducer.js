import { AUTH_CHECK, BOOKINGS_DETAILS, MOVIES_LIST, MOVIE_DETAILS, SET_LOADING } from "./actionTypes"

const initialState = {
    authenticated : false,
    movies : [],
    movie : [],
    bookings : [],
    loading : false
}

export const authReducer = (store = initialState, {type, payload}) => {

    switch(type) {
        case AUTH_CHECK : {
            return {...store, authenticated : payload}
        }
        case MOVIES_LIST : {
            return {...store, movies : payload, loading: false}
        }
        case MOVIE_DETAILS : {
            return {...store, movie : payload, loading: false}
        }
        case BOOKINGS_DETAILS : {
            return {...store, bookings : payload, loading: false}
        }
        case SET_LOADING : {
            return {...store, loading: true}
        }
        default: return store
    }
}



