import React from 'react';
import styles from './Upload.module.scss';

const Upload = (props) => {
  return (
    <div>
      <button className={styles.button} onClick={props.openModal}>
        Uploaded
      </button>
    </div>
  );
};
export default Upload;
