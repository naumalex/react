import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

export interface Props {
  [key: string]: string;
  className: string;
  children: string;
}

export class SearchBar extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar__form">
          <Input
            className="search-bar__input"
            placeholder="Search animals by name"
          ></Input>
          <Button>Search</Button>
        </form>
      </div>
    );
  }
}
