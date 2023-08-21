import { apiSlice } from "@/redux/api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchByTickets: builder.mutation({
      query: (search) => ({
        url: `/search/tickets/?query=${search}`,
      }),
      invalidatesTags: ["close_tickets", "open-tiket"],
    }),
  }),
});

export const { useGetSearchByTicketsMutation } = searchApi;
