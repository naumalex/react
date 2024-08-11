import { useContext, useState } from 'react';
import { FlyOut } from '../FlyOut/FlyOut';
import { Pagination } from '../Pagination/Pagination';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResultsList } from '../SearchResultsList/SearchResultsList';
import { INITIAL_PAGE_RESPONSE } from '../../utils/constants';
import styles from './Root.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import {
  createSearchParams,
  useNavigate,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import { AnimalsPagedQueryResponse } from 'src/services/api.types';

interface RootProps {
  children?: React.ReactNode;
  data: AnimalsPagedQueryResponse;
}

export function Root({ children, data }: RootProps) {
  const [searchValue, setSearchValue] = useLocalStorage();
  const [inputValue, setInputValue] = useState('');
  const [, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { isDarkTheme } = useContext(ThemeContext);
  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log('Submit');
    event.preventDefault();
    setSearchValue(inputValue);
    navigate(`/?search=${inputValue}`);
  };

  const setActivePage = (pageNumberText: string | null) => {
    console.log('set active page');
    const pageNumber = pageNumberText ? parseInt(pageNumberText) : 1;
    setCurrentPage(pageNumber);
    setInputValue(searchValue || '');
    const newParams = new URLSearchParams(searchParams?.toString());
    newParams.set('page', pageNumber.toString());
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
        {navigation.state === 'loading' ? (
          <>Loading...</>
        ) : data ? (
          <>
            <SearchBar
              searchValue={inputValue}
              onChange={handleChangeSearchValue}
              onSubmit={handleSubmit}
            />
            <SearchResultsList data={data}>{children}</SearchResultsList>
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
