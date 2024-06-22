import React, { useEffect, useState } from 'react'
import { Users, UserTableProps } from '../types'
import styles from './index.module.scss'
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';


const UserTable: React.FC<UserTableProps> = ({usersData,isLoading}) => {

    const [users, setUsers] = useState<Users[]>([]);
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

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
        setUsers(prevUsers => prevUsers.filter(user => !selectedUserIds.includes(user.id)));
        setSelectedUserIds([]);
    };

    return (
        <div className={styles.userTableContainer}>
            {isLoading ? <div className={styles.loadingTable}>Loading User Table...</div> : <div className={styles.userTable}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedUserIds.includes(user.id)}
                                        onChange={() => handleSelectUser(user.id)}
                                    />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className={styles.editBtn}><FiEdit /></button>
                                    <button className={styles.deleteBtn}><AiOutlineDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.footer}>
                <button onClick={handleDeleteSelected}>Delete Selected</button>
                <div className="pagination">
                    <button>«</button>
                    <button>‹</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>›</button>
                    <button>»</button>
                </div>
                </div>
            </div>}
        </div>
    );
}

export { UserTable }
