import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login/Login";
import AdminTemplate from "./template/AdminTemplate";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import UserManage from "./pages/UserManage/UserManage";
import QuanTriPhim from "./Components/QuanLyPhim/QuanTriPhim";
import SignUp from "./pages/SignUp/SignUp";
import CheckOutTemplate from "./template/CheckOutTemplate";
import CheckOut from "./pages/CheckOut/CheckOut";
import Detail from "./pages/Detail/Detail";
import Test from "./Components/Test";

// import CheckOutTemplate from "./template/CheckOutTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signUp" element={<SignUp />} />
        </Route>
        <Route path="test" element={<Test />}></Route>
        {/* checkout */}
        <Route path="/datve/:id" element={<CheckOutTemplate />}>
          <Route index element={<CheckOut />} />
        </Route>

        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<UserManage />} />
          <Route index path="film" element={<QuanTriPhim />} />
        </Route>

        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
