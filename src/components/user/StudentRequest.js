import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Payment from "../../Layouts/Payment";
import DocumentRequest from "./DocumentRequest";
import logo from "../img/favicon.png";
import next from "../img/AU-logo.png";
import "../CSS/student.css";
const StudentRequest = () => {
  const [showPaymentModal, setPaymentModal] = useState(false);
  const [isFormReq, setFormReq] = useState(false);

  let toggleButton = true;

  const viewModeOfPayment = (e) => {
    setPaymentModal(true);
  };
  const closeViewPayment = (e) => {
    setPaymentModal(false);
  };
  const termsAndAgreements = () => {
    Swal.fire({
      title: "Data Privacy",
      html:
        "  <p> <strong>DATA PRIVACY INFORMATION</strong>: PHINMA Education recognizes its responsibilities under the Republic <br>, " +
        " Act No. 10173 (Act), also known as the Data Privacy Act of 2012, with respect to the data" +
        " they collect, record, organize, update, use, consolidate or destruct from the data subject." +
        " The personal data obtained from this web form is entered and stored within the school" +
        " authorized information systems. Some of these systems are hosted in foreign countries and so" +
        "  will the data you provide as well. The data will only be accessed by the PHINMA Education" +
        " authorized personnel. PHINMA Education has instituted appropriate organizational, technical," +
        " and physical security measures to ensure the protection of all the student's personal data." +
        "Furthermore, the information collected and stored in this form, and possibly stored in other" +
        "systems, shall only be used for the following purposes: <br> 1. Processing of your IT related" +
        "problem; <br> 2. Verification of the veracity of the personal information provided, and <br> 3." +
        "Internal reporting and analysis. By agreeing to this data privacy consent, you allow PHINMA" +
        "Education to store your personal data collected with thirds party cloud hosting services" +
        "such as -but not limited to- Google™ Inc. and/or Microsoft™ Corporation and their" +
        "affiliates. The retention of the information provided in this form shall be for a period of" +
        " 1-year maximum. When I submit this form, this will confirm that I have read the Data Privacy" +
        "information above and express my consent for PHINMA Education to collect, record, organize," +
        "update or modify, retrieve, consult, use, consolidate, block, erase or destruct my personal" +
        "data as may be required by the lawful order of the courts or in cases of emergency as" +
        "defined under the Data Privacy Law. I hereby affirm my right to be informed, object to" +
        "processing, access and rectify, suspend or withdraw my personal data, and be indemnified in" +
        " case of damages pursuant to the provisions of the Republic Act No. 10173 of the Philippines," +
        "Data Privacy Act of 2012 and its corresponding Implementing Rules and Regulations.</p>",
      input: "checkbox",
      inputPlaceholder: "I agree with terms and agreement.",
      didOpen: () => {
        Swal.getConfirmButton().disabled = toggleButton;
        Swal.getInput().addEventListener("change", (e) => {
          // Swal.getConfirmButton().disabled =
          Swal.getConfirmButton().disabled = toggleButton = !toggleButton;
        });
      },

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agree",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.getConfirmButton().disabled = toggleButton = !toggleButton;

        setFormReq(true);
      } else {
        Swal.getConfirmButton().disabled = toggleButton = !toggleButton;
      }
    });
  };
  return (
    <Fragment>
      <DocumentRequest show={isFormReq} handleClose={setFormReq} />
      <Payment show={showPaymentModal} Close={closeViewPayment} />
      <div className="container sec">
        <span className="overlay"></span>
        <center>
          <div className="header_wrapper">
            <header>
              <div>
                <img src={logo} alt="" />
                <a href="index.php">
                  <h2>Registrar management system</h2>
                </a>

                <div>
                  <ul className="button_ul">
                    <li className="button_top">
                      <Link to={""}>APPLY</Link>
                    </li>
                    <li className="button_top">
                      <Link to={""}>ABOUT</Link>
                    </li>
                    <li className="button_top">
                      <Link to={"https://www.phinma.edu.ph/contact-us/"}>
                        CONTACT US
                      </Link>
                    </li>
                    <li className="button_top">
                      <Link to={""}>SIGN IN</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
        </center>
        <div className="section_wrapper">
          <section>
            <div>
              <center>
                <h1>
                  Welcome to <br /> Registrar management
                  <br /> system
                </h1>
                <div className="imageContainer">
                  <img
                    src={next}
                    alt=""
                    style={{ width: 450, alignSelf: "center" }}
                  />
                </div>
                <div className="line-1" />
                <h2>How it works</h2>
              </center>
            </div>
            <div className="container-fluid">
              <div className="row">
                {/* <div className="col-4-sm card ">
                  <div className="card-body">
                    <div className="cards">
                      <h2>GRADE COMPLETION</h2>
                      <h3>Step#1:</h3>
                      <p>
                        -Go to the online payment and fees section to view the
                        total amount of your request on our PHINMA online
                        banking system. Once you have determined the total
                        amount, kindly pay it via online payment.{" "}
                        <b>
                          {" "}
                          (Please don't forget to take a screenshot of the proof
                          of payment, which will be required in the form).
                        </b>
                      </p>
                      <h3>Step#2:</h3>
                      <p>
                        -Fill Up All The Necessary Information To Complete The
                        Form.
                      </p>
                      <h3>Step#3:</h3>
                      <p>
                        -Please wait for the Gmail notification to confirm your
                        grade request before proceeding to payment.
                      </p>
                      <h3>Step#4:</h3>
                      <p>
                        -Indicate in the form that you have, attached a proof of
                        payment.
                      </p>
                      <h3>Step#5:</h3>
                      <p>
                        -After submitting the form, please wait for a
                        notification via email indicating that your request is
                        ready for release. Once you receive the notification,{" "}
                        <b>
                          (please take a screenshot of it as proof of release )
                        </b>
                        .
                      </p>
                      <h3>Step#6:</h3>
                      <p>
                        -After receiving the email notification, please proceed
                        to the PHINMA AU Registrar to claim your request.
                      </p>
                    </div>
                    <div className="buttonWrapper">
                      <span className="btn btn-primary actionButon">
                        Grade Compltion
                      </span>
                    </div>
                  </div>
                </div> */}

                <div className="col-4-sm card">
                  <div className="card-body">
                    <div className="cards">
                      <h2>DOCUMENT REQUEST</h2>
                      <h3>Step#1:</h3>
                      <p>
                        -Go to the online payment and fees section to view the
                        total amount of your request on our PHINMA online
                        banking system. Once you have determined the total
                        amount, kindly pay it via online payment.{" "}
                        <b>
                          {" "}
                          (Please don't forget to take a screenshot of the proof
                          of payment, which will be required in the form).
                        </b>
                      </p>
                      <h3>Step#2:</h3>
                      <p>
                        -Fill up all the necessary information to complete the
                        form.
                      </p>
                      <h3>Step#3:</h3>
                      <p>
                        -Choose the document(s) you Need to request and indicate
                        the number of copies needed{" "}
                        <b>(You can select multiple documents if necessary)</b>.
                      </p>
                      <h3>Step#4:</h3>
                      <p>
                        -Indicate in the form that you have, attached a proof of
                        payment.
                      </p>
                      <h3>Step#5:</h3>
                      <p>
                        -After submitting the form, please wait for a
                        notification via email indicating that your request is
                        ready for release. Once you receive the notification,{" "}
                        <b>
                          (please take a screenshot of it as proof of release )
                        </b>
                        .
                      </p>
                      <h3>Step#6:</h3>
                      <p>
                        -After receiving the email notification, please proceed
                        to the PHINMA AU Registrar to claim your request.
                      </p>
                    </div>
                    <div className="buttonWrapper">
                      <span
                        className="btn btn-primary actionButon"
                        onClick={termsAndAgreements}
                      >
                        DOCUMENT REQUEST
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4-sm card">
                  <div className="card-body">
                    <div className="cards">
                      <h2>ONLINE PAYMENT & FEES</h2>
                      <h3>Fees</h3>
                      <p>-Document request fee</p>
                      <p>-grade completion fee</p>
                      <h3>Payment</h3>
                      <p>-Paypal</p>
                      <p>-ECpay</p>
                      <p>-GCash</p>
                      <p>-China Bank</p>
                    </div>
                    <div className="buttonWrapper">
                      <span
                        className="btn btn-primary actionButon"
                        onClick={viewModeOfPayment}
                      >
                        More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
export default StudentRequest;
