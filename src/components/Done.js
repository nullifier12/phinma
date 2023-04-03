import { Fragment, useRef } from "react";
import style from "../components/CSS/dashboard.module.css";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";

const Done = () => {
  const search = useRef();
  const from = useRef();
  const toDate = useRef();
  const fromDate = () => {
    console.log(from.current.value + " " + toDate.current.value);
  };
  const showID = (e) => {
    console.log(e.currentTarget.id);
  };
  const columns = [
    {
      name: "Req. No",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Course",
      selector: (row) => row.course,
    },
    // {
    //   name: "Department",
    //   selector: (row) => row.department,
    // },
    {
      name: "Request",
      selector: (row) => row.request,
    },
    {
      name: "Copy",
      selector: (row) => row.copy,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Assign to",
      cell: (row) => {
        return (
          <Fragment>
            <select className={style.assign}>
              <option>Roland</option>
              <option>Jerwil</option>
            </select>
          </Fragment>
        );
      },
    },
    {
      name: "Prices",
      selector: (row) => row.price,
    },
    {
      name: "Payment",
      selector: (row) => row.payment,
    },
    {
      name: "Action",
      button: true,
      cell: (row) => {
        return (
          <Fragment>
            <span id={row.id} className={style.viewData2} onClick={showID}>
              <i className={`uil uil-eye ${style.iconButton}`} />
            </span>
            <span id={row.id} className={style.viewData} onClick={showID}>
              <i className={`uil uil-check ${style.iconButton}`} />
            </span>
            <span id={row.id} className={style.viewData3} onClick={showID}>
              <i className={`uil uil-trash ${style.iconButton}`} />
            </span>
          </Fragment>
        );
      },
    },
  ];
  const data = [
    {
      id: 1,
      name: "Roland Capinpin",
      email: "capinpinroland25@gmail.com",
      course: "IT",
      department: "CCS",
      date: "Jan. 12, 1999",
      request: "TOR",
      copy: 2,
      price: 450,
      payment: "proofofpay",
    },
  ];
  const searchData = () => {
    console.log(search.current.value);
  };
  return (
    <section className={style.dashboard}>
      <div className={style.top}>
        <div className={style["dash-content"]}>
          <h3>Hello Roland</h3>
        </div>
        <div className={style.tableAccounts}>
          <div className={style.title}>
            <h4>Done Request</h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={style.card}>
                <div className="right-search">
                  <div className={style.searchWrapper}>
                    <input
                      type="text"
                      name="search"
                      placeholder="Search......"
                      className={style.searchBar}
                      ref={search}
                      onKeyUp={searchData}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className={style.filterDate}>
                    From{" "}
                    <input
                      type="date"
                      className={style.from}
                      ref={from}
                      onChange={fromDate}
                    />
                    To{" "}
                    <input
                      type="date"
                      className={style.to}
                      ref={toDate}
                      onChange={fromDate}
                    />
                    <CSVLink
                      filename="Done Request"
                      className="btn btn-success btn-sm"
                      data={[]}
                      headers={[]}
                    >
                      Generate Report
                    </CSVLink>
                  </div>
                  {/* <table className="table table-bordered table-striped table-hover table-sm">
                  <thead className="thead-dark">
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Department</th>
                      <th>Date</th>
                      <th>Prices</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                </table> */}
                  <DataTable data={data} columns={columns} pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Done;
