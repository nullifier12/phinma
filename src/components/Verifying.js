import { Fragment, useRef } from "react";
import style from "../components/CSS/dashboard.module.css";
import DataTable from "react-data-table-component";
const Verifying = () => {
  // const [searchDat, setSearch] = useState({});
  const search = useRef();
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
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Date",
      selector: (row) => row.date,
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
            <h4>Verifying Request</h4>
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
                      onChange={searchData}
                    />
                  </div>
                </div>

                <div className="card-body">
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
export default Verifying;
