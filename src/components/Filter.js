import React from 'react';

function Filter({ filterTitle, setFilterTitle, filterRating, setFilterRating }) {
  return (
    <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={{ margin: '0 0 10px' }}>Filter Movies</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>By Title:</label>
          <input
            type="text"
            placeholder="Search by title..."
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Min Rating:</label>
          <input
            type="number"
            placeholder="Min rating..."
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            min="1"
            max="10"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '120px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
