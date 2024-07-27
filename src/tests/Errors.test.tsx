import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import { Provider } from 'react-redux';

describe('Error Button component', () => {
  it('Click Error button shows message that something went wrong', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const searchButton = await waitFor(() =>
      screen.getByRole('button', { name: 'Error' }),
    );
    user.click(searchButton);
    await waitFor(() =>
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument(),
    );
  });
});
