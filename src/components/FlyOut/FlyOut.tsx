import { useDispatch, useSelector } from 'react-redux';
import styles from './FlyOut.module.css';
import { RootState } from '../../store/store';
import { buildCSVFile } from './FlyOut.helpers';
import { removeAllSelectedItems } from '../../store/selectedItemsSlice';

export function FlyOut() {
  const handleUnselectAllButton = () => {
    dispatch(removeAllSelectedItems());
  };
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectedItems);
  const selectedItemsCount = selectedItems.length;
  return selectedItemsCount > 0 ? (
    <form className={styles.flyOut}>
      <div>Selected {selectedItemsCount} items</div>
      <a className={'downloadButton'} href={buildCSVFile(selectedItems)}>
        Download
      </a>
      <button onClick={handleUnselectAllButton}>Unselect All</button>
    </form>
  ) : null;
}
