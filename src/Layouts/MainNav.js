import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboardnav from "./Dashboardnav";
import Dahsboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Accounts from "../components/Accounts";
import NewRequest from "../components/NewRequest";
import Request from "../components/Request";
import Printed from "../components/Printed";
import Done from "../components/Done";
import Reject from "../components/Reject";
import Verifying from "../components/Verifying";
import Releasing from "../components/Releasing";
const MainNav = () => {
  return (
    <Fragment>
      <Dashboardnav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard/main"} />} />
          <Route path="main/*" element={<Dahsboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="newrequest" element={<NewRequest />} />
          <Route path="request" element={<Request />} />
          <Route path="printed" element={<Printed />} />
          <Route path="donereq" element={<Done />} />
          <Route path="reject" element={<Reject />} />
          <Route path="verifying" element={<Verifying />} />
          <Route path="releasing" element={<Releasing />} />
        </Routes>
      </main>
    </Fragment>
  );
};
export default MainNav;
