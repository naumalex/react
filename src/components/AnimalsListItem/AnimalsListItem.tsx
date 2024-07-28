import { getAnimalType } from '../Utils';
import styles from '../ListItem/ListItem.module.css';
import { Animal } from '../../services/api.types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSelectedItem,
  removeSelectItem,
} from '../../store/selectedItemsSlice';
import { RootState } from '../../store/store';

export interface AnimalsListItemProps {
  animal: Animal;
}

export function AnimalsListItem({ animal }: AnimalsListItemProps) {
  const checkboxClickhandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    const checkbox = e.target;
    if (checkbox instanceof HTMLInputElement) {
      checkbox.checked
        ? dispatch(addSelectedItem(animal))
        : dispatch(removeSelectItem(animal));
    }
  };
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) => {
    return state.selectedItems.includes(animal);
  });
  return (
    <>
      <div className={`${styles.searchResultsItemCell} ${styles.checkbox}`}>
        <input
          type="checkbox"
          onClick={checkboxClickhandler}
          checked={isSelected}
          readOnly
        />
      </div>
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
