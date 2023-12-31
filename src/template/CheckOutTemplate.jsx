import React, { Fragment, useEffect } from "react";

import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";
import CheckOut from "../pages/CheckOut/CheckOut";

import { useNavigate } from "react-router-dom";
import { getDataLocal } from "../utils/localStore";

const CheckOutTemplate = () => {
  const { isLoading } = useSelector((state) => state.loading);

  const navigate = useNavigate();

  useEffect(() => {
    const user = getDataLocal("user");
    if (user) {
      console.log(user);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <div className="flex flex-col min-h-screen justify-between">
        {/* <Header />
        <Outlet />
        <Footer /> */}

        <CheckOut />
      </div>
    </Fragment>
  );
};

export default CheckOutTemplate;
