import React from 'react';
import UserCard from '../UserCard/UserCard';

const UsersList = (props) => {
  return (
    <div>
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
