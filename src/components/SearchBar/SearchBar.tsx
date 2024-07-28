import React, { useContext, useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button/Button';
import styles from './SearchBar.module.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { ThemeContext } from '../../contexts/ThemeContext';

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
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <section>
      <form className={styles.searchForm} onSubmit={props.onSubmit}>
        <Input
          className={styles.searchInput}
          placeholder="Search animals by name"
          value={props.searchValue}
          onChange={props.onChange}
        />
        <Button
          className={`${styles.searchButton} ${isDarkTheme ? styles.dark : styles.light}`}
          type="submit"
        >
          Search
        </Button>
        <Button
          className={`${styles.searchButton} ${isDarkTheme ? styles.dark : styles.light}`}
          onClick={handleClickErrorButton}
        >
          Error
        </Button>
        <ThemeSwitcher
          className={`${styles.searchButton} ${isDarkTheme ? styles.dark : styles.light}`}
        />
      </form>
    </section>
  );
}
