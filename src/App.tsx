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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await loadData(searchValue, currentPage);
    }
    const pageNumber = searchParams.get('page');
    setCurrentPage(pageNumber ? parseInt(pageNumber) : 1);
    fetchData();
  }, [currentPage, searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value.trim());
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
    await loadData(searchValue);
  };

  const setActivePage = (pageNumberText: string | null) => {
    const pageNumber = pageNumberText ? parseInt(pageNumberText) : 1;
    setCurrentPage(pageNumber);
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
          searchValue={searchValue}
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
