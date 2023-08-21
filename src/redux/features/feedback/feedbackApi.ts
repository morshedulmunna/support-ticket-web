import { apiSlice } from "@/redux/api/apiSlice";

export const feedbackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Post feedback by ticket id
    feedBackPost: builder.mutation({
      query: (data) => ({
        //TODO=> Can't get id and feedback from feedPost
        url: `/feedback/${data.tiket_id}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["feedback"],
    }),

    // Get Feedback by ticket id
    getFeedback: builder.query({
      query: (ticketId) => ({
        url: `/feedback/${ticketId}`,
      }),
      providesTags: ["feedback"],
    }),
  }),
});

export const { useFeedBackPostMutation, useGetFeedbackQuery } = feedbackApi;
