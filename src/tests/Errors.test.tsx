import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { createMockRouter } from '../testUtils/createMockRouter';

describe('Error Button component', () => {
  it('Click Error button shows message that something went wrong', async () => {
    const user = userEvent.setup();
    render(
      <AppRouterContext.Provider value={createMockRouter({})}>
        <App />
      </AppRouterContext.Provider>,
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
