import { apiSlice } from "@/redux/api/apiSlice";
import { singleTicket } from "@/types/custome-type";

export const ticketsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create Tickets
    ticketCreate: builder.mutation({
      query: (data) => ({
        url: "/tickets",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["open-tiket"],
    }),

    // Open Ticket
    getOpenTickets: builder.query<singleTicket, void>({
      query: () => "/tickets/open",
      providesTags: ["open-tiket"],
    }),

    //Single All Close Tickets
    getCloseTickets: builder.query<singleTicket, void>({
      query: () => "/tickets/close",
      providesTags: ["close_tickets"],
    }),

    // Tickets Details by Ud
    ticketDetailsById: builder.query<any, void>({
      query: (id) => `/tickets/${id}`,
      providesTags: ["ticket_details"],
    }),

    // Delete Tickets By Id
    ticketDeleteByID: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["open-tiket", "close_tickets"],
    }),

    // Update Tickets by Id
    ticketUpdateByID: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["open-tiket", "ticket_details", "close_tickets"],
    }),
  }),
});

export const {
  useTicketCreateMutation,
  useGetOpenTicketsQuery,
  useGetCloseTicketsQuery,
  useTicketDetailsByIdQuery,
  useTicketDeleteByIDMutation,
  useTicketUpdateByIDMutation,
} = ticketsApi;
