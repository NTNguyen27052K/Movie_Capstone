import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/slices/userSlices";
import TableUser from "../../Components/AdminTemplete/TableUser/TableUser";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import FormAddUser from "../../Components/AdminTemplete/FormAddUser/FormAddUser";

const UserManage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  // console.log(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        className="my-5 py-5 flex justify-center items-center bg-blue-500"
        onClick={showModal}
        icon={<PlusOutlined />}
      >
        Add user
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <FormAddUser />
      </Modal>
      <TableUser />
    </div>
  );
};

export default UserManage;
