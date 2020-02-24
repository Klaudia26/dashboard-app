import React from 'react';
import styles from './Card.module.scss';
const Card = ({ picture, selectCard, isSelected }) => {
  return (
    <div
      className={`${styles.card} ${
        isSelected === picture.id ? styles.selected : ''
      }`}
      key={picture.id}
      onClick={() => selectCard(picture.id)}
    >
      <img src={picture.url} alt="img" className={styles.card__image} />
      <p className={styles.card__name}>{picture.name}</p>
      <p className={styles.card__date}>{picture.createdAt}</p>
    </div>
  );
};
export default Card;
