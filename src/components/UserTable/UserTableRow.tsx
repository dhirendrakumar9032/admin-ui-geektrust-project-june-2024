import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Users } from '../../types';
import styles from '../index.module.scss';
import { IoSaveOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';

interface UserTableRowProps {
  user: Users;
  isSelected: boolean;
  isEditing: boolean;
  onSelectUser: (id: string) => void;
  onEditUser: (id: string) => void;
  onDeleteUser: (id: string, name: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onEditChange: (e: React.ChangeEvent<HTMLInputElement>, field: keyof Users) => void;
  editUserData: Users | null;
}

const UserTableRow: React.FC<UserTableRowProps> = ({
  user,
  isSelected,
  isEditing,
  onSelectUser,
  onEditUser,
  onDeleteUser,
  onSaveEdit,
  onCancelEdit,
  onEditChange,
  editUserData,
}) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelectUser(user.id)}
        />
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editUserData?.name || ''}
            onChange={e => onEditChange(e, 'name')}
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="email"
            value={editUserData?.email || ''}
            onChange={e => onEditChange(e, 'email')}
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editUserData?.role || ''}
            onChange={e => onEditChange(e, 'role')}
          />
        ) : (
          user.role
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className={styles.save} onClick={onSaveEdit}>
            <IoSaveOutline />
            </button>
            <button className={styles.cancel} onClick={onCancelEdit}>
            <MdOutlineCancel />
            </button>
          </>
        ) : (
          <>
            <button className={styles.edit} onClick={() => onEditUser(user.id)}>
              <FiEdit />
            </button>
            <button
              className={styles.delete}
              onClick={() => onDeleteUser(user.id, user.name)}
            >
              <AiOutlineDelete />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserTableRow;
