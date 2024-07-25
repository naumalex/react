import styles from './ListItem.module.css';

export interface ItemProps<T> {
  data: T;
  renderDetails: React.FC<T>;
  key?: string;
  id?: string;
}

export function ListItem<T>({ data, renderDetails, id }: ItemProps<T>) {
  return (
    <li key={id} id={id} className={styles.searchResultsItem}>
      {renderDetails(data)}
    </li>
  );
}
