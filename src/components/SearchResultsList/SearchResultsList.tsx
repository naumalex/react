import styles from './SearchResultsList.module.css';
import { AnimalsListItems } from '../AnimalsListItems/AnimalsListItems';
import { AnimalsListHeader } from '../AnimalsListHeader/AnimalsListHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { AnimalsPagedQueryResponse } from 'src/services/api.types';

interface SearchResultsListProps {
  children?: React.ReactNode;
  data: AnimalsPagedQueryResponse;
}

export function SearchResultsList({ children, data }: SearchResultsListProps) {
  const navigate = useNavigate();
  const animalsResponseData = useSelector(
    (state: RootState) => state.currentPageCards,
  );
  const clickListHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      if (location.pathname.includes('details')) {
        navigate({
          pathname: '/',
          search: location.search,
        });
        return;
      }
      const target = e.target.closest('li');
      if (!target) {
        return;
      }
      const uid = target.getAttribute('id');
      if (target && uid) {
        navigate({
          pathname: `details/${uid}`,
          search: location.search,
        });
      }
    }
  };

  return animalsResponseData ? (
    <section className={styles.searchResults}>
      <ul className={styles.searchResultsList} onClick={clickListHandler}>
        <AnimalsListHeader />
        <AnimalsListItems data={/*animalsResponseData.animals*/ data.animals} />
      </ul>
      {children}
    </section>
  ) : null;
}
