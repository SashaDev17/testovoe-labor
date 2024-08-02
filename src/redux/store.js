import { configureStore } from "@reduxjs/toolkit";
import { reviewsApi } from "./reviewsApi";
import { questionsApi } from "./questionsApi";
import { howItWorksApi } from "./howItWorksApi";

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    [howItWorksApi.reducerPath]: howItWorksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(reviewsApi.middleware)
      .concat(questionsApi.middleware)
      .concat(howItWorksApi.middleware),
});
