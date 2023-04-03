import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Payment = (props) => {
  return (
    <Modal show={props.show} onHide={props.Close}>
      <Modal.Header>
        <Modal.Title> DOCUMENT FEES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="section_wrapper">
          <div className="only">
            <center>
              <img src="img/AU-logo.png" alt="" />
            </center>
            <table className="table-1">
              <thead>
                <tr>
                  <th className="no">No. of Copy: </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>₱350</th>
                  <td className="h">-</td>
                  <th className="th">TOR Reference</th>
                  <td className="input">
                    <input id="num1" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱350</th>
                  <td className="h">-</td>
                  <th className="th">TOR Board Exam</th>
                  <td className="input">
                    <input id="num2" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Certi.. Enroll..</th>
                  <td className="input">
                    <input id="num3" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Certi.. Gradua..</th>
                  <td className="input">
                    <input id="num4" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Certi.. Grades</th>
                  <td className="input">
                    <input id="num5" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Certi.. English Profi..</th>
                  <td className="input">
                    <input id="num6" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Certi.. NSTP Serial Num..</th>
                  <td className="input">
                    <input id="num7" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Certi.. Honor..</th>
                  <td className="input">
                    <input id="num8" type="number" />
                  </td>
                </tr>

                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">Subject Description</th>
                  <td className="input">
                    <input id="num9" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱80</th>
                  <td className="h">-</td>
                  <th className="th">Authentication</th>
                  <td className="input">
                    <input id="num10" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱800</th>
                  <td className="h">-</td>
                  <th className="th">Diploma</th>
                  <td className="input">
                    <input id="num11" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱200</th>
                  <td className="h">-</td>
                  <th className="th">FORM - 137</th>
                  <td className="input">
                    <input id="num12" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱80</th>
                  <td className="h">-</td>
                  <th className="th">Authentication</th>
                  <td className="input">
                    <input id="num13" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱600</th>
                  <td className="h">-</td>
                  <th className="th">CAV</th>
                  <td className="input">
                    <input id="num14" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">WES</th>
                  <td className="input">
                    <input id="num15" type="number" />
                  </td>
                </tr>
                <tr>
                  <th>₱150</th>
                  <td className="h">-</td>
                  <th className="th">CAD</th>
                  <td className="input">
                    <input id="num16" type="number" />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <th className="tt">
                    <button
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginBottom: 5,
                      }}
                    >
                      Add
                    </button>
                  </th>
                  <td className="input">
                    <input id="result" disabled />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="right-side">
              <div className="title">
                <h3>ONLINE PAYMENT TRANSACTION </h3>
              </div>
              <div className="bo-x">
                <div className="box_1" style={{ height: 350 }}>
                  <h3>Gcash:</h3>
                  <p>-Biller Name: PHINMA Araullo University</p>
                  <h3>Paymaya:</h3>
                  <p>-BIller Name: PHINMA EDUCATION</p>
                  <h3>ECPAY:</h3>
                  <p> &nbsp;-BIller Name: PHINMA EDUCATION</p>
                  <h3>China Bank:</h3>
                  <p>
                    -Account Name: Pamantasan ng Araullo, inc <br />
                    -Account Number: 2640786313
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.Close}>
          Close
        </Button>
        <Button variant="primary" onClick={props.Close}>
          Send Request
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;
