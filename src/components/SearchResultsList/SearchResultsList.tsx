import { Outlet, useNavigate } from 'react-router-dom';
import { AnimalsPagedQueryResponse } from '../../services/api';
import styles from './SearchResultsList.module.css';
import itemStyles from '../SearchResultsItem/SearchResultsItem.module.css';
import { SearchResultsItem } from '../SearchResultsItem/SearchResultsItem';

interface SerachResultsListProps {
  animalsResponseData: AnimalsPagedQueryResponse;
  setPage: (pageNumber: string | null) => void;
}

export function SearchResultsList(props: SerachResultsListProps) {
  const navigate = useNavigate();

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

  const renderListHeader = () => {
    return (
      <li className={`${itemStyles.searchResultsItem} ${styles.header}`}>
        <div className={`${itemStyles.searchResultsItemCell} ${styles.colOne}`}>
          Name
        </div>
        <div className={`${itemStyles.searchResultsItemCell} ${styles.colTwo}`}>
          Uid
        </div>
        <div
          className={`${itemStyles.searchResultsItemCell} ${styles.colThree}`}
        >
          Type
        </div>
      </li>
    );
  };

  const renderListItems = () => {
    const animals = props.animalsResponseData?.animals;
    if (animals.length === 0) {
      return <div>Animals not found</div>;
    }
    const listItems = animals.map((animal) => {
      return <SearchResultsItem animal={animal} key={animal.uid} />;
    });
    return listItems;
  };
  return (
    <section className={styles.searchResults}>
      <ul className={styles.searchResultsList} onClick={clickListHandler}>
        {renderListHeader()}
        {renderListItems()}
      </ul>
      <Outlet />
    </section>
  );
}
