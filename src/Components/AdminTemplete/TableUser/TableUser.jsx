import React from "react";
import { Space, Table, Tag } from "antd";
import "./tableUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { userAdminSer } from "../../../services/userListServices";
import { getAllUser } from "../../../redux/slices/userSlices";

const TableUser = () => {
  const { users } = useSelector((state) => state.user);
  //   console.log(users);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text, index) => <p key={index}>{text}</p>,
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
                console.log(record.taiKhoan);
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
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </Space>
      ),
    },
  ];
  const userList = users.map((item, index) => {
    return { ...item, id: index + 1 };
  });

  return <Table columns={columns} dataSource={users.length > 0 && userList} />;
};

export default TableUser;
