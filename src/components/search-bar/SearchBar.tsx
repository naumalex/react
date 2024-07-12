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

export interface SearchBarState {
  isError: boolean;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  isError: boolean = false;

  constructor(props: SearchBarProps) {
    super(props);
    this.state = { isError: false };
  }

  static generateError() {
    throw new Error('Test Error');
  }

  handleClickErrorButton() {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      SearchBar.generateError();
      this.setState({ isError: false });
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
