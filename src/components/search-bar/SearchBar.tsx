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
  isError: boolean = false;

  constructor(props: SearchBarProps) {
    super(props);
  }

  static generateError() {
    throw new Error('Test Error');
  }

  handleClickErrorButton() {
    this.isError = true;
    this.forceUpdate();
  }

  render() {
    if (this.isError) {
      SearchBar.generateError();
      this.isError = false;
    }
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
          <Button
            className="search-bar__button"
            onClick={this.handleClickErrorButton.bind(this)}
          >
            Error
          </Button>
        </form>
      </section>
    );
  }
}
