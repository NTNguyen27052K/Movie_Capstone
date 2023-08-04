import { https } from "./config";

export const userSer = {
  sigIn: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  signUp: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
};
