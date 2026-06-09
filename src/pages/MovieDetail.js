import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h2>Movie not found</h2>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '16px' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#007bff',
          textDecoration: 'none',
          fontSize: '16px',
          padding: '8px 16px',
          border: '1px solid #007bff',
          borderRadius: '4px'
        }}
      >
        Back to Home
      </Link>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{ width: '250px', height: '370px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/250x370?text=No+Image'; }}
        />

        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1 style={{ color: '#333', marginTop: 0 }}>{movie.title}</h1>
          <p style={{ fontSize: '18px', color: '#f39c12', fontWeight: 'bold' }}>
            Rating: {movie.rating}/10
          </p>
          <h3 style={{ color: '#555' }}>Description</h3>
          <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px' }}>{movie.description}</p>
        </div>
      </div>

      {movie.trailer && (
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#333' }}>Trailer</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe
              src={movie.trailer}
              title={movie.title + " trailer"}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
