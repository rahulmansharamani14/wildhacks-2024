import React, { useState } from 'react';
import './App.css';
import logo from './img/logo.png';


// Modal component

const Modal = ({ onClose }) => {
  // function to alert on click
  const handleClick = () => {
    alert('Donated!');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h1>Title 1</h1>
          <p>Description: description 1</p>
          <p>Location: location 1</p>
          <p>Contact: contact 1</p>
          {/* Add features */}
          <div className="buttons">
            <button className="close-btn" onClick={onClose}>Close</button>
            <button className="donate-btn" onClick={handleClick}>Donate</button> {/* Donate button */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>X-Fundraiser App</h1>
    </header>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; X-Fundraiser</p>
    </footer>
  );
};

// SearchBar component
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      {/* Add any other search options or buttons here */}
    </div>
  );
};

const Card = ({ title, description, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card" onClick={openModal}>
      <img src={"https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png"} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      {showModal && <Modal onClose={closeModal} />} {/* Render the modal */}
    </div>
  );
};


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
      <SearchBar />
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
