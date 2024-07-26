import { Animal } from '../../services/api';
import { getAnimalType } from '../Utils';
import styles from '../ListItem/ListItem.module.css';

export interface AnimalsListItemProps {
  animal: Animal;
}

export function AnimalsListItem({ animal }: AnimalsListItemProps) {
  return (
    <>
      <div className={`${styles.searchResultsItemCell} ${styles.colOne}`}>
        {animal.name}
      </div>
      <div className={`${styles.searchResultsItemCell} ${styles.colTwo}`}>
        {animal.uid}
      </div>
      <div className={`${styles.searchResultsItemCell} ${styles.colThree}`}>
        {getAnimalType(animal)}
      </div>
    </>
  );
}
