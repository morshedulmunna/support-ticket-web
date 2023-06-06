import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
    prepareHeaders: (headers, { getState }) => {
      // Get the access token from your local storage or wherever it's stored
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/sdd',
      }),
    }),
  }),
});

export const { useRegisterMutation } = apiSlice;
