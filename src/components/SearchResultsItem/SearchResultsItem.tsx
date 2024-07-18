import { Animal } from '../../services/api';
import { getAnimalType } from '../Utils';
import styles from './SearchResultsItem.module.css';

export interface SearchResultsItemProps {
  animal: Animal;
  key: string;
}

export function SearchResultsItem(props: SearchResultsItemProps) {
  const animal = props.animal;
  return (
    <li key={props.key} id={animal.uid} className={styles.searchResultsItem}>
      <div className={`${styles.searchResultsItemCell} ${styles.colOne}`}>
        {animal.name}
      </div>
      <div className={`${styles.searchResultsItemCell} ${styles.colTwo}`}>
        {animal.uid}
      </div>
      <div className={`${styles.searchResultsItemCell} ${styles.colThree}`}>
        {getAnimalType(animal)}
      </div>
    </li>
  );
}
