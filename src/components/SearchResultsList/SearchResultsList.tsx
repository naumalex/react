import styles from './SearchResultsList.module.css';
import { AnimalsListItems } from '../AnimalsListItems/AnimalsListItems';
import { AnimalsListHeader } from '../AnimalsListHeader/AnimalsListHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useRouter } from 'next/navigation';

interface SearchResultsListProps {
  children?: React.ReactNode;
}

export function SearchResultsList({ children }: SearchResultsListProps) {
  const router = useRouter();
  const animalsResponseData = useSelector(
    (state: RootState) => state.currentPageCards,
  );
  const clickListHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      if (location.pathname.includes('details')) {
        router.push(`/${location.search}`);
        return;
      }
      const target = e.target.closest('li');
      if (!target) {
        return;
      }
      const uid = target.getAttribute('id');
      if (target && uid) {
        router.push(`details/${uid}/${location.search}`);
      }
    }
  };

  return animalsResponseData ? (
    <section className={styles.searchResults}>
      <ul className={styles.searchResultsList} onClick={clickListHandler}>
        <AnimalsListHeader />
        <AnimalsListItems data={animalsResponseData.animals} />
      </ul>
      {children}
    </section>
  ) : null;
}
