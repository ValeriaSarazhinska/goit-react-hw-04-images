import { Modal } from './Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(prevOpen => (!prevOpen));
  };

  return (
    <>
      <li onClick={toggleModal} className='imageGalleryItem'>
        <img
          className='imageGalleryItem-image'
          src={webformatURL}
          alt=''
        />
      </li>
      {open && (
        <Modal
          toggleModal={toggleModal}
          largeImageURL={largeImageURL}
        />
      )}
    </>
  );
};
