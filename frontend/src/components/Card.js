import { useState } from "react";
import Modal from "./Modal";
import "../styles/Card.css";
const Card = ({ title, description, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="list-card" onClick={openModal}>
      <img src={"https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png"} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      {showModal && <Modal onClose={closeModal} />} {/* Render the modal */}
    </div>
  );
};

export default Card;