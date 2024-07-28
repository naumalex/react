import { describe, expect, it, vi } from 'vitest';
import { FlyOut } from '../components/FlyOut/FlyOut';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { addSelectedItem } from '../store/selectedItemsSlice';
import { mockAnimal } from './AnimalListItem.test';

describe('Fly Out component', () => {
  window.URL.createObjectURL = vi.fn();
  it('Flyout component contains Download and Unselect All buttons', async () => {
    store.dispatch(addSelectedItem(mockAnimal));
    render(
      <Provider store={store}>
        <FlyOut />
      </Provider>,
    );
    const unselectAll = await waitFor(() => screen.getByText('Unselect All'));
    expect(unselectAll).toBeInTheDocument();
    const downloadButton = await waitFor(() => screen.getByText('Download'));
    expect(downloadButton).toBeInTheDocument();
  });
});
