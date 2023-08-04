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
    <div className="flex max-w-screen-xl mx-auto">
      <div className="w-1/2 pr-28">
        <Lottie
          options={defaultOptions}
          //   style={{ height: "50vh", width: "100%" }}
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className="w-1/2 pl-28">
        <FromLogin />
      </div>
    </div>
  );
};

export default Login;
