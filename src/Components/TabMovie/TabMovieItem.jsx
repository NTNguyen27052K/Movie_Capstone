import React, { useEffect, useState } from "react";
import { Result, Tabs } from "antd";
import { cinemaSer } from "../../services/cinemaServices";
import moment from "moment";
import "./tabMovieItem.scss";

const TabMovieItem = ({ maHeThongRap }) => {
  const [systemCinema, setSystemCinema] = useState([]);

  useEffect(() => {
    cinemaSer
      .getAllInfoCinemaBySystem(maHeThongRap)
      .then((result) => {
        // console.log(result.data.content);
        setSystemCinema(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [maHeThongRap]);
  //mã hệ thống rạp thay dổi nên chạy component updating [maHeThongRap]
  const renderTabMovieItem = () => {
    // console.log(systemCinema[0]);
    return systemCinema[0]?.lstCumRap.map((item, index) => {
      return {
        label: (
          <div className="text-left w-60">
            <p className="truncate ...">{item.tenCumRap}</p>
            <p className="truncate ...">{item.diaChi}</p>
          </div>
        ),
        key: index,
        children: item.danhSachPhim.map((item, index) => {
          if (item.dangChieu) {
            return (
              <div className="flex" key={index}>
                <div className="w-2/12 mb-5 mr-5">
                  <img
                    src={item.hinhAnh}
                    className="rounded-md h-36 w-full"
                    alt=""
                  />
                </div>
                <div className="w-10/12">
                  <h3 className="font-bold mb-1">{item.tenPhim}</h3>
                  <div className="flex flex-wrap tabMovieItem">
                    {item.lstLichChieuTheoPhim
                      .slice(0, 4)
                      .map((suatChieu, index) => {
                        return (
                          <p
                            key={index}
                            className="border border-black rounded-md  py-2 mb-2  mr-2"
                          >
                            {moment(suatChieu.ngayChieuGioChieu).format(
                              "DD/MM/YYYY ~ h:mm"
                            )}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          }
        }),
      };
    });
  };

  return (
    <Tabs
      tabPosition={"left"}
      items={renderTabMovieItem()}
      className="overflow-x-auto "
      style={{ maxHeight: "500px" }}
    />
  );
};

export default TabMovieItem;
