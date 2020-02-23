import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.closeModal} className={styles.dimmer}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.header}>{props.header}</div>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.action}>{props.action}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
export default Modal;
