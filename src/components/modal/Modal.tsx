import styles from "./Modal.module.scss";

interface ModalProps {
  shouldShow: boolean;
  onRequestClose?: () => void;
  children: any[] | any; //TODO: component types?
}

export const Modal = ({
  shouldShow,
  onRequestClose = () => undefined,
  children,
}: ModalProps) => {
  return shouldShow ? (
    <div className={styles.modalBackground} onClick={onRequestClose}>
      <div
        className={styles.modalBody}
        onClick={(e) => e.stopPropagation()} //stop the event from bubbling up and closing the modal
      >
        <button onClick={onRequestClose}>Hide modal</button>
        {children}
      </div>
    </div>
  ) : null;
};
