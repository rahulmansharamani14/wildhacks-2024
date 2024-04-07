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

export default Modal;