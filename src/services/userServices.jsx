import { https } from "./config";

export const userSer = {
  sigIn: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
};
