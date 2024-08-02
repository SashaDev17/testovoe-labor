import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const howItWorksApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://9d49b7aa3251b5b1.mokky.dev" }),
  endpoints: (builder) => ({
    getHowItWorks: builder.query({
      query: () => "/how_it_works",
    }),
  }),
});

export const { useGetHowItWorksQuery } = howItWorksApi;
