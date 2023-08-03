import { apiSlice } from "@/redux/api/apiSlice";
import { Error, singleTicket } from "@/types/custome-type";

export const ticketsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create Tickets
    ticketCreate: builder.mutation({
      query: (data) => ({
        url: "/tickets",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["open_tickets"],
      transformErrorResponse(error: Error) {
        return error;
      },
    }),

    //Single All Open Tickets
    singleUserOpenTicket: builder.query<singleTicket, void>({
      query: () => "/tickets/open-ticket",
      transformErrorResponse(error: Error) {
        return error;
      },
      keepUnusedDataFor: 600,
      providesTags: ["open_tickets"],
    }),

    //Single All Close Tickets
    singleUserCloseTicket: builder.query<singleTicket, void>({
      query: () => "/tickets/close-ticket",
      transformErrorResponse(error: Error) {
        return error;
      },
      keepUnusedDataFor: 600,
      providesTags: ["ticket_details"],
    }),

    //Single All Close Tickets
    ticketDetailsById: builder.query<any, void>({
      query: (id) => `/tickets/${id}`,
      transformErrorResponse(error: Error) {
        return error;
      },
      providesTags: [],
    }),

    //admin get all Tickets
    adminGetAllTickets: builder.query<any, void>({
      query: () => `/tickets`,
      transformErrorResponse(error: Error) {
        return error;
      },
      providesTags: ["open_tickets"],
    }),

    //Single All Close Tickets
    ticketResolveUpdate: builder.query<any, void>({
      query: (id) => `/close-ticket/${id}`,
      transformErrorResponse(error: Error) {
        return error;
      },
      providesTags: ["ticket_details"],
    }),
  }),
});

export const {
  useTicketCreateMutation,
  useSingleUserOpenTicketQuery,
  useSingleUserCloseTicketQuery,
  useTicketDetailsByIdQuery,
  useTicketResolveUpdateQuery,
  useAdminGetAllTicketsQuery,
} = ticketsApi;
