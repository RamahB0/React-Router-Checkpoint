import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={"/movie/" + movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '200px',
        cursor: 'pointer',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        display: 'inline-block',
        verticalAlign: 'top'
      }}>
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200x250?text=No+Image'; }}
        />
        <h3 style={{ fontSize: '14px', margin: '10px 0 5px', color: '#333' }}>{movie.title}</h3>
        <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>Rating: {movie.rating}/10</p>
      </div>
    </Link>
  );
}

export default MovieCard;
