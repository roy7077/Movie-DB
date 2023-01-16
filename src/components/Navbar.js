import React from 'react'
import '../style/navbar.css'

export default function Navbar({inputValue,setInputValue,search}) {
  //console.log(inputValue);
  return (
    
    <div className='navbar'>
      <span className='heading'>MOVIE-DB</span>
      <input 

      onChange={(e)=>{
        setInputValue(e.target.value);
      }}
      
      onKeyDown={search}
      type="text" 
      placeholder="search...." 
      className="search-bar"
      />

      
    </div>
  )
}
