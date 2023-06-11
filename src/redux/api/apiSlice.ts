import { userLogin } from '@/api';
import { singleTicket } from '@/types/custome-type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { login } from '../features/authSlice';

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

  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, api) {
        try {
          const result = await api.queryFulfilled;

          localStorage.setItem(
            '@logged',
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
          console.log(result);

          api.dispatch(
            login({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {}
      },
    }),
    ticketCreate: builder.mutation({
      query: (data) => ({
        url: '/tickets',
        method: 'POST',
        body: data,
      }),
    }),
    singleUserTicket: builder.query<singleTicket, void>({
      query: () => '/tickets/single_user_ticket',
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useTicketCreateMutation,
  useSingleUserTicketQuery,
} = apiSlice;
