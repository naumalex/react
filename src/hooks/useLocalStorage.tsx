import { useState } from 'react';

export const useLocalStorage = () => {
  const [storedSearchValue, setStoredSearchValue] = useState(
    () => localStorage.getItem('searchValue') || '',
  );
  const setSearchValue = (value: string) => {
    setStoredSearchValue(value);
    localStorage.setItem('searchValue', value);
  };
  return [storedSearchValue, setSearchValue] as const;
};
