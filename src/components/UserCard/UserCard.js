import React from 'react';
import styles from './UserCard.module.scss';

const UserCard = ({ user, activeUser, selectUser }) => {
  console.log(user);
  return (
    <div
      className={`${styles.userCard} ${
        selectUser === user.id ? styles.selected : ''
      }`}
      onClick={() => activeUser(user.id)}
    >
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
          <img src={user.imageUrl} alt="user" style={{ width: '4rem' }} />
        </li>
      </ul>
    </div>
  );
};
export default UserCard;
