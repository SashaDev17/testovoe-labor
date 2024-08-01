import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://9d49b7aa3251b5b1.mokky.dev/' }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => 'reviews',
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
