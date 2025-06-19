import Modal from "react-modal";
import style from "./ModalWindow.module.css";

Modal.setAppElement("#root");

const ModalWindow = ({ modalIsOpen, closeModal, handleDelete }) => {
  const handleYesBtn = () => {
    handleDelete();
    closeModal();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modal}
      overlayClassName={style.overlay}
      contentLabel="Imgae Modal"
    >
      <button onClick={closeModal} className={style.closeBtn}>
        x
      </button>

      <div>
        <h3>Delete contact ?</h3>
        <button type="button" onClick={handleYesBtn}>
          yes
        </button>
        <button type="button" onClick={closeModal}>
          no
        </button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
