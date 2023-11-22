import React from "react";
import Lottie from "react-lottie";
import * as animationLogin from "./../../assets/animation/animation_login.json";
import FromLogin from "../../Components/FromLogin/FromLogin";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //   max-w-screen-xl mx-auto
  return (
    <div className="flex items-center max-w-screen-xl xl:mx-auto h-[30rem]">
      <div className="w-1/2 pr-28 hidden xl:block">
        <Lottie
          options={defaultOptions}
          //   style={{ height: "50vh", width: "100%" }}
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className="mx-auto xl:w-1/2 xl:pl-28">
        <FromLogin />
      </div>
    </div>
  );
};

export default Login;
