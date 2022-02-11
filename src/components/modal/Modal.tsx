import { useState } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: any[] | any; //TODO: component types?
}

export const Modal = ({ children }: ModalProps) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show modal</button>
      {shouldShow && (
        <div
          className={styles.modalBackground}
          onClick={() => setShouldShow(false)}
        >
          <div
            className={styles.modalBody}
            onClick={(e) => e.stopPropagation()} //stop the event from bubbling up and closing the modal
          >
            <button onClick={() => setShouldShow(false)}>Hide modal</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
