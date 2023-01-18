import React from 'react'
import MovieCard from './MovieCard';

import '../style/movie-list.css';

export default function MovieList({movieList,isLoading}) {
 
    if(isLoading)
    {
        return "Loading movie please wait !!";
    }
    else{

        return (
          <div className="movie-list">
          {movieList.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
          );

    }
  
}


