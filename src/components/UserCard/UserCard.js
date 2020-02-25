import React from 'react';

const UserCard = ({ user, activeUser }) => {
  return (
    <div onClick={() => activeUser(user.id)}>
      <ul>
        <li>
          <p>{user.name}</p>
          <p>{user.gender}</p>
          <p>{user.age}</p>
        </li>
      </ul>
    </div>
  );
};
export default UserCard;
