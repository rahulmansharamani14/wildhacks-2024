import React from 'react';

function Modal({ onClose, title, description, location, contact }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.modalHeader}>
          <h2>{title}</h2>
          <button style={styles.closeButton} onClick={onClose}>X</button>
        </div>
        <div style={styles.modalBody}>
          <p>Description: {description}</p>
          <p>Location: {location}</p>
          <p>Contact: {contact}</p>
        </div>
        <div style={styles.modalFooter}>
          <button style={styles.actionButton} onClick={onClose}>Close</button>
          <button style={styles.actionButton}>Donate</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '80%',
    maxWidth: '500px'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  modalBody: {
    marginBottom: '10px'
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer'
  },
  actionButton: {
    marginLeft: '10px',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Modal;
