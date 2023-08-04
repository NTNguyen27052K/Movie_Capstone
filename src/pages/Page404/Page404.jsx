import React from "react";
import Lottie from "react-lottie";
import * as animation404 from "./../../assets/animation/animation_404.json";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      {/* <Lottie
        options={defaultOptions}
        style={{ width: "100vh" }}
        className="h-screen"
        width={400}
      /> */}
      <NavLink to={"/"}>
        <Lottie
          options={defaultOptions}
          style={{ width: "100vh" }}
          className="h-screen"
          width={400}
        />
      </NavLink>
    </div>
  );
};

export default Page404;
