/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const baseApiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ["product"] });

const productApi = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: (query) => {
        console.log(query, "file name : productApi line number : +-18");

        return {
          url: `/product`,
          method: "GET",
          // params: ,
        };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    deleteManyProduct: builder.mutation({
      query: (payload: string[]) => {
        return {
          url: `/product/delete/`,
          method: "DELETE",
          body: payload,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetAllProductQuery,
  useDeleteManyProductMutation,
} = productApi;
