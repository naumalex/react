import { MouseEvent } from 'react';
import { Page } from '../../services/api';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: Page;
  setActivePage: (pageNumber: string | null) => void;
}

export function Pagination(props: PaginationProps) {
  const paginationNumbers = [];
  const pagesInfo = props.page;
  const clickPageButtonsHandler = (e: MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      props.setActivePage(e.target.textContent);
    }
  };

  for (let i = 1; i <= pagesInfo.totalPages; i++) {
    paginationNumbers.push(i);
  }
  return (
    <div className={styles.pagination} onClick={clickPageButtonsHandler}>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${props.page.pageNumber + 1 === pageNumber ? styles.active : ''}`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
