import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlices";
import nguoiDungSlice from './slices/nguoiDungSlice';
import loadingSlice from "./slices/loadingSlice";
import  QuanLyDatVeReducer  from './reducers/QuanLyDatVeReducer';

export const store = configureStore({
  reducer: {
    user: userSlice,
    loading: loadingSlice,
    nguoiDung: nguoiDungSlice,
    QuanLyDatVeReducer,
  },
});
