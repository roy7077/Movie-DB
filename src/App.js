
import './App.css';
import { Navbar } from './components';
import { useState } from 'react';

function App() {
  const [movies,setMovies]=useState([]);
  const [inputValue,setInputValue]=useState("");

  const search=(e)=>{
    if(e.code==="Enter")
    {
      console.log("I pressed enter !!");
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
