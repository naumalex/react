import { useContext } from 'react';
import itemStyles from '../ListItem/ListItem.module.css';
import styles from './ListHeader.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export interface HeaderProps {
  columnHeaders: string[];
}

export function ListHeader({ columnHeaders }: HeaderProps) {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <li
      className={`${itemStyles.searchResultsItem} ${styles.listHeader} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      {columnHeaders.map((header) => (
        <div className={`${itemStyles.searchResultsItemCell}`} key={header}>
          {header}
        </div>
      ))}
    </li>
  );
}
