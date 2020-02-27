import React from 'react';
import styles from './UserCard.module.scss';

const UserCard = ({ user, activeUser }) => {
  return (
    <div onClick={() => activeUser(user.id)} className={styles.userCard}>
      <ul className={styles.userCard__list}>
        <li className={styles.userCard__item}>
          <p>{user.name}</p>
          <p>{user.surname}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.address}</p>
          <p>{user.website}</p>
          <p>{user.about}</p>
          <p>{user.dateOfBirth}</p>
          <p>{user.gender}</p>
        </li>
      </ul>
    </div>
  );
};
export default UserCard;
