
import './App.css';
import { Navbar , MovieList} from './components';
import { useState } from 'react';
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

      <MovieList 
      movieList={movies}
      isLoading={isLoading}
      />
    </div>
  );
}

export default App;
