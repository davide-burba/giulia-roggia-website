import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import ImageModal from './ImageModal';
import "./PortfolioPage.css"

const images = [
  { path: '/images/001.jpg', caption: 'Image 01' },
  { path: '/images/002.jpg', caption: 'Image 02' },
  { path: '/images/003.jpg', caption: 'Image 03' },
  { path: '/images/004.jpg', caption: 'Image 04' },
  { path: '/images/005.jpg', caption: 'Image 05' },
  { path: '/images/006.jpg', caption: 'Image 06' },
  { path: '/images/007.jpg', caption: 'Image 07' },
  { path: '/images/008.jpg', caption: 'Image 08' },
  { path: '/images/009.jpg', caption: 'Image 09' },
  { path: '/images/010.jpg', caption: 'Image 10' },
  { path: '/images/011.jpg', caption: 'Image 11' },
  { path: '/images/012.jpg', caption: 'Image 12' },
];



const PortfolioPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setModalVisible(false);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className='portfolio-page'>
    <h2>Portfolio</h2>  
      <ImageGrid images={images} onImageClick={handleImageClick} />
      {modalVisible && selectedImageIndex !== null && (
        <ImageModal
          image={images[selectedImageIndex]}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
};

export default PortfolioPage;
