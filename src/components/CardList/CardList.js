import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

const CardList = ({ pictures }) => {
  return (
    <div className={styles.cardList}>
      {pictures.map((picture) => {
        return <Card picture={picture} key={picture.id} />;
      })}
    </div>
  );
};
export default CardList;
