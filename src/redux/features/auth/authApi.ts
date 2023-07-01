import { apiSlice } from '@/redux/api/apiSlice';
import { login } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, api) {
        try {
          const result = await api.queryFulfilled;

          localStorage.setItem(
            '@logged',
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
          console.log(result);

          api.dispatch(
            login({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
