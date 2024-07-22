import './App.css';
import { AnimalsPagedQueryResponse, Api } from './services/api';
import { SearchBar } from './components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { Loader } from './components/Loader/Loader';
import { ErrorBoundary } from './components/Error-boundary';
import { useLocalStorage } from './hooks/useLocalStorage';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  const [searchValue, setSearchValue] = useLocalStorage();
  const [inputValue, setInputValue] = useState('');
  const [animalsPagedResponse, setAnimalsPagedResponse] =
    useState<AnimalsPagedQueryResponse>({
      animals: [],
      page: {
        pageNumber: 1,
        pageSize: 0,
        numberOfElements: 0,
        totalElements: 0,
        totalPages: 0,
        firstPage: false,
        lastPage: false,
      },
    });
  const [isLoading, setIsLoading] = useState(false);
  const [, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(page: number) {
      await loadData(searchValue, page);
    }
    const pageNumberText = searchParams.get('page');
    const pageNumber = pageNumberText ? parseInt(pageNumberText) : 1;
    setCurrentPage(pageNumber);
    fetchData(pageNumber);
  }, [searchParams, searchValue]);

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value.trim());
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
    setSearchValue(inputValue);
    await loadData(inputValue);
  };

  const setActivePage = (pageNumberText: string | null) => {
    const pageNumber = pageNumberText ? parseInt(pageNumberText) : 1;
    setCurrentPage(pageNumber);
    setInputValue(searchValue);
    navigate({
      search: `?${createSearchParams({
        page: pageNumber.toString(),
      })}`,
    });
  };

  return (
    <>
      <ErrorBoundary>
        <SearchBar
          searchValue={inputValue}
          onChange={handleChangeSearchValue}
          onSubmit={handleSubmit}
        />
        <SearchResultsList
          animalsResponseData={animalsPagedResponse}
          setPage={setActivePage}
        />
        <Loader loading={isLoading} />
        <Pagination
          page={animalsPagedResponse.page}
          setActivePage={setActivePage}
        />
      </ErrorBoundary>
    </>
  );
}
export default App;
