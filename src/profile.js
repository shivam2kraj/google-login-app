// Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <img src={user.imageUrl} alt="profile" />
    </div>
  );
};

export default Profile;
