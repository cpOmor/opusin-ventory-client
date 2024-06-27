import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (userInfo) => ({
        url: "/user/registration",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = authApi;
