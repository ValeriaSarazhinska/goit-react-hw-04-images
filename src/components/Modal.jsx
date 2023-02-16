import { useEffect } from 'react';

export const Modal = ({ toggleModal, largeImageURL }) => {

  const closeModal = event => {
    if (event.key === 'Escape') {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  } );

  return (
    <div onClick={toggleModal} className='overlay'>
      <div className='modal'>
        <img src={largeImageURL} alt='tags' />
      </div>
    </div>
  );
};
