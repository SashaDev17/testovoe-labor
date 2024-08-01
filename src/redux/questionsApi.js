// src/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://9d49b7aa3251b5b1.mokky.dev/' }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => 'questions',
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
