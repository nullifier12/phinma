import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const LoginPro = (props) => {
  let cookies = new Cookies();
  const authCookie = cookies.get("authCookie");
  // const passportCookie = cookies.get("connect.sid");
  // console.log(passportCookie);
  if (!authCookie) {
    return props.children;
  }
  return <Navigate to="/" replace />;
};
export default LoginPro;
