import itemStyles from '../ListItem/ListItem.module.css';
import styles from './ListHeader.module.css';

export interface HeaderProps {
  columnHeaders: string[];
}

export function ListHeader({ columnHeaders }: HeaderProps) {
  return (
    <li className={`${itemStyles.searchResultsItem} ${styles.listHeader}`}>
      {columnHeaders.map((header) => (
        <div className={`${itemStyles.searchResultsItemCell}`} key={header}>
          {header}
        </div>
      ))}
    </li>
  );
}
