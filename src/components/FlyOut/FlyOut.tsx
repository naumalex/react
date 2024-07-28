import { useDispatch, useSelector } from 'react-redux';
import styles from './FlyOut.module.css';
import { RootState } from '../../store/store';
import { buildCSVFile } from './FlyOut.helpers';
import { removeAllSelectedItems } from '../../store/selectedItemsSlice';
import { Button } from '../Button/Button';

export function FlyOut() {
  const handleUnselectAllButton = () => {
    dispatch(removeAllSelectedItems());
  };
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectedItems);
  const selectedItemsCount = selectedItems.length;
  return selectedItemsCount > 0 ? (
    <div className={styles.flyOut}>
      <div>Selected {selectedItemsCount} items</div>
      <div className={styles.buttonsContainer}>
        <Button>
          <a
            className={styles.downloadButton}
            href={buildCSVFile(selectedItems)}
          >
            Download
          </a>
        </Button>
        <Button onClick={handleUnselectAllButton}>Unselect All</Button>
      </div>
    </div>
  ) : null;
}
