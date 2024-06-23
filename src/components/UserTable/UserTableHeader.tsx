import React from 'react';

const UserTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default UserTableHeader;
