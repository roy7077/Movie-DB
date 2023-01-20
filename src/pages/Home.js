import React from 'react'
import { Link } from "react-router-dom";
import "../style/home.css";
export default function Home() {
  return (
    <div>
      <Link to='movie-list'>
       <h1>Welcome to Movie-DB</h1>
       <h1>Click here to search for movies</h1>
       <button className="button-55" role="button">Click...</button>
      </Link>
    </div>
  )
}
