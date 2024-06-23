import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Users, UserTableProps } from '../../types';
import styles from '../index.module.scss';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import UserTableFooter from './UserTableFooter';


const UserTable: React.FC<UserTableProps> = ({ usersData, isLoading }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [editUserId, setEditUserId] = useState<string | null>(null);
  const [editUserData, setEditUserData] = useState<Users | null>(null);

  useEffect(() => {
    if (!isLoading && usersData) {
      setUsers(usersData);
    }
  }, [isLoading, usersData]);

  const handleSelectUser = (id: string) => {
    setSelectedUserIds(prevSelectedUserIds =>
      prevSelectedUserIds.includes(id)
        ? prevSelectedUserIds.filter(userId => userId !== id)
        : [...prevSelectedUserIds, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedUserIds.length) {
      setUsers(prevUsers => prevUsers.filter(user => !selectedUserIds.includes(user.id)));
      toast.success('Deleted selected users successfully!');
      setSelectedUserIds([]);
    }
  };

  const handleDeleteOneByOne = (id: string, name: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    toast.success(`Deleted user: ${name} successfully!`);
  };

  const handleEditUser = (id: string) => {
    const user = usersData.find(user => user.id === id);
    if (user) {
      setEditUserId(id);
      setEditUserData(user);
    }
  };

  const handleSaveEdit = () => {
    if (editUserData) {
      setUsers(prevUsers =>
        prevUsers.map(user => (user.id === editUserData.id ? editUserData : user))
      );
      toast.success('User updated successfully!');
      setEditUserId(null);
      setEditUserData(null);
    }
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditUserData(null);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Users) => {
    if (editUserData) {
      setEditUserData({
        ...editUserData,
        [field]: e.target.value,
      });
    }
  };

  return (
    <div className={styles.userTableContainer}>
      {isLoading ? (
        <div className={styles.loadingTable}>Loading User Table...</div>
      ) : (
        <div className={styles.userTable}>
          <table>
            <UserTableHeader />
            <tbody>
              {users?.map(user => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  isSelected={selectedUserIds.includes(user.id)}
                  isEditing={editUserId === user.id}
                  onSelectUser={handleSelectUser}
                  onEditUser={handleEditUser}
                  onDeleteUser={handleDeleteOneByOne}
                  onSaveEdit={handleSaveEdit}
                  onCancelEdit={handleCancelEdit}
                  onEditChange={handleEditChange}
                  editUserData={editUserData}
                />
              ))}
            </tbody>
          </table>
          <UserTableFooter onDeleteSelected={handleDeleteSelected} />
        </div>
      )}
    </div>
  );
};

export { UserTable };
