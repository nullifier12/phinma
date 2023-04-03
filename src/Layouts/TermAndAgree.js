const TermsAndAgree = () => {
  return (
    <div className="wrapperer flex_align_justify">
      <div className="terms_service">
        <div class="tc_item tc_head flex_align_justify">
          <div class="icon flex_align_justify">
            <img src="img/favicon.png" alt="" />
          </div>
          <div class="text">
            <h2>PHINMA DOCUMENT REQUEST</h2>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="tc_item tc_body">
          <ol>
            <li>
              <h3>Online Request</h3>
              <p>
                {" "}
                <b>Filing Instructions </b>
              </p>{" "}
              <br />
              <p>
                1. Clear any financial or academic hold on your records. <br />
                2. For undergraduate, check if your grades have been posted{" "}
                <br />
                3. Office of the Registrar staff will review the completeness of
                the form, verify requests, and assess for the necessary payment
                of applicable fees. <br />
                4. Submit proof of payment to the input file for payment
                validation Payment first policy prior to the processing and
                release of the documents. No cancellation, substitution, or
                refund of payment for the shall be made for any invalid or
                withdrawn document request. <br />
                5. Upon receipt of proof of payment, Office of the Registrar
                staff will acknowledge the completeness of the request. Time of
                delivery may varies with the courier. <br />
                6. An unauthorized request (requesting documents without the
                consent of the person) is punishable by law. <br />
                7. University Registrar reserves the right to withhold, deny or
                cancel any request for document due to pending accountabilities.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default TermsAndAgree;
