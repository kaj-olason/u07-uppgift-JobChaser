import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "./services/jobAPI";
import jobFilterReducer from "./slices/jobFilterSlice";

export const store = configureStore({
  reducer: {
    jobFilter: jobFilterReducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  // prettier-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
