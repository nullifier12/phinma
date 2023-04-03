import { Fragment } from "react";
import style from "../components/CSS/dashboard.module.css";
const Dahsboard = () => {
  return (
    <Fragment>
      <section className={style.dashboard}>
        <div className={style.top2}>
          {/* <i className="uil uil-bars sidebar-toggle col-6"></i> */}

          <h3 style={{ borderBottom: 1, fontSize: 19 }}>
            {" "}
            {/* <i
              style={{ color: " #070a08", fontSize: 21 }}
              className="uil uil-user-square col-6"
            ></i> */}
          </h3>
          <div className={style["dash-content"]}>
            <div className={style.overview}>
              <div className={style.title}>
                <i className="uil uil-tachometer-fast-alt"></i>
                <span className="text">Dahsboard</span>
              </div>
              <div className={style.boxes}>
                <div className={`${style.box} ${style.box1}`}>
                  <i className="uil uil-folder-question"></i>
                  <span className="text">New Request</span>
                  <span className="number">0</span>
                </div>
                <div className={`${style.box} ${style.box1}`}>
                  <i className="uil uil-folder-check"></i>
                  <span className="text">Request</span>
                  <span className="number">0</span>
                </div>
                <div className={`${style.box} ${style.box1}`}>
                  <i className="uil uil-archive"></i>
                  <span className="text">On Process</span>
                  <span className="number">0</span>
                </div>
              </div>
              <div className={style.boxes}>
                <div className={`${style.box} ${style.box1}`}>
                  <i className="uil uil-folder-question"></i>
                  <span className="text">New Request</span>
                  <span className="number">0</span>
                </div>
                <div className={`${style.box} ${style.box1}`}>
                  <i className="uil uil-folder-question"></i>
                  <span className="text">New Request</span>
                  <span className="number">0</span>
                </div>
                <div className={`${style.box} ${style.box1}`}>
                  <i className="uil uil-folder-question"></i>
                  <span className="text">New Request</span>
                  <span className="number">0</span>
                </div>
              </div>
            </div>
            <div className={style.overview}>
              <div className={style.title}>
                <i
                  style={{ color: "#21a032", fontSize: 30 }}
                  className="uil uil-megaphone"
                ></i>
                <span
                  style={{ fontSize: 20, fontWeight: 700 }}
                  className={style.text}
                >
                  Announcement
                </span>
              </div>
              <div className={style.boxes}>
                <div className={style.dashboardss}>
                  <div className={style.announcement}>
                    <input
                      placeholder="Title..."
                      className={style.inputTitle}
                      required
                      name="ANNOUNCE_TITLE"
                      type="text"
                    />{" "}
                    <textarea
                      placeholder="Announcement Message..."
                      className={style.textAreaF}
                      name="ANNOUNCE_TXT"
                      id=""
                      cols="100"
                      rows="5"
                    ></textarea>{" "}
                    <br />
                    <span className="btn btn-danger btn-sm">Submit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Dahsboard;

/* <div className={`row ${style.rowmargin}`}>
              <div className={`col-sm-2 ${style.dashcards} ${style.cardColor}`}>
                <i className={`uil uil-comments ${style.cardText}`}></i>
                <div />
                <span className={style.cardText}>Request</span>
                <div />
                <span className={style.cardText}>0</span>
              </div>
              <div className="col-1" />
              <div
                className={`col-sm-2 ${style.dashcards} ${style.cardColor2}`}
              >
                <i className={`uil uil-print ${style.cardText}`}></i>
                <div />
                <span className={style.cardText}>Printed</span>
                <div />
                <span className={style.cardText}>0</span>
              </div>
              <div className="col-1" />
              <div
                className={`col-sm-2 ${style.dashcards} ${style.cardColor3}`}
              >
                <i className={`uil uil-check-circle ${style.cardText}`}></i>
                <div />
                <span className={style.cardText}>Done</span>
                <div />
                <span className={style.cardText}>0</span>
              </div>
              <div className="col-1" />
              <div
                className={`col-sm-2 ${style.dashcards} ${style.cardColor4}`}
              >
                <i className={`uil uil-times-circle ${style.cardText}`}></i>
                <div />
                <span className={style.cardText}>Decline</span>
                <div />
                <span className={style.cardText}>0</span>
              </div>
            </div> */
/* <div className={style.accounts}>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <table className="table table-bordered table-striped table-hover table table-sm">
                      <thead className="thead-dark">
                        <tr className={style.header}>
                          <th className={style.headname}>Name</th>
                          <th className={style.headname}>Email</th>
                          <th className={style.headname}>Course</th>
                          <th className={style.headname}>Department</th>
                          <th className={style.headname}>Request</th>
                          <th className={style.headname}>Copy</th>
                          <th className={style.headname}>1st request?</th>
                          <th className={style.headname}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Roland Capinpin Jr.</td>
                          <td>capinpinroland25 @gmail.com</td>
                          <td>Information Tech</td>
                          <td>College of Computer Studies</td>
                          <td>TOR</td>
                          <td>3</td>
                          <td>Yes 1st request</td>
                          <td>03/27/23</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */
