import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchResultsList } from '../components/SearchResultsList/SearchResultsList';
import { BrowserRouter } from 'react-router-dom';

const mockAnimalsPagedResponse = {
  page: {
    pageNumber: 0,
    pageSize: 50,
    numberOfElements: 2,
    totalElements: 248,
    totalPages: 5,
    firstPage: true,
    lastPage: false,
  },
  animals: [
    {
      uid: 'ANMA0000262167',
      name: 'Albatross',
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

describe('Search Results', () => {
  it('Verify that the component renders the specified number of cards', () => {
    render(
      <SearchResultsList
        animalsResponseData={mockAnimalsPagedResponse}
        setPage={() => {}}
      />,
      { wrapper: BrowserRouter },
    );
    const itemsCountWithoutHeader = screen.getAllByRole('listitem').length - 1;
    expect(itemsCountWithoutHeader).toEqual(
      mockAnimalsPagedResponse.animals.length,
    );
  });
});
