import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { cinemaSer } from "../../services/cinemaServices";
import TabMovieItem from "./TabMovieItem";

const TabMovie = () => {
  const [infoSysCinema, setInfoSysCinema] = useState([]);
  useEffect(() => {
    cinemaSer
      .getAllInfoCinemaSystem()
      .then((result) => {
        // console.log(result);
        setInfoSysCinema(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderItemTab = () => {
    // console.log(infoSysCinema);
    return infoSysCinema.map((item, index) => {
      return {
        label: <img src={item.logo} className="w-10 h-10" alt="" />,
        key: index,
        children: <TabMovieItem maHeThongRap={item.maHeThongRap} />,
      };
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-5">
      <Tabs tabPosition={"left"} items={renderItemTab()} />
    </div>
  );
};

export default TabMovie;
