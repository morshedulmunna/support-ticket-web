import { apiSlice } from "@/redux/api/apiSlice";

export const feedbackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Post feedback by ticket id
    feedBackPost: builder.mutation({
      query: ({ tiket_id, feedback }) => ({
        //TODO=> Can't get id and feedback from feedPost
        url: `/feedback/${tiket_id}`,
        method: "POST",
        body: feedback,
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
