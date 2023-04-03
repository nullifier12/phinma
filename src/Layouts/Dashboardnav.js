import { NavLink, useNavigate } from "react-router-dom";
import style from "../components/CSS/dashboard.module.css";
import logo from "../components/img/favicon.png";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
const Dashboardnav = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    Swal.fire({
      title: "Are you sure you want to log out? ",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
      customClass: {
        popup: `popDelete`,
        container: `contDelete`,
        htmlContainer: `htmlDelete`,
        confirmButton: `btnDelete`,
        icon: `iconDelete`,
        title: `titleDelete`,
        cancelButton: `btnCancelDelete`,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const cookie = new Cookies();
        cookie.remove("authCookie", { path: "/" });
        navigate("/login", { replace: true });
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        // window.location = "/login";
      }
    });
  };

  const activeStyle = {
    textDecoration: "underline 1px",
    color: "#7AA874",
  };
  const activeNav = ({ isActive }) => {
    return isActive ? activeStyle : undefined;
  };
  return (
    <nav className={style.mainNav}>
      <div className={style["logo-name"]}>
        <div className={style["logo-image"]}>
          <img src={logo} alt="" />
        </div>

        <span className={style["logo_name"]}>Registrar Management System</span>
      </div>

      <div
        className={style["menu-items"]}
        // style={{ overflow: "scroll", height: 550 }}
      >
        <ul className={style["nav-links "]}>
          <li>
            <NavLink to={"main"} style={activeNav}>
              <i className={`uil uil-estate ${style.navIcon}`}></i>
              <span className={style["link-name"]}>Dahsboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"accounts"} style={activeNav}>
              <i className="uil uil-users-alt"></i>
              <span className={style["link-name"]}>Accounts</span>
            </NavLink>
          </li>
          <h3 className={style.role}>Accounting</h3>
          <li>
            <NavLink to={"verifying"} style={activeNav}>
              <i className="uil  uil-cloud-check"></i>
              <span className={style["link-name"]}>Verifiyng</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={"profile"} style={activeNav}>
              <i className="uil uil-user-square"></i>
              <span className={style["link-name"]}>Profile</span>
            </NavLink>
          </li> */}
          <h3 className={style.role}>Registrar</h3>
          <li>
            <NavLink to={"newrequest"} style={activeNav}>
              <i className="uil uil-folder-question"></i>
              <span className={style["link-name"]}>New request</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"request"} style={activeNav}>
              <i className="uil uil-folder-check"></i>
              <span className={style["link-name"]}>Request</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"printed"} style={activeNav}>
              <i className="uil uil-archive"></i>
              <span className={style["link-name"]}>On process</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"releasing"} style={activeNav}>
              <i className="uil uil-file-bookmark-alt"></i>
              <span className={style["link-name"]}>Releasing</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"donereq"} style={activeNav}>
              <i className="uil uil-check-circle"></i>
              <span className={style["link-name"]}>Done</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"reject"} style={activeNav}>
              <i className="uil uil-times-circle"></i>
              <span className={style["link-name"]}>Declined</span>
            </NavLink>
          </li>
          {/* <h3 className={style.role}>Approver</h3>
          <li>
            <NavLink to={"reject"} style={activeNav}>
              <i className="uil uil-times-circle"></i>
              <span className={style["link-name"]}>Pending Request</span>
            </NavLink>
          </li> */}
        </ul>

        <ul className="logout-mode">
          <li>
            <NavLink to={""} style={activeNav}>
              <i className="uil uil-signout"></i>
              <span className={style["link-name"]} onClick={logOut}>
                Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Dashboardnav;
