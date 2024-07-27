import './App.css';
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
import { useGetAnimalsQuery } from './services/animalApi';

function App() {
  const [searchValue, setSearchValue] = useLocalStorage();
  const [inputValue, setInputValue] = useState('');
  const INITIAL_PAGE_RESPONSE = {
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
  };
  const [page, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAnimalsQuery({
    page,
    filter: { name: searchValue },
  });
  useEffect(() => {
    const pageNumberText = searchParams.get('page');
    const pageNumber = pageNumberText ? parseInt(pageNumberText) : 1;
    setCurrentPage(pageNumber);
    setInputValue(searchValue);
  }, [searchParams, searchValue]);

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(inputValue);
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

  return error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <>Loading...</>
  ) : data ? (
    <>
      <ErrorBoundary>
        <SearchBar
          searchValue={inputValue}
          onChange={handleChangeSearchValue}
          onSubmit={handleSubmit}
        />
        <SearchResultsList animalsResponseData={data} setPage={setActivePage} />
        <Loader loading={isLoading} />
        <Pagination
          page={data?.page || INITIAL_PAGE_RESPONSE.page}
          setActivePage={setActivePage}
        />
      </ErrorBoundary>
    </>
  ) : null;
}
export default App;
