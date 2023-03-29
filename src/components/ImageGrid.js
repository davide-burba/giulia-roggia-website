import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item" onClick={() => onImageClick(index)}>
          <img src={image.path} alt={image.caption} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
