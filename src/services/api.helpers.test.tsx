import { describe, expect, it } from 'vitest';
import { buildQueryString } from './api.helpers';

describe('Build Query String', () => {
  it('Query params string is built correctly based on page number and limit', async () => {
    const PAGE_NUMBER = '1';
    const LIMIT = '10';
    const res: string = buildQueryString(PAGE_NUMBER, LIMIT);
    expect(res).toEqual(`?pageNumber=${PAGE_NUMBER}&pageSize=${LIMIT}`);
  });
});
