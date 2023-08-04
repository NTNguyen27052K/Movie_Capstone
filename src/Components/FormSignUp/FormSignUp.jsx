import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "antd";
import { userSer } from "../../services/userServices";
import { setLocal } from "../../utils/localStore";
import { NavLink, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setDataName } from "../../redux/slices/userSlices";

const FormSignUp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  //   const info = () => {
  //     messageApi.info("Hello, Ant Design!");
  //   };
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    onSubmit: (values) => {
      //Check API
      console.log(values);
      userSer
        .signUp(values)
        .then((result) => {
          console.log(result);
          setLocal("user", result.data.content);
          dispatch(setDataName(result.data.content));
          messageApi.success("Sigin ok");

          setTimeout(() => {
            navigate("/");
          }, [2000]);
        })
        .catch((errors) => {
          console.log(errors);
          //   messageApi.error(errors.response.data.content);
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(5, "Must be 5 characters or hight")
        .required("Empty"),
      matKhau: Yup.string()
        .min(5, "Must be 5 characters or hight")
        .required("Empty"),
      email: Yup.string()
        .min(5, "Must be 5 characters or hight")
        .email("Invalid email address")
        .required("Empty"),
      soDt: Yup.string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is not valid")
        .required("Empty"),
      hoTen: Yup.string()
        .min(5, "Must be 5 characters or hight")
        .required("Empty"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div>
      {contextHolder}
      <form onSubmit={handleSubmit} className="mt-5">
        <h2 className="text-center text-xl font-bold">Sign Up</h2>
        {/* Tài khoảng */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Tài khoản
          </label>
          <Input
            type="text"
            name="taiKhoan"
            onBlur={handleBlur}
            onChange={handleChange}
            status={touched.taiKhoan && errors.taiKhoan ? "error" : null}
            placeholder="Nhập tài khoản"
            className="py-2"
          />

          {touched.taiKhoan && errors.taiKhoan ? (
            <p className="text-red-500">{errors.taiKhoan}</p>
          ) : null}
        </div>
        {/* Mật khẩu */}
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mật khẩu
          </label>
          <Input
            type="password"
            name="matKhau"
            onBlur={handleBlur}
            onChange={handleChange}
            status={touched.matKhau && errors.matKhau ? "error" : null}
            placeholder="Nhập mật khẩu"
            className="py-2"
          />

          {touched.matKhau && errors.matKhau ? (
            <p className="text-red-500">{errors.matKhau}</p>
          ) : null}
        </div>
        {/* Họ và tên */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Họ và tên
          </label>
          <Input
            type="text"
            name="hoTen"
            onBlur={handleBlur}
            onChange={handleChange}
            status={touched.hoTen && errors.hoTen ? "error" : null}
            placeholder="Nhập họ và tên"
            className="py-2"
          />

          {touched.hoTen && errors.hoTen ? (
            <p className="text-red-500">{errors.hoTen}</p>
          ) : null}
        </div>
        {/* Email */}
        <div className="mb-3 ">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <Input
            type="text"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            status={touched.email && errors.email ? "error" : null}
            placeholder="Nhập email"
            className="py-2"
          />

          {touched.email && errors.email ? (
            <p className="text-red-500">{errors.email}</p>
          ) : null}
        </div>
        {/* Phone */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Số điện thoại
          </label>
          <Input
            type="text"
            name="soDt"
            onBlur={handleBlur}
            onChange={handleChange}
            status={touched.soDt && errors.soDt ? "error" : null}
            placeholder="Nhập tài khoản"
            className="py-2"
          />

          {touched.soDt && errors.soDt ? (
            <p className="text-red-500">{errors.soDt}</p>
          ) : null}
        </div>

        <button
          // onClick={info}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3"
        >
          SignUp
        </button>
        <p className="mb-3">
          Already have an account?
          <NavLink to={"/login"} className="text-blue-500">
            Login now
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default FormSignUp;
