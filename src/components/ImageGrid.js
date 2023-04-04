import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-block" onClick={() => onImageClick(index)}>
          <img src={image.path} className="image-item" />
          <figcaption className="image-caption">{image.caption}</figcaption>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
