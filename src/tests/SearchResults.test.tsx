import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchResultsList } from '../components/SearchResultsList/SearchResultsList';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { setCurrentPageCards } from '../store/currentPageCardsSlice';

import { createMockRouter } from '../testUtils/createMockRouter';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const mockAnimalsPagedResponse = {
  page: {
    pageNumber: 0,
    pageSize: 0,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 0,
    firstPage: false,
    lastPage: false,
  },
  animals: [
    {
      uid: 'ANMA0000264633',
      name: 'Abalone',
      earthAnimal: true,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    },
    {
      uid: 'ANMA0000008622',
      name: 'Aldebaran serpent',
      earthAnimal: false,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    },
  ],
};

const mockEmptyAnimalsPagedResponse = {
  page: {
    pageNumber: 0,
    pageSize: 0,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 0,
    firstPage: false,
    lastPage: false,
  },
  animals: [],
};

const clickListItem = async (uid: string) => {
  const user = userEvent.setup();
  const listItem = screen.getByText(uid);
  await user.click(listItem);
};

describe('Search Results', () => {
  it('Verify that the component renders the specified number of cards', () => {
    store.dispatch(setCurrentPageCards(mockAnimalsPagedResponse));
    render(
      <AppRouterContext.Provider value={createMockRouter({})}>
        <Provider store={store}>
          <SearchResultsList />
        </Provider>
      </AppRouterContext.Provider>,
    );
    const itemsCountWithoutHeader = screen.getAllByRole('listitem').length - 1;
    expect(itemsCountWithoutHeader).toEqual(
      mockAnimalsPagedResponse.animals.length,
    );
  });

  it('Check that an appropriate message is displayed if no cards are present', () => {
    store.dispatch(setCurrentPageCards(mockEmptyAnimalsPagedResponse));
    render(
      <Provider store={store}>
        <AppRouterContext.Provider value={createMockRouter({})}>
          <SearchResultsList />
        </AppRouterContext.Provider>
      </Provider>,
    );
    const message = screen.getByText('No data found');
    expect(message).not.throw;
  });

  it('Click item opens details', async () => {
    store.dispatch(setCurrentPageCards(mockAnimalsPagedResponse));
    let detailsUrl: string = '';
    render(
      <Provider store={store}>
        <AppRouterContext.Provider
          value={createMockRouter({
            push: (url: string) => {
              detailsUrl = url;
            },
          })}
        >
          <SearchResultsList />
        </AppRouterContext.Provider>
      </Provider>,
    );

    await clickListItem(mockAnimalsPagedResponse.animals[0].uid);
    expect(detailsUrl).toBe(
      `details/${mockAnimalsPagedResponse.animals[0].uid}/`,
    );
  });
});
