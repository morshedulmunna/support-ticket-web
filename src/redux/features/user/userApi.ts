import { apiSlice } from "@/redux/api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    gettingUser: builder.query({
      query: () => "/users/all",
    }),
  }),
});

export const { useGettingUserQuery } = userApi;
