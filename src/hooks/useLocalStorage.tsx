import { useState } from 'react';

export default function useLocalStorage() {
  const [storedSearchValue, setStoredSearchValue] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('searchValue') || '';
    }
  });
  const setSearchValue = (value: string) => {
    setStoredSearchValue(value);
    localStorage.setItem('searchValue', value);
  };
  return [storedSearchValue, setSearchValue] as const;
}
