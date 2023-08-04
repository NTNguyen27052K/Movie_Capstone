import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlices";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    loading: loadingSlice,
  },
});
