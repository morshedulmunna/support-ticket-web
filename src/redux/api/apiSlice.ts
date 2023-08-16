import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("@logged") as string);
      if (token) {
        const accessToken = token.accessToken;
        if (accessToken) {
          headers.set("Authorization", `Bearer ${accessToken}`);
        }
      }
      return headers;
    },
  }),
  refetchOnReconnect: true,
  tagTypes: [
    "open_tickets",
    "close_tickets",
    "ticket_details",
    "update_tickets",
    "create_Tickets",
    "admin_all_tickets",
    "categoryCreate",
    "gettingUser",
    "assistance_Open_Ticket_tickets",
  ],

  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
