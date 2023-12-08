import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import {Home} from './Pages/Home'
import {Login} from './Pages/Login'
import {Bookings} from './Pages/Bookings'
import NavBar from './Components/NavBar';
import { MovieDetails } from './Components/MovieDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/details/:id' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
