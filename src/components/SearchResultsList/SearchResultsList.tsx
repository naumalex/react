import React from 'react';
import { Animal, AnimalsPagedQueryResponse } from '../../services/api';
import './SearchResultsList.css';

interface SerachResultsListProps {
  data?: AnimalsPagedQueryResponse;
}

export class SearchResultsList extends React.Component<SerachResultsListProps> {
  constructor(props: SerachResultsListProps) {
    super(props);
  }

  getAnimalType(animal: Animal) {
    const type: string[] = [];
    if (animal.avian) {
      type.push('avian');
    }
    if (animal.canine) {
      type.push('canine');
    }
    if (animal.earthAnimal) {
      type.push('earth animal');
    }
    if (animal.earthInsect) {
      type.push('earth insect');
    }
    if (animal.feline) {
      type.push('feline');
    }
    return type.join(', ');
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
    const animalsData: Animal[] | undefined = this.props.data?.animals;
    if (!animalsData) {
      return;
    }
    const listItems = animalsData.map((element, i) => {
      return (
        <li key={i + 1} className="search-results__list-item">
          <div className="search-results__list-item-cell col-one">
            {element.name}
          </div>
          <div className="search-results__list-item-cell col-two">
            {element.uid}
          </div>
          <div className="search-results__list-item-cell col-three">
            {this.getAnimalType(element)}
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
