import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataLocal } from "../../utils/localStore";
import { userAdminSer } from "../../services/userListServices";
import { movieSer } from "../../services/movieServices";

//createAsyncThunk Middleware
export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const response = await userAdminSer.getAllUserList();
  return response.data.content;
});

//Rin Thêm bắt đầu
export const getAllMovie = createAsyncThunk(
  "nguoiDung.getAllMovie",
  async () => {
    const res = await movieSer.getAllListMovie();
    //sẽ return về giá trị muốn store lưu trữ.
    return res.data.content;
    // console.log(res.data.content);
  }
);
export const themPhimUploatHinh = (formData) => {
  return async (dispatch) => {
    try {
      let res = await movieSer.addPhim(formData);
      alert("Thêm Phim Thành Công");
      // console.log("res", res.data.content);
    } catch (orro) {
      console.log(orro);
      alert("thức bại");
    }
  };
};
// Rin thêm Kết Thúc
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
  // redux Thunk
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
