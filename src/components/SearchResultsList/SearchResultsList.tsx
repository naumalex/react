import { Outlet, useNavigate } from 'react-router-dom';
import { Animal, AnimalsPagedQueryResponse } from '../../services/api';
import styles from './SearchResultsList.module.css';

interface SerachResultsListProps {
  animalsResponseData: AnimalsPagedQueryResponse;
  setPage: (pageNumber: string | null) => void;
}

export function SearchResultsList(props: SerachResultsListProps) {
  const navigate = useNavigate();

  const getAnimalType = (animal: Animal) => {
    const keysToSkip: Array<keyof Animal> = ['uid', 'name'];
    return (Object.keys(animal) as Array<keyof Animal>)
      .filter((typeKey) => animal[typeKey] && !keysToSkip.includes(typeKey))
      .map((typeKey) =>
        typeKey.replace(/([a-z])([A-Z])/, `$1 $2`).toLowerCase(),
      )
      .join(', ');
  };

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
      <li className={`${styles.searchResultsListItem} ${styles.header}`}>
        <div className={`${styles.searchResultsListItemCell} ${styles.colOne}`}>
          Name
        </div>
        <div className={`${styles.searchResultsListItemCell} ${styles.colTwo}`}>
          Uid
        </div>
        <div
          className={`${styles.searchResultsListItemCell} ${styles.colThree}`}
        >
          Type
        </div>
      </li>
    );
  };

  const renderListItems = () => {
    const listItems = props.animalsResponseData?.animals.map((animal) => {
      return (
        <li
          key={animal.uid}
          id={animal.uid}
          className={styles.searchResultsListItem}
        >
          <div
            className={`${styles.searchResultsListItemCell} ${styles.colOne}`}
          >
            {animal.name}
          </div>
          <div
            className={`${styles.searchResultsListItemCell} ${styles.colTwo}`}
          >
            {animal.uid}
          </div>
          <div
            className={`${styles.searchResultsListItemCell} ${styles.colThree}`}
          >
            {getAnimalType(animal)}
          </div>
        </li>
      );
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
