import React, { useEffect, useState } from "react";
import { Input } from "antd";
import "./tableUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { userAdminSer } from "../../../services/userListServices";
import { getAllUser } from "../../../redux/slices/userSlices";
import { useFormik } from "formik";
import { Button, Modal, Space, Table, Tag } from "antd";
import FormAddUser from "../FormAddUser/FormAddUser";
import { PlusOutlined } from "@ant-design/icons";
import ColumnGroup from "antd/es/table/ColumnGroup";

const TableUser = () => {
  const { users } = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   console.log(users);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      userAdminSer
        .updateUser({ ...values, maNhom: "GP01" })
        .then((result) => {
          console.log(result);
          dispatch(getAllUser());
          formik.resetForm();
          handleCancel();
        })
        .catch((error) => {
          console.log(error);
          alert("Update error!");
        });
    },
  });
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik;

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text, index) => <p key={index}>{text}</p>,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Chức vụ",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (text, record, index) => {
        // <p key={index}>{text}</p>;
        return (
          <Tag key={index} color={text == "QuanTri" ? "magenta" : "blue"}>
            {text == "QuanTri" ? "Quản trị" : "Khách hàng"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle" key={index}>
          <div className="flex justify-between">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                // formik.setValue(userNguyen);
                // console.log(record.taiKhoan);
                userAdminSer
                  .deleteUser(record.taiKhoan)
                  .then((result) => {
                    alert("Xóa thành công!");
                    dispatch(getAllUser());
                  })
                  .catch((error) => {
                    console.log(error);
                    alert("Error delete?");
                  });
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              // onClick={showModal}
              onClick={() => {
                console.log(record);
                formik.setValues(record);
                showModal();
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            {/* Form */}
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
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
                      value={values.soDT}
                      // status={touched.matKhau && errors.matKhau ? "error" : null}
                      placeholder="Nhập soDt"
                      className="py-2"
                    />

                    <select
                      className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block  p-2.5  dark:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 w-4/12"
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
                  // onClick={() => {
                  //   userAdminSer
                  //     .updateUser(values)
                  //     .then((result) => {
                  //       console.log(result);
                  //       dispatch(getAllUser());
                  //       formik.resetForm();
                  //     })
                  //     .catch((error) => {
                  //       console.log(error);
                  //       alert("Update error!");
                  //     });
                  // }}
                >
                  Update user
                </button>
              </form>
            </Modal>
          </div>
        </Space>
      ),
    },
  ];

  const userList = users.map((item, index) => {
    return {
      ...item,
      id: index + 1,
    };
  });

  return <Table columns={columns} dataSource={users.length > 0 && userList} />;
};

export default TableUser;
