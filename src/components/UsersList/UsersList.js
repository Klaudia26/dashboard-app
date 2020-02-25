import React from 'react';
import UserCard from '../UserCard/UserCard';

const UsersList = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </div>
  );
};
export default UsersList;
