import { Animal } from './api.types';

export function buildQueryString(page?: string, limit?: string) {
  const params = new URLSearchParams();
  if (page) {
    params.set('pageNumber', page.toString());
  }
  if (limit) {
    params.set('pageSize', limit.toString());
  }
  return params.size > 0 ? `?${params}` : '';
}

export function buildBody(filter?: Partial<Animal>): string {
  if (!filter) {
    return '';
  }
  const body: string[] = [];
  let key: keyof Partial<Animal>;
  for (key in filter) {
    if (key && filter[key]) {
      body.push(`${key}=${filter[key]}`);
    }
  }
  return body.join('&');
}
