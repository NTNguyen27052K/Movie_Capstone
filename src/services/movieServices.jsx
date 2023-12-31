import { https } from "./config";

export const movieSer = {
  getAllBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  delMovie: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  addPhim: (formData) => {
    return https.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  },
  getAllListMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09");
  },
};

export const movieServ = {
  getAllBanner: () => {
    return https.get('/api/QuanLyPhim/LayDanhSachBanner');
  },
  getAllMovie: () => {
    return https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09');
  },
};
