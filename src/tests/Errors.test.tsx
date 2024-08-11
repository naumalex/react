import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { ErrorBoundary } from '../components/Error-boundary';

describe('Error Button component', () => {
  it('Click Error button shows message that something went wrong', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <SearchBar searchValue="" onChange={() => {}} onSubmit={() => {}} />,
        </ErrorBoundary>
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const searchButton = await waitFor(
      () => screen.getByRole('button', { name: 'Error' }),
      { timeout: 3000 },
    );
    user.click(searchButton);
    await waitFor(() =>
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument(),
    );
  });
});
