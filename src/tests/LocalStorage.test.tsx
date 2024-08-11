import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SearchBar } from '../components/SearchBar/SearchBar';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Root } from '../components/Root/Root';
import { mockAnimalsPagedResponse } from './SearchResults.test';

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
    const searchText = '';
    localStorage.setItem('searchValue', searchText);
    const routes = [
      {
        path: '/',
        element: <Root data={mockAnimalsPagedResponse} />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 1,
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );
    const searchInput = await waitFor(() => screen.getByRole('textbox'), {
      timeout: 3000,
    });
    expect(searchInput).toHaveValue(searchText);
  });
});
