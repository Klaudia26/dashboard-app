import React from 'react';
import styles from './Card.module.scss';
const Card = ({ picture }) => {
  return (
    <div className={styles.card} key={picture.id}>
      <img src={picture.url} alt="img" className={styles.card__image} />
      <p>{picture.name}</p>
      <p>{picture.createdAt}</p>
    </div>
  );
};
export default Card;
