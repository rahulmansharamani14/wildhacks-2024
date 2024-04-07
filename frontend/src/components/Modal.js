// Modal component
import "../styles/Modal.css";

const Modal = ({ onClose }) => {
  // function to alert on click
  const handleClick = () => {
    // redirect to payment page
    window.location.href = "/payment";
  };

  return (
    <div className="md-overlay" onClick={onClose}>
      <div className="md">
        <div className="md-content" onClick={(e) => e.stopPropagation()}>
          <img src="https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png" alt="Modal Image" className="md-image" /> {/* Image */}
          <h1>Title 1</h1>
          <p>Description: description 1</p>
          <p>Location: location 1</p>
          <p>Contact: contact 1</p>
          {/* Add features */}
          <div className="md-buttons">
            <button className="md-close-btn" onClick={onClose}>Close</button>
            <button className="md-donate-btn" onClick={handleClick}>Donate</button> {/* Donate button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
