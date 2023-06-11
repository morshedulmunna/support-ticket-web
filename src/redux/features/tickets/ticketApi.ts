import { apiSlice } from '@/redux/api/apiSlice';
import { singleTicket } from '@/types/custome-type';

export const ticketsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ticketCreate: builder.mutation({
      query: (data) => ({
        url: '/tickets',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['single_tickets'],
    }),

    //Single All Tickets
    singleUserTicket: builder.query<singleTicket, void>({
      query: () => '/tickets/single_user_ticket',
      // 600 sec dhore r ai data fetch hoboe na. cash theka nibe
      keepUnusedDataFor: 600,
      providesTags: ['single_tickets'],
    }),
  }),
});

export const { useTicketCreateMutation, useSingleUserTicketQuery } = ticketsApi;
