import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Search Button', () => {
  it('Search button saves the entered value to the local storage', async () => {
    const user = userEvent.setup();
    const setSearchValue = vi.fn((e) => e.preventDefault());
    render(
      <Provider store={store}>
        <SearchBar
          searchValue=""
          onChange={() => {}}
          onSubmit={setSearchValue}
        />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const searchInput = await waitFor(() => screen.getByRole('textbox'), {
      timeout: 3000,
    });
    const searchButton = await waitFor(() =>
      screen.getByRole('button', { name: 'Search' }),
    );
    const searchText = 'a';
    await user.type(searchInput, searchText);
    await user.click(searchButton);
    await waitFor(() => expect(setSearchValue).toHaveBeenCalled());
  });

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    const searchText = 'a';
    localStorage.setItem('searchValue', searchText);
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const searchInput = await waitFor(() => screen.getByRole('textbox'), {
      timeout: 3000,
    });
    expect(searchInput).toHaveValue(searchText);
  });
});
