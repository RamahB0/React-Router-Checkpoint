import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './pages/MovieDetail';

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.',
    posterURL: 'https://via.placeholder.com/200x300?text=Inception',
    rating: 9,
    trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.',
    posterURL: 'https://via.placeholder.com/200x300?text=Dark+Knight',
    rating: 10,
    trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY'
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'Explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
    posterURL: 'https://via.placeholder.com/200x300?text=Interstellar',
    rating: 8,
    trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E'
  }
];

function HomePage() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '', trailer: '' });

  const handleAddMovie = () => {
    if (!newMovie.title) return;
    setMovies([...movies, { ...newMovie, id: Date.now(), rating: Number(newMovie.rating) }]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '', trailer: '' });
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= Number(filterRating));
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Movie App</h1>
      <Filter filterTitle={filterTitle} setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Add New Movie</h2>
        <input placeholder="Title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }} />
        <input placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }} />
        <input placeholder="Poster URL" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }} />
        <input placeholder="Rating (1-10)" type="number" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }} />
        <input placeholder="Trailer embed URL" value={newMovie.trailer} onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })} style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }} />
        <button onClick={handleAddMovie} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Movie</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail movies={initialMovies} />} />
      </Routes>
    </Router>
  );
}

export default App;
