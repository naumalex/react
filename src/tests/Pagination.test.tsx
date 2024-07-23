import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Pagination } from '../components/Pagination/Pagination';

const PAGE = {
  pageNumber: 1,
  pageSize: 50,
  numberOfElements: 50,
  totalElements: 500,
  totalPages: 10,
  firstPage: true,
  lastPage: false,
};

describe('Pagination component', () => {
  it('Click page button updates url', async () => {
    const user = userEvent.setup();
    const PAGE_NUMBER = '2';
    const setActivePage = vi.fn();

    render(<Pagination page={PAGE} setActivePage={setActivePage} />);

    await waitFor(() => {
      const pageButton = screen.getByRole('button', { name: PAGE_NUMBER });
      expect(pageButton).toBeInTheDocument();
      user.click(pageButton);
    });
    await waitFor(() => expect(setActivePage).toHaveBeenCalled());
  });
});
