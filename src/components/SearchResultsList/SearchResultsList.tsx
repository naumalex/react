import { Outlet, useNavigate } from 'react-router-dom';
import styles from './SearchResultsList.module.css';
import { AnimalsListItems } from '../AnimalsListItems/AnimalsListItems';
import { AnimalsListHeader } from '../AnimalsListHeader/AnimalsListHeader';
import { AnimalsPagedQueryResponse } from '../../services/api.types';

interface SearchResultsListProps {
  animalsResponseData: AnimalsPagedQueryResponse;
  setPage: (pageNumber: string | null) => void;
}

export function SearchResultsList({
  animalsResponseData,
}: SearchResultsListProps) {
  const navigate = useNavigate();
  console.log(animalsResponseData);
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

  return (
    <section className={styles.searchResults}>
      <ul className={styles.searchResultsList} onClick={clickListHandler}>
        <AnimalsListHeader />
        <AnimalsListItems data={animalsResponseData.animals} />
      </ul>
      <Outlet />
    </section>
  );
}
