import { Animal } from '../../services/api';
import styles from './SearchResultsItem.module.css';

export interface SearchResultsItemProps {
  animal: Animal;
  key: string;
}

export function SearchResultsItem(props: SearchResultsItemProps) {
  const getAnimalType = (animal: Animal) => {
    const keysToSkip: Array<keyof Animal> = ['uid', 'name'];
    return (Object.keys(animal) as Array<keyof Animal>)
      .filter((typeKey) => animal[typeKey] && !keysToSkip.includes(typeKey))
      .map((typeKey) =>
        typeKey.replace(/([a-z])([A-Z])/, `$1 $2`).toLowerCase(),
      )
      .join(', ');
  };
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
