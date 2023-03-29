import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="image-modal">
      <img src={image.path} alt={image.caption} />
      <div className="image-text">{image.caption}</div>
      <button className="prev-button" onClick={onPrev}>Prev</button>
      <button className="next-button" onClick={onNext}>Next</button>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default ImageModal;
