
import './App.css';
import { Navbar } from './components';
import { useState } from 'react';
import axios from 'axios';


const API_BASE_URL=" http://www.omdbapi.com";

function App() {
  const [movies,setMovies]=useState([]);
  const [inputValue,setInputValue]=useState("");

  const search= async(e)=>{
    if(e.code==="Enter")
    {
      const response= await axios.get(
        API_BASE_URL+"/?s="+inputValue+"&apikey=2795e49d"
      );

      setMovies(response.data.search);
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
    </div>
  );
}

export default App;
