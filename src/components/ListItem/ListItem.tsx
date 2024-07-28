import { useContext } from 'react';
import styles from './ListItem.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export interface ItemProps<T> {
  data: T;
  renderDetails: React.FC<T>;
  key?: string;
  id?: string;
}

export function ListItem<T>({ data, renderDetails, id }: ItemProps<T>) {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <li
      key={id}
      id={id}
      className={`${styles.searchResultsItem} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      {renderDetails(data)}
    </li>
  );
}
