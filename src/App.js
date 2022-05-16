
import './App.css';
import {Route,Routes} from 'react-router-dom'
import {useState} from 'react'
import CNavbar from './components/CNavbar/CNavbar'
import MovieList from './components/MovieList/MovieList'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Stars from './components/Stars/Stars'
import Cmodal from './components/Cmodal/Cmodal'
function App() {
 const [search,setSearch]=useState('')
 const [rating,setRating]=useState(5)
 const [getMovie,setGetMovie]=useState({})
  return (
    <div className="App"> 
 
    <CNavbar setSearch={setSearch}/>
    <Stars setRating={setRating}/>
    <Routes>
     
      <Route index element={<MovieList rating={rating} search={search} getMovie={getMovie}/>}/>
      <Route path='/Mymovie/:myID' element={<MovieDetails/>}/>
    </Routes>
    <Cmodal setGetMovie={setGetMovie}/>

    </div>
  );
}

export default App;

