import React from 'react';
import styles from './UserCard.module.scss';

const UserCard = ({ user, activeUser }) => {
  return (
    <div onClick={() => activeUser(user.id)} className={styles.userCard}>
      <ul className={styles.userCard__list}>
        <li className={styles.userCard__item}>
          <p>
            <span>Name: </span>
            {user.name}
          </p>
          <p>
            <span>Gender: </span>
            {user.gender}
          </p>
          <p>
            <span>Age: </span>
            {user.age}
          </p>
        </li>
      </ul>
    </div>
  );
};
export default UserCard;
