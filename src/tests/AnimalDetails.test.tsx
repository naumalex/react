import { describe, expect, it } from 'vitest';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { mockAnimal } from './AnimalListItem.test';
import { routes } from '../routes/router';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import { setCard } from '../store/cardSlice';
import { Provider } from 'react-redux';

describe('Animal details panel', () => {
  it('Animals details panel renders the relevant details', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/details/${mockAnimal.uid}/`],
      initialIndex: 1,
    });
    store.dispatch(setCard(mockAnimal));
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );
    const uid = await waitFor(() => screen.getByText(`${mockAnimal.uid}`));
    expect(uid).toBeInTheDocument();
    const name = await waitFor(() => screen.getByText(`${mockAnimal.name}`));
    expect(name).toBeInTheDocument();
    const avian = await waitFor(() =>
      screen.getByText(`Avian: ${mockAnimal.avian}`),
    );
    expect(avian).toBeInTheDocument();
    const canine = await waitFor(() =>
      screen.getByText(`Canine: ${mockAnimal.canine}`),
    );
    expect(canine).toBeInTheDocument();
    const earthAnimal = await waitFor(() =>
      screen.getByText(`Earth Animal: ${mockAnimal.earthAnimal}`),
    );
    expect(earthAnimal).toBeInTheDocument();
    const earthInsect = await waitFor(() =>
      screen.getByText(`Earth Insect: ${mockAnimal.earthInsect}`),
    );
    expect(earthInsect).toBeInTheDocument();
    const feline = await waitFor(() =>
      screen.getByText(`Feline: ${mockAnimal.feline}`),
    );
    expect(feline).toBeInTheDocument();
  });

  it('Close button closes Details panel', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/details/${mockAnimal.uid}/`],
      initialIndex: 1,
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );
    await waitFor(() => {
      const closeButton = screen.getByText('Close');
      expect(closeButton).toBeInTheDocument();
      userEvent.click(closeButton);
    });
    await waitForElementToBeRemoved(screen.getByText('Close'));
  });
});
