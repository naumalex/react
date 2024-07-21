import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { mockAnimal } from './SearchResultsItem.test';
import { routes } from '../routes/router';

describe('Animal details panel', () => {
  it('Animals details panel renders the relevant details', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/details/${mockAnimal.uid}/`],
      initialIndex: 1,
    });
    render(<RouterProvider router={router} />);
    await waitFor(() => screen.getByText(`${mockAnimal.uid}`));
    expect(screen.getByText(`${mockAnimal.uid}`)).toBeInTheDocument();
    const uid = screen.getByText(`${mockAnimal.uid}`);
    expect(uid).toBeTruthy();
    const name = screen.getByText(`Name: ${mockAnimal.name}`);
    expect(name).toBeTruthy();
    const isAvian = screen.getByText(`Avian: ${mockAnimal.avian}`);
    expect(isAvian).toBeTruthy();
    const isCanine = screen.getByText(`Canine: ${mockAnimal.canine}`);
    expect(isCanine).toBeTruthy();
    const isEarthAnimal = screen.getByText(
      `Earth Animal: ${mockAnimal.earthAnimal}`,
    );
    expect(isEarthAnimal).toBeTruthy();
    const isEarthInsect = screen.getByText(
      `Earth Insect: ${mockAnimal.earthInsect}`,
    );
    expect(isEarthInsect).toBeTruthy();
    const isFeline = screen.getByText(`Feline: ${mockAnimal.feline}`);
    expect(isFeline).toBeTruthy();
  });
});
