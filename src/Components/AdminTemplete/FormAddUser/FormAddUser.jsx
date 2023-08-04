import { useFormik } from "formik";
import React from "react";
import { Input } from "antd";
import { userAdminSer } from "../../../services/userListServices";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../../redux/slices/userSlices";

const FormAddUser = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      userAdminSer
        .addUser(values)
        .then((result) => {
          dispatch(getAllUser());
          formik.resetForm();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik;
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-10">
        {/* Tài khoản*/}
        <div className="mb-3 mt-5">
          <h2 className="text-center text-xl font-bold">ADD USER</h2>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Tài khoản
          </label>
          <Input
            type="text"
            name="taiKhoan"
            onChange={handleChange}
            // onBlur={handleBlur}
            value={values.taiKhoan}
            // status={touched.taiKhoan && errors.taiKhoan ? "error" : null}
            placeholder="Nhập tài khoản"
            className="py-2"
          />

          {/* {touched.taiKhoan && errors.taiKhoan ? (
            <p className="text-red-500">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        {/* password */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Mật khẩu
          </label>
          <Input
            type="password"
            name="matKhau"
            // onBlur={handleBlur}
            onChange={handleChange}
            value={values.matKhau}
            // status={touched.matKhau && errors.matKhau ? "error" : null}
            placeholder="Nhập mật khẩu"
            className="py-2"
          />

          {/* {touched.matKhau && errors.matKhau ? (
            <p className="text-red-500">{errors.matKhau}</p>
          ) : null} */}
        </div>
        {/* Họ và tên */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Họ và tên
          </label>
          <Input
            type="text"
            name="hoTen"
            // onBlur={handleBlur}
            onChange={handleChange}
            value={values.hoTen}
            // status={touched.matKhau && errors.matKhau ? "error" : null}
            placeholder="Nhập họ và tên"
            className="py-2"
          />

          {/* {touched.matKhau && errors.matKhau ? (
            <p className="text-red-500">{errors.matKhau}</p>
          ) : null} */}
        </div>
        {/* Email */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <Input
            type="email"
            name="email"
            // onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            // status={touched.matKhau && errors.matKhau ? "error" : null}
            placeholder="Nhập email"
            className="py-2"
          />

          {/* {touched.matKhau && errors.matKhau ? (
            <p className="text-red-500">{errors.matKhau}</p>
          ) : null} */}
        </div>
        {/* SDT */}
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Số điện thoại
          </label>
          <div className="flex items-center">
            <Input
              type="text"
              name="soDt"
              // onBlur={handleBlur}
              onChange={handleChange}
              value={values.soDt}
              // status={touched.matKhau && errors.matKhau ? "error" : null}
              placeholder="Nhập số điện thoại"
              className="py-2 w-8/12"
            />

            <select
              class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block  p-2.5  dark:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 w-4/12"
              name="maLoaiNguoiDung"
              onChange={handleChange}
              value={values.maLoaiNguoiDung}
            >
              <option selected>Select user type</option>
              <option value="KhachHang">Khách Hàng</option>
              <option value="QuanTri">Quản Trị</option>
            </select>
          </div>

          {/* {touched.matKhau && errors.matKhau ? (
            <p className="text-red-500">{errors.matKhau}</p>
          ) : null} */}
        </div>

        <button
          // onClick={info}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Add user
        </button>
      </form>
    </div>
  );
};

export default FormAddUser;
