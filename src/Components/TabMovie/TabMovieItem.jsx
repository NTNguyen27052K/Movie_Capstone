import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { rapServ } from "../../services/rapServices";
import moment from "moment";
const TabMovieItem = ({ maHeThongRap }) => {
  const [lichChieu, setLichChieu] = useState([]);
  useEffect(() => {
    rapServ
      .getAllLichChieuHeThong(maHeThongRap)
      .then((res) => {
        console.log(res);
        setLichChieu(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maHeThongRap]);

  const renderTabMovieItem = () => {
    // lichChieu[0]? có nghĩa là nếu phần tử đầu tiên của mảng có thì mới .lstCumRap và map
    return lichChieu[0]?.lstCumRap.map((item, index) => {
      return {
        label: (
          <div className="text-left w-60">
            <p>{item.tenCumRap}</p>
            <p className="truncate ...">{item.diaChi}</p>
          </div>
        ),
        key: index,
        children: (
          <div className="space-y-5">
            {item.danhSachPhim.map((item, index) => {
              if (item.dangChieu) {
                return (
                  <div className="flex" key={index}>
                    <div className="w-2/12">
                      <img
                        style={{ width: 80, height: 120 }}
                        src={item.hinhAnh}
                        alt=""
                      />
                    </div>
                    <div className="w-10/12">
                      <div className="font-bold text-xl line-clamp-1  ">
                        <span className="text-white py-1 px-2 bg-orange-500 rounded-md mr-3">
                          C18
                        </span>
                        {item.tenPhim}
                      </div>

                      <div className="flex flex-wrap">
                        {item.lstLichChieuTheoPhim
                          .slice(0, 5)
                          .map((suatChieu, index) => {
                            return (
                              <p
                                key={index}
                                className="bg-white  p-2 text-dark bg-opacity-80 me-2 rounded-md py-2 px-4 mb-5 col-span-1 text-green-500"
                              >
                                {moment(suatChieu.ngayChieuGioChieu).format(
                                  "DD/MM/YYYY  h:mm "
                                )}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ),
      };
    });
  };

  return (
    <Tabs
      tabPosition="left"
      style={{ maxHeight: "400px", overflowY: "scroll" }}
      items={renderTabMovieItem()}
    />
  );
};

export default TabMovieItem;
