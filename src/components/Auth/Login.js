import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/style.css";
import style from "../CSS/admin.module.css";
import axios from "axios";
import Logo from "../img/AU-logo.png";
import Cookies from "universal-cookie";
const Login = () => {
  const [loginErr, setLogin] = useState("");
  const uname = useRef();
  const pass = useRef();
  const form = useRef();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username: uname.current.value,
        password: pass.current.value,
      },
      withCredentials: true,
      url: "/adminLogin",
    }).then((result) => {
      if (result.data === false) {
        setLogin("No user found");
      } else if (result.data === "logged") {
        const cookies = new Cookies();
        cookies.set("authCookie", result.headers.etag, { path: "/" });
        navigate("/dashboard/main");
      }
      form.current.reset();
    });
  };
  return (
    <Fragment>
      <div className="container">
        <div className="img_au">
          <div className="imageCont">
            <img className="logo_me" src={Logo} alt="" />
          </div>
          <h6 className="project_name">
            PHINMA &nbsp;{" "}
            <img src={Logo} alt="" style={{ width: 70, height: 20 }} />
          </h6>
          {loginErr && (
            <div className={`alert alert-danger errorLog`} role="alert">
              {loginErr}
            </div>
          )}
        </div>
        <form onSubmit={onSubmit} ref={form}>
          <div className={style.container1}>
            <label htmlFor="REGISTRAR_EMAIL">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Email"
              name="REGISTRAR_EMAIL"
              ref={uname}
            />
            <label htmlFor="REGISTRAR_PASSWORD">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="REGISTRAR_PASSWORD"
              ref={pass}
            />
            <button type="submit" name="Confirm">
              Login
            </button>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </div>
          <div className="container2">
            <button type="button" className={style.cancelbtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default Login;
