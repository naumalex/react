export interface Animal {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
}

export interface SearchAnimalParams {
  page?: number;
  limit?: number;
  filter?: Partial<Animal>;
}

export interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export interface AnimalsPagedQueryResponse {
  page: Page;
  animals: Animal[];
}

export class Api {
  static buildBody(filter: Partial<Animal>): string {
    const body = [];
    let key: keyof Partial<Animal>;
    for (key in filter) {
      if (key && filter[key]) {
        body.push(`${key}=${filter[key]}`);
      }
    }
    return body.join('&');
  }

  static async getAnimals(
    searchParams: SearchAnimalParams,
  ): Promise<AnimalsPagedQueryResponse> {
    const params = new URLSearchParams();
    if (searchParams.page) {
      params.set('pageNumber', searchParams.page.toString());
    }
    if (searchParams.limit) {
      params.set('pageSize', searchParams.limit.toString());
    }
    let body;
    if (searchParams.filter) {
      body = Api.buildBody(searchParams.filter);
    }
    const BASE_URL = 'https://stapi.co/api/v1/rest/animal/search';
    const QUERY_STRING = params.size > 0 ? `?${params}` : '';
    const res = await fetch(`${BASE_URL}${QUERY_STRING}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });
    const animals = await res.json();
    return animals;
  }
}
