import React from 'react';
import './Modal.css';

const Modal = ({ label, children }) => {
  return (
    <div className="custom-modal">
      <span className="model-label">{label}</span>
      <div className="model-content">{children}</div>
    </div>
  );
};

export default Modal;
