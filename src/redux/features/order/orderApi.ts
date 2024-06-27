import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/order/create",
        method: "POST",
        body: payload,
      }),
    }),
    getSellCollections: builder.query({
      query: () => ({
        url: "/sell-collections/",
        method: "GET",
      }),
    }),
  }),
});

// export const getSellCollectionsApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getSellCollections: builder.query({
//       query: () => ({
//         url: "/sell-collections/",
//         method: "GET",
//       }),
//     }),
//   }),
// });

export const { useCreateOrderMutation } = productApi;
export const { useGetSellCollectionsQuery } = productApi;
