import { Modal } from "../components/modal/Modal";
import { useState } from "react";

export const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <Modal shouldShow={showModal} onRequestClose={() => setShowModal(false)}>
        <span>Modal body..</span>
      </Modal>
    </>
  );
};
