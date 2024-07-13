import './App.css';
import { AnimalsPagedQueryResponse, Api } from './services/api';
import { SearchBar } from './components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { Loader } from './components/Loader/Loader';
import { ErrorBoundary } from './components/Error-boundary';

function App() {
  const [searchValue, setSearchvalue] = useState(
    localStorage.getItem('searchValue') || '',
  );
  const [animalsPagedResponse, setAnimalsPagedResponse] =
    useState<AnimalsPagedQueryResponse>({
      animals: [],
      page: {
        pageNumber: 0,
        pageSize: 0,
        numberOfElements: 0,
        totalElements: 0,
        totalPages: 0,
        firstPage: false,
        lastPage: false,
      },
    });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      await loadData(searchValue);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchvalue(event.target.value.trim());
    localStorage.setItem('searchValue', event.target.value);
  };

  const loadData = async (name: string, page: number = 0) => {
    setIsLoading(true);
    const animals = await Api.getAnimals({
      filter: { name: name },
      page: page,
    });
    setAnimalsPagedResponse(animals);
    setIsLoading(false);
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchvalue(event.target.value.trim());
    await loadData(searchValue);
  };

  return (
    <>
      <ErrorBoundary>
        <SearchBar
          searchValue={searchValue}
          onChange={handleChangeSearchValue}
          onSubmit={handleSubmit}
        />
        <SearchResultsList data={animalsPagedResponse} />
        <Loader loading={isLoading} />
      </ErrorBoundary>
    </>
  );
}

export default App;
