import { userLogin } from '@/api';
import { singleTicket } from '@/types/custome-type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { login } from '../features/auth/authSlice';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('@logged') as string);
      if (token) {
        const accessToken = token.accessToken;
        if (accessToken) {
          headers.set('Authorization', `Bearer ${accessToken}`);
        }
      }
      return headers;
    },
  }),
  refetchOnReconnect: true,
  tagTypes: ['single_tickets'],

  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
