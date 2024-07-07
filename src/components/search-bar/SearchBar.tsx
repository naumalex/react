import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import './SearchBar.css';

export type EventHandler<T> = (event: React.ChangeEvent<T>) => void;

export interface SearchBarProps {
  searchValue: string;
  onChange: EventHandler<HTMLInputElement>;
  onSubmit: EventHandler<HTMLFormElement>;
}

export class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  render() {
    return (
      <section className="search-bar">
        <form className="search-bar__form" onSubmit={this.props.onSubmit}>
          <Input
            className="search-bar__input"
            placeholder="Search animals by name"
            value={this.props.searchValue}
            onChange={this.props.onChange}
          ></Input>
          <Button className="search-bar__button" type="submit">
            Search
          </Button>
        </form>
      </section>
    );
  }
}
