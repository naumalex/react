import { Animal } from '../../services/api';
import { getAnimalType } from '../Utils';
import styles from './SearchResultsItem.module.css';

export interface SearchResultsItemProps {
  animal: Animal;
}

export function SearchResultsItem(props: SearchResultsItemProps) {
  const animal = props.animal;
  return (
    <li key={animal.uid} id={animal.uid} className={styles.searchResultsItem}>
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
