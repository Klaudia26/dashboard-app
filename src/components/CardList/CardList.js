import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

const CardList = ({ pictures, selectCard, isSelected }) => {
  return (
    <div className={styles.cardList}>
      {pictures.map((picture) => {
        return (
          <Card
            picture={picture}
            key={picture.id}
            selectCard={selectCard}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};
export default CardList;
