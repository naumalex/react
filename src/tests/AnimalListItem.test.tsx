import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { getAnimalType } from '../components/Utils';
import { AnimalsListItem } from '../components/AnimalsListItem/AnimalsListItem';

export const mockAnimal = {
  uid: 'ANMA0000027729',
  name: 'Alligator',
  earthAnimal: true,
  earthInsect: false,
  avian: false,
  canine: false,
  feline: false,
};

describe('Search Result Item', () => {
  it('Card component renders the relevant card data', () => {
    render(<AnimalsListItem animal={mockAnimal} key={mockAnimal.uid} />, {
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
