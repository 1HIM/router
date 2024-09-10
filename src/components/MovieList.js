import React from 'react';
import MovieCard from './MovieCard';
import { movies } from '../db/Movies';

const MovieList = () => {
  return (
    <section>
      <div className="movie-ticket-book">
      </div>

      <div className="filter-search-box">
      </div>

      <div className="movie-card-section">
        {
          movies.map((el) => <MovieCard key={el.title} el={el} />)
        }
      </div>

      <div className="show">
      </div>
    </section>
  );
};

export default MovieList;
