import { PeopleResponse } from '@/app/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const categories = ['people', 'planets', 'films', 'species', 'vehicles', 'starships'];

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPeople: builder.query<PeopleResponse, void>({
      query: () => 'people',
    }),
    search: builder.query<Record<string, unknown[]>, string>({
      query: (term) => ({
        url: '/',
        params: { search: term },
      }),
      transformResponse: async (_response: unknown, _meta, arg) => {
        const results: Record<string, unknown[]> = {};
        const fetchPromises = categories.map(async (category) => {
          const categoryResponse = await fetch(`${BASE_URL}/${category}/?search=${arg}`);
          const categoryData = await categoryResponse.json();
          results[category] = categoryData.results.slice(0, 3);
        });

        await Promise.all(fetchPromises);
        return results;
      },
    }),
  }),
});

export const { useGetPeopleQuery, useSearchQuery } = api;
