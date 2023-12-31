import React, { useEffect, useState } from "react";
import { movieSer } from "../../services/movieServices";

import "./ListMovie.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  set_loading_ended,
  set_loading_started,
} from "../../redux/slices/loadingSlice";

const ListMovie = () => {
  const [listMovie, setlistMovie] = useState([]);
  const dispatch = useDispatch();

  //   const getAllListMovie = async () => {
  //     const res = await movieSer.getAllListMovie();
  //     console.log(res);
  //     setlistMovie(res.data.content);
  //   };
  //   useEffect(() => {
  //     getAllListMovie();
  //   }, []);
  useEffect(() => {
    dispatch(set_loading_started());
    movieSer
      .getAllListMovie()
      .then((result) => {
        // console.log(result);
        setlistMovie(result.data.content);
        dispatch(set_loading_ended());
      })
      .catch((error) => {
        console.log(error);
        dispatch(set_loading_ended());
      });
  }, []);

  return (
    <div className="max-w-screen-xl xl:mx-auto py-2 xl:py-10 mx-10">
      <h2 className="text-xl xl:text-3xl font-bold mb-2 xl:mb-9">
        Danh sách phim
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2  md:gap-2 xl:gap-4">
        {listMovie.map((item, index) => {
          const { hinhAnh, moTa, tenPhim, maPhim } = item;
          return (
            <div className="movie__item mb-3" key={index}>
              <img
                src={hinhAnh}
                alt=""
                className="xl:h-[314px] xl:w-full object-cover rounded-md  h-40 w-full"
              />
              <div className="movie__item--text ">
                <h3 className="my-3 truncate text-xs xl:text-xl ">
                  <span
                    className="text-white py-1 px-2 bg-red-600 rounded-lg
              mr-3"
                  >
                    C18
                  </span>
                  {tenPhim}
                </h3>
                {/* hidden xl:block xl:line-clamp-2 */}
                <p className="hidden xl:line-clamp-2 my-3">{moTa}</p>

                <NavLink
                  className="w-full inline-block align-middle"
                  to={`/detail/${item.maPhim}`}
                >
                  <Button
                    className="w-full text-sm xl:text-lg xl:h-10 h-10"
                    type="primary"
                    danger
                  >
                    <NavLink to={`/detail/${item.maPhim}`}>
                      Chi tiết - Đặt vé
                    </NavLink>
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
