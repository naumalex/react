import { useContext, useEffect, useState } from 'react';
import { FlyOut } from '../FlyOut/FlyOut';
import { Pagination } from '../Pagination/Pagination';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResultsList } from '../SearchResultsList/SearchResultsList';
import { INITIAL_PAGE_RESPONSE } from '../../utils/constants';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetAnimalsQuery } from '../../services/animalApi';
import { getPageFromUrl } from '../Utils';
import { setCurrentPageCards } from '../../store/currentPageCardsSlice';
import styles from './Root.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export function Root() {
  const [searchValue, setSearchValue] = useLocalStorage();
  const [inputValue, setInputValue] = useState('');

  const [page, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isDarkTheme } = useContext(ThemeContext);

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
  return (
    <div
      className={`${styles.root} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      {' '}
      <div className={styles.container}>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
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
            <FlyOut />
          </>
        ) : null}
      </div>
    </div>
  );
}
