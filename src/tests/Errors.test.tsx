import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Error Button component', () => {
  it('Click Error button shows message that something went wrong', async () => {
    const user = userEvent.setup();
    render(<App />, { wrapper: BrowserRouter });
    const searchButton = screen.getByRole('button', { name: 'Error' });
    user.click(searchButton);
    await waitFor(() =>
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument(),
    );
  });
});
