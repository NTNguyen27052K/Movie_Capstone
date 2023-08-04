import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataLocal } from "../../utils/localStore";
import { userAdminSer } from "../../services/userListServices";

//createAsyncThunk Middleware
export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const response = await userAdminSer.getAllUserList();
  return response.data.content;
});

const initialState = {
  name: getDataLocal("user"),
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataName: (state, action) => {
      if (state.name == null) {
        state.name = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      // console.log(state);
      // console.log(action);
      state.users = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      console.log("error");
      // console.log(action);
      // state.users = [
      //   {
      //     hoTen: "nguyen",
      //     maLoaiNguoiDung: "QuanTri",
      //   },
      // ];
    });
  },
});
export const { setDataName } = userSlice.actions;

export default userSlice.reducer;
