import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constants';
import { buildBody, buildQueryString } from './api.helpers';
import { AnimalsPagedQueryResponse, SearchAnimalParams } from './api.types';

export const animalApi = createApi({
  reducerPath: 'animalApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAnimals: builder.query<AnimalsPagedQueryResponse, SearchAnimalParams>({
      query: (searchParams) => ({
        url: `animal/search${buildQueryString((searchParams.page ? searchParams.page - 1 : 0)?.toString())}`,
        method: 'post',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: buildBody(searchParams.filter),
      }),
    }),
  }),
});

export const { useGetAnimalsQuery } = animalApi;
