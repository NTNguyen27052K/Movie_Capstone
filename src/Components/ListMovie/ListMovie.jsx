import React, { useEffect, useState } from "react";
import { movieSer } from "../../services/movieServices";
import { Result } from "antd";
import "./ListMovie.scss";
import { Button, Space } from "antd";
import { NavLink } from "react-router-dom";

const ListMovie = () => {
  const [listMovie, setlistMovie] = useState([]);
  //   const getAllListMovie = async () => {
  //     const res = await movieSer.getAllListMovie();
  //     console.log(res);
  //     setlistMovie(res.data.content);
  //   };
  //   useEffect(() => {
  //     getAllListMovie();
  //   }, []);
  useEffect(() => {
    movieSer
      .getAllListMovie()
      .then((result) => {
        // console.log(result);
        setlistMovie(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-9">Danh sách phim</h2>
      <div className="grid grid-cols-4 gap-4">
        {listMovie.map((item, index) => {
          const { hinhAnh, moTa, tenPhim, maPhim } = item;
          return (
            <div className="movie__item" key={index}>
              <img
                src={hinhAnh}
                alt=""
                className="h-[314px] w-full object-cover rounded-md"
              />
              <div className="movie__item--text ">
                <h3 className="my-3">
                  <span
                    className="text-white py-1 px-2 bg-red-600 rounded-md
              mr-3 "
                  >
                    C18
                  </span>
                  {tenPhim}
                </h3>
                <p className="line-clamp-2">{moTa}</p>
                <NavLink className="w-full my-3" to={`/detail/${maPhim}`}>
                  <Button type="primary" className="w-full my-3" danger>
                    MUA VÉ
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