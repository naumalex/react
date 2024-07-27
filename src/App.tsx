import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { ErrorBoundary } from './components/Error-boundary';
import { useLocalStorage } from './hooks/useLocalStorage';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Pagination } from './components/Pagination/Pagination';
import { useGetAnimalsQuery } from './services/animalApi';
import { useDispatch } from 'react-redux';
import { setCurrentPageCards } from './store/currentPageCardsSlice';
import { INITIAL_PAGE_RESPONSE } from './utils/constants';
import { getPageFromUrl } from './components/Utils';

function App() {
  const [searchValue, setSearchValue] = useLocalStorage();
  const [inputValue, setInputValue] = useState('');

  const [page, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAnimalsQuery({
    page,
    filter: { name: searchValue },
  });

  useEffect(() => {
    const pageNumber = getPageFromUrl(searchParams);
    setCurrentPage(pageNumber);
    setInputValue(searchValue);
  }, [searchParams, searchValue]);

  useEffect(() => {
    dispatch(setCurrentPageCards(data));
  }, [data, dispatch]);

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
        <SearchResultsList />
        <Pagination
          page={data?.page || INITIAL_PAGE_RESPONSE.page}
          setActivePage={setActivePage}
        />
      </ErrorBoundary>
    </>
  ) : null;
}
export default App;
