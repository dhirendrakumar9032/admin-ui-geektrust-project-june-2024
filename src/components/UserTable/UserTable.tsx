import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Users, UserTableProps } from '../../types';
import styles from '../index.module.scss';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import UserTableFooter from './UserTableFooter';
import { useUserTableStore } from '../../store';

const UserTable: React.FC<UserTableProps> = ({ usersData, isLoading }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [editUserId, setEditUserId] = useState<string | null>(null);
  const [editUserData, setEditUserData] = useState<Users | null>(null);
  const {currentPage, setCurrentPage} = useUserTableStore();

  const rowsPerPage = 10;
  const totalPages = Math.ceil(users.length / rowsPerPage);

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

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedUsers = users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className={styles.userTableContainer}>
      {isLoading ? (
        <div className={styles.loadingTable}>Loading User Table...</div>
      ) : (
        <div className={styles.userTable}>
          <table>
            <UserTableHeader />
            <tbody>
              {displayedUsers.map(user => (
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
          <UserTableFooter
            onDeleteSelected={handleDeleteSelected}
            usersData={usersData}
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={handleChangePage}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </div>
      )}
    </div>
  );
};

export { UserTable };
