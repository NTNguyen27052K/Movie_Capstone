import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "antd";
import { userSer } from "../../../services/userServices";
import { setLocal } from "../../../utils/localStore";
import { useDispatch } from "react-redux";
import { setDataName } from "../../../redux/slices/userSlices";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const FormLoginAdmin = () => {
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      //Check API
      //   console.log(values);
      userSer
        .sigIn(values)
        .then((result) => {
          if (result.data.content.maLoaiNguoiDung == "QuanTri") {
            setLocal("user", result.data.content);
            dispatch(setDataName(result.data.content));
            messageApi.success("Sigin ok");
            setTimeout(() => {
              navigate("/admin");
            }, [2000]);
          } else {
            // formik.errors.taiKhoan("Không phải quền admin");
            // console.log("Không phải quền admin");
            dispatch(setDataName(""));
            setLocal("user", null);

            // navigate("/");
            window.location.reload();
          }
        })
        .catch((errors) => {
          formik.resetForm();
          messageApi.error(errors.response.data.content);
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Required"),
      matKhau: Yup.string().required("Required"),
      // .matches(
      //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      //   "Syntax error"
      // ),
    }),
  });
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik;

  return (
    <div className="">
      <h2 className="font-bold text-center text-2xl mb-5">Login Admin</h2>
      {contextHolder}
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="mb-3 mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Tài khoản
          </label>
          <Input
            type="text"
            name="taiKhoan"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.taiKhoan}
            status={touched.taiKhoan && errors.taiKhoan ? "error" : null}
            placeholder="Nhập tài khoan"
            className="py-2"
          />

          {touched.taiKhoan && errors.taiKhoan ? (
            <p className="text-red-500">{errors.taiKhoan}</p>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Mật khẩu
          </label>
          <Input
            type="password"
            name="matKhau"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.matKhau}
            status={touched.matKhau && errors.matKhau ? "error" : null}
            placeholder="Nhập mật khẩu"
            className="py-2"
          />

          {touched.matKhau && errors.matKhau ? (
            <p className="text-red-500">{errors.matKhau}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLoginAdmin;
