import Modal from 'react-modal';

const customStyles = {
  content: {
    padding: '0 0',
    border: 'none',
    borderRadius: '20px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '900px',
    height: '90vh',
    margin: 'auto',
    objectFit: 'contain',
    overflowY: 'hidden',
  },
};

Modal.setAppElement('#root');

export const ModalContainer = ({ url, isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={url} alt="img" height="100%" />
    </Modal>
  );
};
