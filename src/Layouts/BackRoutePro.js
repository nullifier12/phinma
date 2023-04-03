import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Protected = (props) => {
  let cookies = new Cookies();
  const authCookie = cookies.get("authCookie");
  // const passportCookie = cookies.get("connect.sid");
  // console.log(passportCookie);
  if (!authCookie) {
    return <Navigate to="/Login" replace />;
  }
  return props.children;
};
export default Protected;
