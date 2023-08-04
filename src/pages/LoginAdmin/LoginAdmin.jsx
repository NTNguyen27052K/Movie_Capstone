import React from "react";
import Lottie from "react-lottie";
import * as animationLogin from "./../../assets/animation/animation_login.json";
import FormLoginAdmin from "../../Components/AdminTemplete/FormLoginAdmin/FormLoginAdmin";

const LoginAdmin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex max-w-screen-xl min-h-screen mx-auto  items-center">
      <div className="w-2/3">
        <Lottie
          options={defaultOptions}
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className="w-1/3">
        <FormLoginAdmin />
      </div>
    </div>
  );
};

export default LoginAdmin;
