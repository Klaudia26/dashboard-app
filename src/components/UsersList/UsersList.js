import React from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.scss';

const UsersList = (props) => {
  return (
    <div className={styles.userList}>
      {props.users.map((user) => {
        return (
          <UserCard
            user={user}
            key={user.id}
            activeUser={props.activeUser}
            selectUser={props.selectUser}
          />
        );
      })}
    </div>
  );
};
export default UsersList;
