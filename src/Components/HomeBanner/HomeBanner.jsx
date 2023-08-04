import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { https } from "../../services/config";
import { movieSer } from "../../services/movieServices";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const HomeBanner = () => {
  const [banner, setBanner] = useState([]);
  const getAllBanner = async () => {
    const res = await movieSer.getAllBanner();
    // console.log(res.data.content);
    setBanner(res.data.content);
  };
  // console.log(banner);
  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    // autoplay
    <Carousel autoplay>
      {banner.map((banner, index) => {
        return (
          <div key={index}>
            <img
              className="w-full min-h-screen"
              src={banner.hinhAnh}
              style={contentStyle}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
