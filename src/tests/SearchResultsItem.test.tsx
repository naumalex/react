import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { SearchResultsItem } from '../components/SearchResultsItem/SearchResultsItem';
import { getAnimalType } from '../components/Utils';

export const mockAnimal = {
  uid: 'ANMA0000028280',
  name: 'Berserker cat',
  earthAnimal: false,
  earthInsect: false,
  avian: false,
  canine: false,
  feline: true,
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
