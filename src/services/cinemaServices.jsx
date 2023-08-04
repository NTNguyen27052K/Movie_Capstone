import { https } from "./config";

export const cinemaSer = {
  getAllInfoCinemaSystem: () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllInfoCinemaBySystem: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    );
  },
};
