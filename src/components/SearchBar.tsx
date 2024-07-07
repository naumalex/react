import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

export type EventHandler<T> = (event: React.ChangeEvent<T>) => void;

export interface SearchBarProps {
  searchValue: string;
  onChange: EventHandler<HTMLInputElement>;
}

export class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar__form">
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
      </div>
    );
  }
}
