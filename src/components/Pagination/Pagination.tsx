import { MouseEvent, useMemo } from 'react';
import styles from './Pagination.module.css';
import { Page } from '../../services/api.types';

interface PaginationProps {
  page: Page;
  setActivePage: (pageNumber: string | null) => void;
}

export function Pagination({ page, setActivePage }: PaginationProps) {
  const pager = useMemo(
    () => new Array(page.totalPages).fill(null),
    [page.totalPages],
  );

  const clickPageButtonsHandler = (e: MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      setActivePage(e.target.textContent);
    }
  };

  return (
    <div className={styles.pagination} onClick={clickPageButtonsHandler}>
      {pager.length > 1
        ? pager.map((_, index) => (
            <button
              key={index + 1}
              className={`${page.pageNumber === index ? styles.active : ''}`}
            >
              {index + 1}
            </button>
          ))
        : null}
    </div>
  );
}
