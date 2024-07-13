import React, { useState } from 'react';
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

export function SearchBar(props: SearchBarProps) {
  const [isError, setIsError] = useState(false);

  const handleClickErrorButton = () => {
    setIsError(true);
  };
  const generateError = () => {
    throw new Error('Test Error');
  };
  if (isError) {
    generateError();
    setIsError(false);
  }
  return (
    <section className="search-bar">
      <form className="search-bar__form" onSubmit={props.onSubmit}>
        <Input
          className="search-bar__input"
          placeholder="Search animals by name"
          value={props.searchValue}
          onChange={props.onChange}
        />
        <Button className="search-bar__button" type="submit">
          Search
        </Button>
        <Button className="search-bar__button" onClick={handleClickErrorButton}>
          Error
        </Button>
      </form>
    </section>
  );
}
