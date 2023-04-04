import { Fragment, useRef, useCallback, useEffect, useState } from "react";
import style from "../components/CSS/dashboard.module.css";
import DataTable from "react-data-table-component";
import Moment from "react-moment";
import axios from "axios";

const NewRequest = () => {
  const [newRequestData, setNewReqData] = useState([]);
  const [allRegistrar, setRegistrar] = useState([]);
  // const [reqCollections, setCollection] = useState([]);
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
      name: "Request Details",
      cell: (row) => {
        const newData = row.requestDetails.filter((item) => item !== null);
        return (
          <Fragment>
            <select className={style.assign}>
              {newData.map((d, index) => {
                return (
                  <option
                    key={index}
                  >{`${d.copyNumber} ${d.requestName}`}</option>
                );
              })}
            </select>
          </Fragment>
        );
      },
    },
    {
      name: "Date",
      selector: (row) => <Moment format="LL">{row.date}</Moment>,
    },
    {
      name: "Assign to",
      cell: (row) => {
        return (
          <Fragment>
            <select className={style.assign}>
              {allRegistrar.map((d) => {
                return (
                  <option id={d.id} key={d.id}>
                    {d.phn_username}
                  </option>
                );
              })}
            </select>
          </Fragment>
        );
      },
    },
    {
      name: "Total Request Payment",
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
  const getAllNewRequest = useCallback(async () => {
    await axios.get("/getNewRequest").then((result) => {
      const newData = result.data.map((d) => {
        return {
          id: d.id,
          name: `${d.nr_fname} ${d.nr_mname} ${d.nr_lname}`,
          email: d.nr_email,
          course: d.nr_course,
          department: d.nr_department,
          requestDetails: d.nr_form,
          date: d.nr_date,
          price: d.nr_price,
        };
      });
      setNewReqData(newData);
      axios.get("/getAllRegistrar").then((result) => {
        setRegistrar(result.data);
      });
    });
  }, []);

  useEffect(() => {
    getAllNewRequest();
  }, [getAllNewRequest]);

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
            <h4>New Request</h4>
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
                  <DataTable
                    data={newRequestData}
                    columns={columns}
                    pagination
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewRequest;
