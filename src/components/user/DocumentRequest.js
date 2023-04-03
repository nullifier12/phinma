import { Fragment, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Logo from "../img/AU-logo.png";
import style from "../CSS/documentReq.module.css";
const DocumentRequest = (props) => {
  const [selectTags, setSelectTags] = useState([
    { requestName: "", copyNumber: 1, statusRequest: "no", selectedValue: 0 },
  ]);
  const [totalPay, setTotalpay] = useState(0);
  const handleAddSelectTags = (index, event) => {
    setSelectTags([
      ...selectTags,
      { requestName: "", copyNumber: 1, statusRequest: "no", selectedValue: 0 },
    ]);

    let total = selectTags.reduce(
      (acc, obj) => parseInt(acc) + parseInt(obj.copyNumber),
      0
    );

    console.log(total);
  };

  const handleSelectTagChange = (index, event) => {
    // const indexes = event.target.selectedIndex;
    // const el = event.target.childNodes[indexes];
    // console.log(el.getAttribute("data-value"));
    const { value } = event.target;
    const newSelectTags = [...selectTags];
    newSelectTags[index].selectedValue =
      event.target.options[event.target.selectedIndex].dataset.value;
    newSelectTags[index].requestName = value;
    setSelectTags(newSelectTags);
    const newTotal = selectTags.map((d) => {
      const result = d.selectedValue * d.copyNumber;
      return { ...d, result };
    });
    // console.log(newTotal);
    const total = newTotal.reduce(
      (accumulator, item) => accumulator + item.result,
      0
    );
    setTotalpay(total);
    // setSelectTags((prevSelects) => {
    //   const updatedSelects = [...prevSelects];
    //   updatedSelects[index].selectedValue = dataset.value;
    //   return updatedSelects;
    // });
    // console.log(selectTags);
  };
  const copyHandler = (index, event) => {
    const { value } = event.target;
    const newSelectTags = [...selectTags];
    newSelectTags[index].copyNumber = value;
    setSelectTags(newSelectTags);
    const newTotal = selectTags.map((d) => {
      const result = d.selectedValue * d.copyNumber;
      return { ...d, result };
    });
    // console.log(newTotal);
    const total = newTotal.reduce(
      (accumulator, item) => accumulator + item.result,
      0
    );
    setTotalpay(total);
    // console.log(selectTags);
  };
  const reqStat = (index, event) => {
    const { value } = event.target;
    const newSelectTags = [...selectTags];
    newSelectTags[index].statusRequest = value;
    setSelectTags(newSelectTags);

    console.log(selectTags);
  };
  const pricing = {
    torRef: 350,
    torBoard: 350,
    torSchool: 350,
    certOfunit: 150,
    certOfEnrollment: 150,
    certOfGrad: 150,
    certOfgrade: 150,
    certOfEnrolledSem: 150,
    certOfenglish: 150,
    nstpSerial: 150,
    certOfHonor: 150,
    subjectDescription: 150,
    authenticate: 80,
    diploma: 800,
    form137: 200,
    CAV: 600,
    Hd: 500,
  };
  // const [reqTypePrice, setReqType] = useState();

  // const [copyOfreq, setCopy] = useState(1);
  const form = useRef();
  const fname = useRef();
  const mnane = useRef();
  const lname = useRef();
  const email = useRef();
  const course = useRef();
  const phoneNum = useRef();
  const dept = useRef();
  const bDay = useRef();
  const yearLvl = useRef();
  const address = useRef();
  const schoolId = useRef();
  const underGrad = useRef();
  const currentComp = useRef();
  const position = useRef();
  const reqType = useRef();
  const numOfcopy = useRef();
  const requestStatus = useRef();
  const proofOfpay = useRef();
  const tor = useRef();
  const torBoard = useRef();
  const form137 = useRef();
  const dismisal = useRef();
  const certification = useRef();
  const Auth = useRef();
  // const requestType = (event) => {
  //   const index = event.target.selectedIndex;
  //   const el = event.target.childNodes[index];
  //   console.log(el.getAttribute("value"));
  //   const { dataset } = event.target.options[event.target.selectedIndex];
  //   const dataValue = dataset.value;
  //   setReqType(dataValue);
  // };
  // const copy = (event) => {
  //   const { dataset } = event.target.options[event.target.selectedIndex];
  //   const dataValue = dataset.value;
  //   setCopy(dataValue);
  // };
  // let price = reqTypePrice * copyOfreq;
  const hideFormReq = () => {
    props.handleClose(false);
    // setCopy(1);
    // setReqType(null);
    setSelectTags([
      { requestName: "", copyNumber: 1, statusRequest: "no", selectedValue: 0 },
    ]);
  };
  // const saveRequest = (event) => {
  //   event.preventDefault();
  // };
  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={hideFormReq}
        dialogClassName={style.requestModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className={style.container}>
            <center>
              <img src={Logo} alt="" />
            </center>
            <center>
              <div className={style.header_wrapper}>
                <header>
                  <div>
                    <h2>registrar management system</h2>
                  </div>
                </header>
              </div>
            </center>
            <header>DOCUMENT REQUEST FORM</header>
            <center>
              <p>
                Please complete this form, be as detailed on your information as
                possible all text input is required.{" "}
              </p>
            </center>
            <form
              className={style.form}
              encType="multipart/form-data"
              ref={form}
            >
              <h6>REQUESTER INFORMATION</h6> <br />
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>First Name*</label>
                  <input
                    type="text"
                    placeholder="Firts name"
                    name="NEWREQUEST_NAME"
                    ref={fname}
                  />
                </div>
                <div className={style["input-box"]}>
                  <label>Middle*</label>
                  <input
                    type="text"
                    placeholder="Middle name"
                    name="NEWREQUEST_MIDDLE"
                    ref={mnane}
                  />
                </div>
              </div>
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>Last Name*</label>
                  <input type="text" placeholder="Last name" ref={lname} />
                </div>
                <div className={style["input-box"]}>
                  <label>Email*</label>
                  <input
                    type="email"
                    placeholder="Email address that you usually use."
                    ref={email}
                  />
                </div>
              </div>
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>Course*</label>
                  <div className="select-box">
                    <select name="NEWREQUEST_COURSE" ref={course}>
                      <option hidden></option>
                      <option value="Bachelor of Science in Information Technology">
                        Bachelor of Science in Information Technology (CITE)
                      </option>
                      <option value="Bachelor of Science in Civil Engineering">
                        Bachelor of Science in Civil Engineering (CITE)
                      </option>
                      <option value="Bachelor of Arts in English">
                        Bachelor of Arts in English (CELA)
                      </option>
                      <option value="Bachelor of Secondary Education ">
                        Bachelor of Secondary Education (CELA)
                      </option>
                      <option value="Bachelor of Special Needs Education">
                        Bachelor of Special Needs Education
                      </option>
                      <option value="Bachelor of Technical Vocational Teacher Education">
                        Bachelor of Technical Vocational Teacher Education
                        (CELA)
                      </option>
                      <option value="Bachelor of Secondary Education">
                        Bachelor of Secondary Education (CELA)
                      </option>
                      <option value="Bachelor of Arts in Political Science">
                        Bachelor of Arts in Political Science (CELA)
                      </option>
                      <option value="Bachelor of Elementary Education">
                        Bachelor of Elementary Education (CELA)
                      </option>
                      <option value="Bachelor of Early Childhood Education">
                        Bachelor of Early Childhood Education (CELA)
                      </option>
                      <option value="Bachelor of Science in Accountancy">
                        Bachelor of Science in Accountancy (CMA)
                      </option>
                      <option value="Bachelor of Science in Business Administration">
                        Bachelor of Science in Business Administration (CMA)
                      </option>
                      <option value="Bachelor of Science in Hospitality Management">
                        Bachelor of Science in Hospitality Management (CMA)
                      </option>
                      <option value="Bachelor of Science in Tourism Management">
                        Bachelor of Science in Tourism Management (CMA)
                      </option>
                      <option value="Bachelor of Science in Entrepreneurship">
                        Bachelor of Science in Entrepreneurship (CMA)
                      </option>
                      <option value="Bachelor of Science in Accounting Information System">
                        Bachelor of Science in Accounting Information System
                        (CMA)
                      </option>
                      <option value="Bachelor of Science in Management Accounting">
                        Bachelor of Science in Management Accounting (CMA)
                      </option>
                      <option value="Bachelor of Science in Criminology">
                        NoBachelor of Science in Criminology (CCJE)
                      </option>
                      <option value="Bachelor of Science in Nursing">
                        Bachelor of Science in Nursing(CAHS)
                      </option>
                      <option value="Bachelor of Science in Pharmacy">
                        Bachelor of Science in Pharmacy(CAHS)
                      </option>
                      <option value="Bachelor of Science in Medical Laboratory Science">
                        Bachelor of Science in Medical Laboratory Science(CAHS)
                      </option>
                      <option value="Other course">Other course</option>
                    </select>
                  </div>
                </div>

                <div className={style["input-box"]}>
                  <label>Department*</label>
                  <div className="select-box">
                    <select name="NEWREQUEST_DEPARTMENT" ref={dept}>
                      <option hidden></option>
                      <option value="CITE">CITE</option>
                      <option value="CAHS">CELA</option>
                      <option value="CMA">CMA</option>
                      <option value="CELA">CCJE</option>
                      <option value="CCJE">CAHS</option>
                      <option value="CAS">(CAS) All 1st year </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>Phone Number*</label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    name="NEWREQUEST_PHONE"
                    ref={phoneNum}
                  />
                </div>
                <div className={style["input-box"]}>
                  <label>Birthday*</label>
                  <input
                    type="date"
                    placeholder="Birthday (Optional)"
                    name="NEWREQUEST_BIRTHDAY"
                    ref={bDay}
                  />
                </div>
              </div>
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>Year level*</label>
                  <div className="select-box">
                    <select name="NEWREQUEST_YEARLEVEL" ref={yearLvl}>
                      <option hidden></option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="5th year">5th year</option>
                      <option value="Other year">Other year</option>
                    </select>
                  </div>
                </div>

                <div className={style["input-box"]}>
                  <label>Address*</label>
                  <input
                    type="text"
                    placeholder="Full address"
                    name="NEWREQUEST_ADDRESS"
                    ref={address}
                  />
                </div>
              </div>
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>School ID</label>
                  <input
                    type="text"
                    placeholder="School ID (Optional)"
                    name="NEWREQUEST_SCHOOLID"
                    ref={schoolId}
                  />
                </div>
                <div className={style["input-box"]}>
                  <label>If Under Graduate(Semester And Year Attended)</label>
                  <input
                    type="text"
                    placeholder="Under Graduate Semester &Year (Optional)"
                    name="NEWREQUEST_UNDERGRADUATE"
                    ref={underGrad}
                  />
                </div>
              </div>
              <div className={style.column}>
                <div className={style["input-box"]}>
                  <label>Current Company</label>
                  <input
                    type="text"
                    placeholder="Current Company (Optional)"
                    name="NEWREQUEST_COMPANY"
                    ref={currentComp}
                  />
                </div>
                <div className={style["input-box"]}>
                  <label>Position</label>
                  <input
                    type="text"
                    placeholder="Position (Optional)"
                    name="NEWREQUEST_POSITION"
                    ref={position}
                  />
                </div>
              </div>
              <h6>DOCUMENT TO REQUEST</h6>
              <center>
                <p>
                  Choose Document you want to REQUEST (You can Choose multiple
                  Document).
                </p>
              </center>
              <div className={style["gender-box"]}>
                {/* <div className={style["gender-option"]}>
                  <div className={style.request_Sudent}>
                    <div className={`${style.column} ${style.column_request}`}>
                      <div className="select-bo">
                        <select
                          name="NEWREQUEST_FORM1[]"
                          ref={reqType}
                          onChange={requestType}
                        >
                          <option hidden></option>
                          <option
                            value="TOR For Reference"
                            data-value={pricing.torRef}
                          >
                            ₱350 - TOR For Reference
                          </option>
                          <option
                            value="TOR For Board Exam"
                            data-value={pricing.torBoard}
                          >
                            ₱350 - TOR For Board Exam
                          </option>
                          <option
                            value="TOR For Copy School"
                            data-value={pricing.torSchool}
                          >
                            ₱350 - TOR For Copy School
                          </option>
                          <option
                            value="Certificate of Unit Earned"
                            data-value={pricing.certOfunit}
                          >
                            ₱150 - Certificate of Unit Earned
                          </option>
                          <option
                            value="Certificate of Enrollment"
                            data-value={pricing.certOfEnrollment}
                          >
                            ₱150 - Certificate of Enrollment
                          </option>
                          <option
                            value="Certificate of Graduation"
                            data-value={pricing.certOfGrad}
                          >
                            ₱150 - Certificate of Graduation
                          </option>
                          <option
                            value="Certificate of Grades"
                            data-value={pricing.certOfgrade}
                          >
                            ₱150 - Certificate of Grades
                          </option>
                          <option
                            value="Certificate of Enrolled Semester"
                            data-value={pricing.certOfEnrolledSem}
                          >
                            ₱150 - Certificate of Enrolled Semester
                          </option>
                          <option
                            value="Certificate of English Proficiency"
                            data-value={pricing.certOfenglish}
                          >
                            ₱150 - Certificate of English Proficiency
                          </option>
                          <option
                            value="Certificate of NSTP Serial Number"
                            data-value={pricing.nstpSerial}
                          >
                            ₱150 - Certificate of NSTP Serial Number
                          </option>
                          <option
                            value="Certificate of Honor"
                            data-value={pricing.certOfHonor}
                          >
                            ₱150 - Certificate of Honor
                          </option>
                          <option
                            value="Subject Description"
                            data-value={pricing.subjectDescription}
                          >
                            ₱150 - Subject Description
                          </option>
                          <option
                            value="Authentication"
                            data-value={pricing.authenticate}
                          >
                            ₱80 - Authentication
                          </option>
                          <option value="Diploma" data-value={pricing.diploma}>
                            ₱800 - Diploma
                          </option>
                          <option
                            value="FORM - 137"
                            data-value={pricing.form137}
                          >
                            ₱200 - FORM - 137
                          </option>
                          <option value="CAV" data-value={pricing.CAV}>
                            ₱600 - CAV
                          </option>
                          <option value="HD" data-value={pricing.Hd}>
                            ₱500 - HD
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="select-box">
                    <select
                      name="NEWREQUEST_COPY1[]"
                      ref={numOfcopy}
                      onChange={copy}
                    >
                      <option value="1" data-value={1}>
                        1 Copy
                      </option>
                      <option value="2" data-value={2}>
                        2 Copy{" "}
                      </option>
                      <option value="3" data-value={3}>
                        3 Copy
                      </option>
                      <option value="4" data-value={4}>
                        4 Copy
                      </option>
                      <option value="5" data-value={5}>
                        5 Copy
                      </option>
                    </select>
                  </div>
                  <div className="select-box" ref={requestStatus}>
                    <select name="NEWREQUEST_IFFIRTSREQUEST1[]">
                      <option value="no">No</option>
                      <option value="yes">Yes 1st request</option>
                    </select>
                  </div>
                  <div id="copy-container">
                    <br /> <label>Total Price</label>₱{" "}
                    <b style={{ textDecoration: "underline" }} id="total-price">
                      {price ? price : 0}
                    </b>
                    <br />
                  </div>
                </div> */}
                {selectTags.map((selectTag, index) => (
                  <div className={style["gender-option"]} key={index}>
                    <div className={style.request_Sudent}>
                      <div
                        className={`${style.column} ${style.column_request}`}
                      >
                        <div className="select-bo">
                          <select
                            name="requestName"
                            ref={reqType}
                            value={selectTag.requestName}
                            onChange={(event) =>
                              handleSelectTagChange(index, event)
                            }
                          >
                            <option hidden></option>
                            <option
                              value="TOR For Reference"
                              data-value={pricing.torRef}
                            >
                              ₱350 - TOR For Reference
                            </option>
                            <option
                              value="TOR For Board Exam"
                              data-value={pricing.torBoard}
                            >
                              ₱350 - TOR For Board Exam
                            </option>
                            <option
                              value="TOR For Copy School"
                              data-value={pricing.torSchool}
                            >
                              ₱350 - TOR For Copy School
                            </option>
                            <option
                              value="Certificate of Unit Earned"
                              data-value={pricing.certOfunit}
                            >
                              ₱150 - Certificate of Unit Earned
                            </option>
                            <option
                              value="Certificate of Enrollment"
                              data-value={pricing.certOfEnrollment}
                            >
                              ₱150 - Certificate of Enrollment
                            </option>
                            <option
                              value="Certificate of Graduation"
                              data-value={pricing.certOfGrad}
                            >
                              ₱150 - Certificate of Graduation
                            </option>
                            <option
                              value="Certificate of Grades"
                              data-value={pricing.certOfgrade}
                            >
                              ₱150 - Certificate of Grades
                            </option>
                            <option
                              value="Certificate of Enrolled Semester"
                              data-value={pricing.certOfEnrolledSem}
                            >
                              ₱150 - Certificate of Enrolled Semester
                            </option>
                            <option
                              value="Certificate of English Proficiency"
                              data-value={pricing.certOfenglish}
                            >
                              ₱150 - Certificate of English Proficiency
                            </option>
                            <option
                              value="Certificate of NSTP Serial Number"
                              data-value={pricing.nstpSerial}
                            >
                              ₱150 - Certificate of NSTP Serial Number
                            </option>
                            <option
                              value="Certificate of Honor"
                              data-value={pricing.certOfHonor}
                            >
                              ₱150 - Certificate of Honor
                            </option>
                            <option
                              value="Subject Description"
                              data-value={pricing.subjectDescription}
                            >
                              ₱150 - Subject Description
                            </option>
                            <option
                              value="Authentication"
                              data-value={pricing.authenticate}
                            >
                              ₱80 - Authentication
                            </option>
                            <option
                              value="Diploma"
                              data-value={pricing.diploma}
                            >
                              ₱800 - Diploma
                            </option>
                            <option
                              value="FORM - 137"
                              data-value={pricing.form137}
                            >
                              ₱200 - FORM - 137
                            </option>
                            <option value="CAV" data-value={pricing.CAV}>
                              ₱600 - CAV
                            </option>
                            <option value="HD" data-value={pricing.Hd}>
                              ₱500 - HD
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="select-box">
                      <select
                        name="copyNumber"
                        ref={numOfcopy}
                        value={selectTag.copyNumber}
                        onChange={(event) => copyHandler(index, event)}
                      >
                        <option value="1">1 Copy</option>
                        <option value="2">2 Copy </option>
                        <option value="3">3 Copy</option>
                        <option value="4">4 Copy</option>
                        <option value="5">5 Copy</option>
                      </select>
                    </div>
                    <div className="select-box" ref={requestStatus}>
                      <select
                        name="statusRequest"
                        onChange={(event) => reqStat(index, event)}
                        value={selectTag.statusRequest}
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes 1st request</option>
                      </select>
                    </div>
                  </div>
                ))}
                <div id="copy-container">
                  <br /> <label>Total Price</label>₱{" "}
                  <b style={{ textDecoration: "underline" }} id="total-price">
                    {totalPay}
                  </b>
                  <br />
                </div>
                <span
                  className={`${style.addRequest} btn btn-secondary`}
                  onClick={handleAddSelectTags}
                >
                  Add Request
                </span>
              </div>
              <h6>ONLINE PAYMENT TRANSACTION</h6>
              <center>
                <p>You can send your proof of payment here</p>
              </center>
              <div>
                <br></br>
                <b>GCash:</b> <br />-
                <i>Biller name: PHINMA Araullo University</i> <br />
                <br />
                <b>Paymaya:</b> <br />-<i>Biller name: PHINMA EDUCATION </i>{" "}
                <br />
                <br />
                <b>ECPay:</b> <br />-<i>Biller name: PHINMA EDUCATION </i>{" "}
                <br />
                <br />
                <b>China Bank:</b> <br />-
                <i>Account name: Pamantasan ng Araullo, inc. </i> <br />-
                <i>Account number: 2640786313 </i> <br />
                <br />
                <b>If your 1st request:</b> <br />-<i>TOR</i> <br />-
                <i>Diploma</i> <br />-<i>Form - 137</i> <br />-
                <i>You can send your ID as a reference for proof of payment.</i>
                <div className={style["input-box"]}>
                  <label>
                    <b>"Please send your proof of payment here. </b>
                  </label>
                  <input
                    type="file"
                    name="NEWREQUEST_PROOFOFPAYMENT"
                    ref={proofOfpay}
                  />
                </div>
                <h6>OTHER REQUAREMENTS TRANSACTION (Optional)</h6>
                <center>
                  <p>You can send your other requarements here</p>
                </center>
                <b>TOR Copy for School:</b> <br />
                <div className={style["input-box"]}>
                  <label>
                    <b>
                      Request Letter from Current School (please upload the
                      scanned copy){" "}
                    </b>
                    <br /> Note: We will not process your request without the
                    clear scanned copy (PDF) of the Request Letter of your
                    current school.
                  </label>
                  <input type="file" name="NEWREQUEST_TORSCHOOL" ref={tor} />
                </div>
                <b>TOR For Board Exam:</b> <br />
                <div className={style["input-box"]}>
                  <label>
                    {" "}
                    <b>Requirements: </b> <br />
                    a. Passport size picture <br />
                    b. Colored, with white background <br />
                    c. Taken in full-face view directly facing the camera <br />
                    d. With neutral facial expression, and both eyes open <br />
                    event. With HANDWRITTEN (not computer-generated) name tag
                    legibly showing PRINTED FULL NAME in the format: First Name,
                    Middle Initial, Last Name and Extension Name, if any
                  </label>
                  <input type="file" name="NEWREQUEST_TOREXAM" ref={torBoard} />
                </div>
                <b>Form 137 For Reference:</b> <br />
                <div className={style["input-box"]}>
                  <label>
                    <b>Request Letter from Current School </b> <br /> Note: We
                    will not process your request without the clear scanned copy
                    (PDF) of the Request Letter of your current school.
                  </label>
                  <input type="file" name="NEWREQUEST_FORM137" ref={form137} />
                </div>
                <b> HONOROBALE DISMISSAL (HD) :</b> <br />
                <div className={style["input-box"]}>
                  <label>
                    <b> Upload your Withdrawal Form </b> <br /> Note: We will
                    not process your request without the clear scanned copy
                    (PDF) of your Withdrawal Form.
                  </label>
                  <input type="file" name="NEWREQUEST_HD" ref={dismisal} />
                </div>
                <b>CERTIFICATION, AUTHENTICATION, AND VERIFICATION (CAV):</b>{" "}
                <br></br>
                <div className={style["input-box"]}>
                  <label>
                    {" "}
                    <b>
                      Please Attach a clear scanned copy (PDF) of your TOR. (FOR
                      CAV REQUEST ONLY)
                    </b>{" "}
                    <br /> Note: We will not process your CAV request without
                    the clear scanned copy (PDF) of your TOR.
                  </label>
                  <input
                    type="file"
                    name="NEWREQUEST_CAV"
                    ref={certification}
                  />
                </div>
                <b>AUTHENTICATION:</b> <br />
                <div className={style["input-box"]}>
                  <label>
                    {" "}
                    <b>Upload Documents to be authentication. </b>
                  </label>
                  <input type="file" name="NEWREQUEST_AUTH" ref={Auth} />
                </div>
              </div>
            </form>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={hideFormReq}>
            Send Request
          </Button>
          <Button variant="secondary" onClick={hideFormReq}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default DocumentRequest;
