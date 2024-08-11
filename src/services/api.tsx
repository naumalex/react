import { buildBody } from './api.helpers';
import {
  Animal,
  AnimalsPagedQueryResponse,
  SearchAnimalParams,
} from './api.types';

export class api {
  static BASE_URL = 'https://stapi.co/api/v1/rest/';

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
      body = buildBody(searchParams.filter);
    }
    const QUERY_STRING = params.size > 0 ? `?${params}` : '';
    const res = await fetch(`${api.BASE_URL}animal/search${QUERY_STRING}`, {
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

  static async getAnimal(uid: string): Promise<Animal> {
    const params = new URLSearchParams();
    params.set('uid', uid);
    const res = await fetch(`${api.BASE_URL}animal?${params}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });
    const animalObj = await res.json();
    return animalObj.animal;
  }
}
