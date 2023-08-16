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
      providesTags: ["close_tickets"],
    }),

    //Single All Close Tickets
    ticketDetailsById: builder.query<any, void>({
      query: (id) => `/tickets/${id}`,
      transformErrorResponse(error: Error) {
        return error;
      },
      providesTags: ["ticket_details"],
    }),

    //admin get all Tickets
    adminGetAllTickets: builder.query<any, void>({
      query: () => `/tickets`,
      providesTags: ["admin_all_tickets"],
    }),
    //admin get all Tickets
    assistanceOpenTicket: builder.query<any, void>({
      query: () => `/tickets/ticketsByRoll`,
      providesTags: ["assistance_Open_Ticket_tickets"],
    }),

    ticketDeleteByID: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        "close_tickets",
        "open_tickets",
        "ticket_details",
        "admin_all_tickets",
      ],
      transformErrorResponse(error: Error) {
        return error;
      },
    }),
  }),
});

export const {
  useTicketCreateMutation,
  useSingleUserOpenTicketQuery,
  useSingleUserCloseTicketQuery,
  useTicketDetailsByIdQuery,
  useAdminGetAllTicketsQuery,
  useTicketDeleteByIDMutation,
  useAssistanceOpenTicketQuery,
} = ticketsApi;
