import { Fragment, useCallback, useEffect, useState } from "react";
import style from "../components/CSS/dashboard.module.css";
import DataTable from "react-data-table-component";
import axios from "axios";
// import { CSVLink } from "react-csv";

const customStyles = {
  rows: {
    style: {
      minHeight: "50px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "2px", // override the cell padding for head cells
      paddingRight: "5px",
    },
  },
  cells: {
    style: {
      paddingLeft: "2px", // override the cell padding for data cells
      paddingRight: "5px",
    },
  },
};
const Accounts = () => {
  const showID = (e) => {
    console.log(e.currentTarget.id);
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "SchoolID",
      selector: (row) => row.schoolid,
    },
    {
      name: "Printed",
      selector: (row) => row.printed,
    },
    {
      name: "Done",
      selector: (row) => row.done,
    },
    {
      name: "Decline",
      selector: (row) => row.decline,
    },
    {
      name: "Action",
      button: true,
      cell: (row) => {
        return (
          <Fragment>
            <span id={row.id} className={style.viewData} onClick={showID}>
              <i className={`uil uil-eye ${style.iconButton}`} />
            </span>
            <span id={row.id} className={style.viewData2} onClick={showID}>
              <i className={`uil uil-edit ${style.iconButton}`} />
            </span>
            <span id={row.id} className={style.viewData3} onClick={showID}>
              <i className={`uil uil-trash ${style.iconButton}`} />
            </span>
          </Fragment>
        );
      },
    },
  ];
  const accountingTableHeader = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "SchoolID",
      selector: (row) => row.schoolid,
    },
    {
      name: "Action",
      button: true,
      cell: (row) => {
        return (
          <Fragment>
            <span id={row.id} className={style.viewData} onClick={showID}>
              <i className={`uil uil-eye ${style.iconButton}`} />
            </span>
            <span id={row.id} className={style.viewData2} onClick={showID}>
              <i className={`uil uil-edit ${style.iconButton}`} />
            </span>
            <span id={row.id} className={style.viewData3} onClick={showID}>
              <i className={`uil uil-trash ${style.iconButton}`} />
            </span>
          </Fragment>
        );
      },
    },
  ];

  const [table, setTable] = useState("registrar");
  const [user, setUser] = useState({});
  const getAccount = useCallback(async () => {
    await axios.post("/getAccount").then((result) => {
      setUser(result.data);
    });
  }, []);
  useEffect(() => {
    getAccount();
  }, [getAccount]);

  const data = [
    {
      id: 1,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 2,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 3,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 4,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 5,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 6,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 7,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 8,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 9,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 10,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
    {
      id: 11,
      name: "Roland Capinpin Jr.",
      email: "capinpinroland25@gmail.com",
      phone: "09123456789",
      address: "Sta.barbara",
      gender: "Male",
      schoolid: "01121999",
      printed: 2,
      done: 0,
      decline: 3,
    },
  ];
  // const CSVheader = [
  //   {
  //     label: "Name",
  //     key: "name",
  //   },
  //   { label: "Email", key: "email" },
  //   { label: "Phone", key: "phone" },
  //   { label: "Address", key: "address" },
  //   { label: "Gender", key: "gender" },
  //   { label: "School ID", key: "schoolid" },
  //   { label: "Printed", key: "printed" },
  //   { label: "Done", key: "done" },
  //   {
  //     label: "Decline",
  //     key: "decline",
  //   },
  // ];
  const changeAccountTable = (e) => {
    const id = e.target.selectedIndex;
    const el = e.target.childNodes[id];
    const option = el.getAttribute("value");
    setTable(option);
  };

  return (
    <Fragment>
      <section className={style.dashboard}>
        <div className={style.top}>
          <div className={style["dash-content"]}>
            <h3>
              Hello {user.role} {user.username}
            </h3>
          </div>
          <div className={style.tableAccounts}>
            <div className={style.title}>
              <h4>
                <i className={`uil uil-users-alt ${style.accountIcon}`}> </i>
                {table === "registrar"
                  ? "Registrar Accounts"
                  : table === "admin"
                  ? "Admin Accounts"
                  : table === "accounting"
                  ? "Accounting Account"
                  : null}
                <span className="btn btn-primary btn-sm float-end">
                  Add Accounts
                </span>
                {/* {table === "registrar" && (
                <CSVLink
                  filename="Accounting Records"
                  data={data}
                  headers={CSVheader}
                  className="btn btn-success btn-sm float-end"
                  style={{ marginRight: 10 }}
                >
                  Download
                </CSVLink>
              )} */}
              </h4>
            </div>

            <select className={style.accountType} onChange={changeAccountTable}>
              <option value="registrar" id="1">
                Registrar
              </option>
              <option value="accounting" id="2">
                Accounting
              </option>
              <option value="admin" id="3">
                Admin
              </option>
            </select>
            {table === "registrar" ? (
              <DataTable
                data={data}
                columns={columns}
                customStyles={customStyles}
                pagination
              />
            ) : table === "admin" ? (
              <DataTable
                data={data}
                columns={accountingTableHeader}
                customStyles={customStyles}
                pagination
              />
            ) : table === "accounting" ? (
              <DataTable
                data={data}
                columns={accountingTableHeader}
                customStyles={customStyles}
                pagination
              />
            ) : null}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Accounts;
