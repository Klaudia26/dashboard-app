import React from 'react';
import styles from './FormField.module.scss';

const FormField = ({ field, handleChange }) => {
  return (
    <div className={styles.formItem}>
      <input
        type={field.type}
        onChange={handleChange}
        value={field.value}
        name={field.name}
        placeholder=" "
        id={field.name}
        className={styles.input}
      />
      <label htmlFor={field.name} className={styles.label}>
        {field.label}
      </label>
    </div>
  );
};
export default FormField;
