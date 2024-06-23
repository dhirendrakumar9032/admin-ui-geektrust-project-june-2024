import React from 'react';
import styles from '../index.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { UserTableFooterProps } from '../../types';

const UserTableFooter: React.FC<UserTableFooterProps> = ({
  onDeleteSelected,
  currentPage,
  totalPages,
  onChangePage,
  onNextPage,
  onPreviousPage
}) => {
  const pageNumbers = [...Array(totalPages).keys()].map(n => n + 1);

  return (
    <div className={styles.footer}>
      <button onClick={onDeleteSelected} className={styles.deleteAll}>
        Delete Selected
      </button>
      <div className={styles.pagination}>
        <button
          className={styles.prevArrow}
          onClick={() => onChangePage(1)}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          className={styles.previous}
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft />
        </button>
        {pageNumbers.map(page => (
          <button
            key={page}
            className={`${styles.numbers} ${page === currentPage ? styles.active : ''}`}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={styles.next}
          onClick={onNextPage}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          className={styles.nextArrow}
          onClick={() => onChangePage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default UserTableFooter;
