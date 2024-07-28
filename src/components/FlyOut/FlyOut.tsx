import { useSelector } from 'react-redux';
import styles from './FlyOut.module.css';
import { RootState } from '../../store/store';

export function FlyOut() {
  const selectedItemsCount = useSelector(
    (state: RootState) => state.selectedItems.length,
  );
  return selectedItemsCount > 0 ? (
    <form className={styles.flyOut}>
      <div>Selected {selectedItemsCount} items</div>
      <a className={'downloadButton'}>Download</a>
      <button>Select All</button>
    </form>
  ) : null;
}
