import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
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
