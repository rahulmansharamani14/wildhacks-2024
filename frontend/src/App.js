import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './img/logo.png';
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Home from './pages/Home';



// App component
function App() {
  // Sample data for cards (replace with your own data)
  const cardsData = [
    { title: 'Result 1', description: 'Description for Result 1' },
    { title: 'Result 2', description: 'Description for Result 2' },
    { title: 'Result 3', description: 'Description for Result 3' },
    { title: 'Result 4', description: 'Description for Result 4' },
    { title: 'Result 5', description: 'Description for Result 5' },
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App;