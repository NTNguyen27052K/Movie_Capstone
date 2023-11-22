import React from "react";
import Lottie from "react-lottie";
import * as animationLogin from "./../../assets/animation/animation_login.json";
import FromLogin from "../../Components/FromLogin/FromLogin";
import FormSignUp from "../../Components/FormSignUp/FormSignUp";

const SignUp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="xl:flex xl:items-center max-w-screen-xl h-[35rem] xl:mx-auto">
      <div className="w-1/2 hidden xl:block">
        <Lottie
          options={defaultOptions}
          //   style={{ height: "50vh", width: "100%" }}
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className="xl:w-1/2 w-full mx-auto px-5 xl:pl-28">
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
