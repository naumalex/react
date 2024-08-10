import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { mockAnimal } from './AnimalListItem.test';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import { setCard } from '../store/cardSlice';
import { Provider } from 'react-redux';
import { AnimalDetails } from '../components/AnimalDetails/AnimalDetails';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { createMockRouter } from '../testUtils/createMockRouter';

describe('Animal details panel', () => {
  it('Animals details panel renders the relevant details', async () => {
    store.dispatch(setCard(mockAnimal));
    render(
      <Provider store={store}>
        <AnimalDetails uid={mockAnimal.uid} />
      </Provider>,
    );
    const uid = await waitFor(
      () => screen.getByText(`Uid: ${mockAnimal.uid}`),
      {
        timeout: 3000,
      },
    );
    expect(uid).toBeInTheDocument();
    const name = await waitFor(() =>
      screen.getByText(`Name: ${mockAnimal.name}`),
    );
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
          <AnimalDetails uid={mockAnimal.uid} />
        </AppRouterContext.Provider>
      </Provider>,
    );
    await waitFor(() => {
      const closeButton = screen.getByText('Close');
      expect(closeButton).toBeInTheDocument();
      userEvent.click(closeButton);
    });
    expect(detailsUrl).toBe(``);
  });
});
