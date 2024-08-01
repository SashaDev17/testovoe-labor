import { configureStore } from "@reduxjs/toolkit";
import { reviewsApi } from "./reviewsApi";
import { questionsApi } from "./questionsApi";

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(reviewsApi.middleware)
      .concat(questionsApi.middleware),
});
