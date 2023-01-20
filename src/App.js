
import './App.css';
import { Navbar , MovieList} from './components';
import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import MovieDetails from "./pages/MovieDetails";
import About from './pages/About';
import Home from './pages/Home';
import Movie from './pages/Movie';
import axios from 'axios';


const API_BASE_URL=" http://www.omdbapi.com";

function App() {
  const [movies,setMovies]=useState([]);
  const [inputValue,setInputValue]=useState("");
  const [isLoading,setLoading]=useState(false);

  const search= async(e)=>{
    if(e.code==="Enter")
    {
      setLoading(true);
      const response= await axios.get(
        API_BASE_URL+"/?s="+inputValue+"&apikey=2795e49d"
      );
      
      //console.log(response.data.Search);
      setMovies(response.data.Search);
      setLoading(false);
      //console.log(response.data.Search);
    }
  }
  return (
    <div className="App">
      <Navbar 
       search={search}
       inputValue={inputValue}
       setInputValue={setInputValue}
      />

      <Router>
        <Routes>
          <Route path='movie-list'
          element={<Movie movieList={movies} isLoading={isLoading}/>}
          />
          <Route path="/:search/:id" element={<MovieDetails />} />
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<Home/>} />

        </Routes>
      </Router>
      {/* <MovieList 
      movieList={movies}
      isLoading={isLoading}
      /> */}
    </div>
  );
}

export default App;
