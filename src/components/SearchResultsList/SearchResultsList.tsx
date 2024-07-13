import { Animal, AnimalsPagedQueryResponse } from '../../services/api';
import './SearchResultsList.css';

interface SerachResultsListProps {
  data?: AnimalsPagedQueryResponse;
}

export function SearchResultsList(props: SerachResultsListProps) {
  const getAnimalType = (animal: Animal) => {
    const keysToSkip: Array<keyof Animal> = ['uid', 'name'];
    return (Object.keys(animal) as Array<keyof Animal>)
      .filter((typeKey) => animal[typeKey] && !keysToSkip.includes(typeKey))
      .map((typeKey) =>
        typeKey.replace(/([a-z])([A-Z])/, `$1 $2`).toLowerCase(),
      )
      .join(', ');
  };

  const renderListHeader = () => {
    return (
      <li className="search-results__list-item header">
        <div className="search-results__list-item-cell col-one">Name</div>
        <div className="search-results__list-item-cell col-two">Uid</div>
        <div className="search-results__list-item-cell col-three">Type</div>
      </li>
    );
  };

  const renderListItems = () => {
    const listItems = props.data?.animals.map((animal) => {
      return (
        <li key={animal.uid} className="search-results__list-item">
          <div className="search-results__list-item-cell col-one">
            {animal.name}
          </div>
          <div className="search-results__list-item-cell col-two">
            {animal.uid}
          </div>
          <div className="search-results__list-item-cell col-three">
            {getAnimalType(animal)}
          </div>
        </li>
      );
    });
    return listItems;
  };
  return (
    <section className="search-results">
      <ul className={'search-results__list'}>
        {renderListHeader()}
        {renderListItems()}
      </ul>
    </section>
  );
}
