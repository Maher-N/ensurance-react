import React from "react";
import "./style.css";
import { MDBInput, MDBBtn, MDBTypography } from "mdb-react-ui-kit";

function ContactUs() {
  return (
    <div className="body">
      <p className="title">contact us</p>
      <div className="half_circle"></div>
      <div className="form_wrapper">
        <div className="form">
          <form>
            <MDBInput id="formName" wrapperClass="mb-4" label="Name" />
            <MDBInput
              type="email"
              id="formEmail"
              wrapperClass="mb-4"
              label="Email address"
            />
            <MDBInput
              type="phone"
              id="formPhone"
              wrapperClass="mb-4"
              label="Email address"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="formMessage"
              rows={4}
              label="Message"
              className="message"
            />

            <MDBBtn type="submit" className="mb-4 send" block>
              <span>Send</span>
            </MDBBtn>
          </form>
        </div>
        <div className="address">
          <MDBTypography className="lead mb-0">
            Palestine - Nablus
          </MDBTypography>
          <br />
          <br />
          <MDBTypography className="lead mb-0">+970599-0000000</MDBTypography>
          <MDBTypography className="lead mb-0">+97092300000</MDBTypography>
          <br />
          <br />
          <MDBTypography className="lead mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            viverra orci at
            <br />
            urna ullamcorper gravida. Donec id vulputate odio. Nullam nisi
            lectus, fringilla
            <br />
            ultrices aliquam non, posuere vel orci.Lorem ipsum dolor sit amet,
            consectetur
            <br />
            adipiscing elit. Nulla viverra orci at urna ullamcorper gravida.
            Donec id vulputate <br />
            odio. Nullam nisi lectus, fringilla ultrices aliquam non, posuere
            vel orci. <br />
          </MDBTypography>
        </div>
      </div>
      <div className="bootom_icon"></div>
    </div>
  );
}

export default ContactUs;
