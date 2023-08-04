import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataName } from "../redux/slices/userSlices";
import { setLocal } from "../utils/localStore";
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector((state) => state.user);
  // console.log(name);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="my-5 ">
          <img
            src="https://picsum.photos/200/300"
            className="w-12 h-12 flex mx-auto rounded-full"
            alt=""
          />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <NavLink to={"/admin"}>Users</NavLink>,
            },
            {
              key: "2",
              icon: <i className="fa-solid fa-clapperboard"></i>,
              label: <NavLink to={"/admin/film"}>Films</NavLink>,
            },
            {
              key: "3",
              icon: <i className="fa-regular fa-calendar-days"></i>,
              label: <NavLink to={"/admin/showtime"}>Showtime</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex justify-between items-center"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          {/* <i class="fa-regular fa-user"></i> */}
          {name != null ? (
            <h2 className="text-black mr-12 font-bold">
              <i className="fa-solid fa-user mr-2"></i>
              {name.hoTen}
              <button
                onClick={() => {
                  dispatch(setDataName(""));
                  setLocal("user", null);
                  navigate("/");
                  window.location.reload();
                }}
              >
                <i className="fa-solid fa-right-from-bracket fa-lg ml-2"></i>
              </button>
            </h2>
          ) : (
            ""
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
