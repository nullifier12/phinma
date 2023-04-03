import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import StudentRequest from "../components/user/StudentRequest";
import MainNav from "./MainNav";
import Protected from "./BackRoutePro";
import LoginPro from "./RouteProtect";
// import Cookies from "universal-cookie";

// import Footer from "./Footer";
const Navigator = () => {
  // let cookie = new Cookies();
  // let Auth = cookie.get("authCookie");
  return (
    <Fragment>
      <Routes>
        {/* <Route
          path="/"
          element={<Navigate to={Auth ? "/dashboard" : "/reqform"} />}
        /> */}
        <Route
          path="/Login"
          element={
            <LoginPro>
              <Login />
            </LoginPro>
          }
        />
        <Route path="/" element={<StudentRequest />} />

        <Route
          path="/dashboard/*"
          element={
            <Protected>
              <MainNav />
            </Protected>
          }
        />
      </Routes>
    </Fragment>
  );
};
export default Navigator;
