import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { SearchResultsItem } from '../components/SearchResultsItem/SearchResultsItem';
import { getAnimalType } from '../components/Utils';

const mockAnimal = {
  uid: 'ANMA0000262167',
  name: 'Albatross',
  earthAnimal: true,
  earthInsect: false,
  avian: false,
  canine: false,
  feline: false,
};

describe('Search Result Item', () => {
  it('Card component renders the relevant card data', () => {
    render(<SearchResultsItem animal={mockAnimal} key={mockAnimal.uid} />, {
      wrapper: BrowserRouter,
    });
    const uid = screen.getByText(mockAnimal.uid);
    expect(uid).toBeTruthy();
    const name = screen.getByText(mockAnimal.name);
    expect(name).toBeTruthy();
    const type = screen.getByText(getAnimalType(mockAnimal));
    expect(type).toBeTruthy();
  });
});
