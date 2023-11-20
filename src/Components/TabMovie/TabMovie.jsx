import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { cinemaSer } from "../../services/cinemaServices";
import TabMovieItem from "./TabMovieItem";
import "./tabMovie.scss";

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
        label: <img src={item?.logo} className="w-14 h-14" alt="" />,
        key: index,
        children: <TabMovieItem maHeThongRap={item?.maHeThongRap} />,
      };
    });
  };

  return (
    <div className="hidden xl:block tab__movie max-w-screen-xl mx-auto mb-5 rounded border">
      <Tabs onTabScroll="true" tabPosition={"left"} items={renderItemTab()} />
    </div>
  );
};

export default TabMovie;
