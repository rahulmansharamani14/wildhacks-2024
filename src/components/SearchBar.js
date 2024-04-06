// SearchBar.js
import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button className="search-button"><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBar;