import { apiSlice } from "@/redux/api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    categoryCrate: builder.mutation({
      query: (body) => ({
        url: "/category",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["categoryCreate"],
    }),

    getAllCategory: builder.query<any, any>({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["categoryCreate"],
    }),

    // Delete Category
    categoryDeleteByID: builder.mutation<any, any>({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categoryCreate"],
    }),
  }),
});

export const {
  useCategoryCrateMutation,
  useGetAllCategoryQuery,
  useCategoryDeleteByIDMutation,
} = categoryApi;
