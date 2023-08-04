import { https } from "./config";

export const userAdminSer = {
  getAllUserList: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", data);
  },
};
