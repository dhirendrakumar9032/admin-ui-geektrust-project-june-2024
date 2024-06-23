import React from 'react';
import styles from '../index.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

interface UserTableFooterProps {
  onDeleteSelected: () => void;
}

const UserTableFooter: React.FC<UserTableFooterProps> = ({ onDeleteSelected }) => {
  return (
    <div className={styles.footer}>
      <button onClick={onDeleteSelected} className={styles.deleteAll}>
        Delete Selected
      </button>
      <div className={styles.pagination}>
        <button className={styles.prevArrow}><MdOutlineKeyboardDoubleArrowLeft /></button>
        <button className={styles.next}><MdKeyboardArrowLeft /></button>
        <button className={styles.numbers}>1</button>
        <button className={styles.numbers}>2</button>
        <button className={styles.numbers}>3</button>
        <button className={styles.numbers}>4</button>
        <button className={styles.numbers}>5</button>
        <button className={styles.previous}><MdKeyboardArrowRight /></button>
        <button className={styles.nextArrow}><MdOutlineKeyboardDoubleArrowRight /></button>
      </div>
    </div>
  );
};

export default UserTableFooter;
