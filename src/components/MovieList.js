import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
      {movies.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No movies found.</p>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default MovieList;
