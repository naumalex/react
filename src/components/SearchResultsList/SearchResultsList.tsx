import React from 'react';
import { Animal, AnimalsPagedQueryResponse } from '../../services/api';
import './SearchResultsList.css';

interface SerachResultsListProps {
  data?: AnimalsPagedQueryResponse;
}

export class SearchResultsList extends React.Component<SerachResultsListProps> {
  getAnimalType(animal: Animal) {
    const keysToSkip: Array<keyof Animal> = ['uid', 'name'];
    return (Object.keys(animal) as Array<keyof Animal>)
      .filter((typeKey) => animal[typeKey] && !keysToSkip.includes(typeKey))
      .map((typeKey) =>
        typeKey.replace(/([a-z])([A-Z])/, `$1 $2`).toLowerCase(),
      )
      .join(', ');
  }

  private renderListHeader() {
    return (
      <li key="0" className="search-results__list-item header">
        <div className="search-results__list-item-cell col-one">Name</div>
        <div className="search-results__list-item-cell col-two">Uid</div>
        <div className="search-results__list-item-cell col-three">Type</div>
      </li>
    );
  }

  private renderListItems() {
    const listItems = this.props.data?.animals.map((animal) => {
      return (
        <li key={animal.uid} className="search-results__list-item">
          <div className="search-results__list-item-cell col-one">
            {animal.name}
          </div>
          <div className="search-results__list-item-cell col-two">
            {animal.uid}
          </div>
          <div className="search-results__list-item-cell col-three">
            {this.getAnimalType(animal)}
          </div>
        </li>
      );
    });
    return listItems;
  }

  render() {
    return (
      <section className="search-results">
        <ul className={'search-results__list'}>
          {this.renderListHeader()}
          {this.renderListItems()}
        </ul>
      </section>
    );
  }
}
