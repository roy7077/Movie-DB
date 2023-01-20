import React from 'react'
import "../style/movie-card.css";
import { Link } from "react-router-dom";

export default function MovieCard({movie}) {
  return (
    // <div className="movie-card">
    //     <img src={movie.Poster} alt={movie.Title} />
    //     <p>{movie.Title}</p>
    //     <p>Year: {movie.Year}</p>
    //   </div>

    <Link to={`/movie-list/${movie.imdbID}`}>

        <div className="movie-card">
          <img   src={movie.Poster}  alt={movie.Title} />
          
          <div class="desc">
          <p>{movie.Title}</p>
          <p>Year: {movie.Year}</p>
        </div>
        
      </div>
    </Link>
      
  );
}


