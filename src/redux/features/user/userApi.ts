import { apiSlice } from "@/redux/api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    gettingUser: builder.query({
      query: () => "/users/all",

      providesTags: ["gettingUser"],
    }),

    userRollCategoryUpdate: builder.mutation({
      query: (body) => ({
        url: `/users`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["gettingUser"],
    }),
    userDelete: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["gettingUser"],
    }),
  }),
});

export const {
  useGettingUserQuery,
  useUserRollCategoryUpdateMutation,
  useUserDeleteMutation,
} = userApi;
