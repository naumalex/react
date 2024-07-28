import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button/Button';
import styles from './SearchBar.module.css';

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
    <section>
      <form className={styles.searchForm} onSubmit={props.onSubmit}>
        <Input
          className={styles.searchInput}
          placeholder="Search animals by name"
          value={props.searchValue}
          onChange={props.onChange}
        />
        <Button className={styles.searchButton} type="submit">
          Search
        </Button>
        <Button
          className={styles.searchButton}
          onClick={handleClickErrorButton}
        >
          Error
        </Button>
      </form>
    </section>
  );
}
