import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDataName } from "../../redux/slices/userSlices";
import { getDataLocal, setLocal } from "../../utils/localStore";

const Header = () => {
  const { name } = useSelector((state) => {
    return state.user;
  });

  const [open, setOpen] = useState(false);

  const [placement, setPlacement] = useState("left");

  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NTN Movie
          </span>
        </a>
        <div className="flex md:order-2">
          {name != null ? (
            <div className="flex items-center">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="rounded-full w-8 h-8 mr-3"
              />
              <p className="text-white mr-3">{name.hoTen}</p>
              {/* dispatch(setDataName(result.data.content)); */}
              <button
                onClick={() => {
                  dispatch(setDataName(""));
                  setLocal("user", null);
                  window.location.reload();
                }}
              >
                <i className="fa-solid fa-right-from-bracket fa-xl text-white"></i>
              </button>
            </div>
          ) : (
            <>
              <NavLink to={"/login"} className={"mr-4"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-3 "
                >
                  Login
                </button>
              </NavLink>
              <NavLink to={"/signUp"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Sign Up
                </button>
              </NavLink>
            </>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            // type="button"
            type="primary"
            onClick={showDrawer}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Lịch chiếu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cụm rạp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tin tức
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Ứng dụng
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Sign In</p>
        <p>Sign Up</p>
        <hr />
        <p>Some contents...</p>
      </Drawer>
    </nav>
  );
};

export default Header;
