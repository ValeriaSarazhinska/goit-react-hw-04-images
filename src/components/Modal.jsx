import { useEffect } from 'react';

export const Modal = ({ toggleModal, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  const closeModal = event => {
    if (event.key === 'Escape') {
      toggleModal();
    }
  };
  return (
    <div onClick={toggleModal} className='overlay'>
      <div className='modal'>
        <img src={largeImageURL} alt='' />
      </div>
    </div>
  );
};
