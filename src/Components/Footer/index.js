import React from "react";
import "./style.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <div className="footer_wrapper">
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="5" md="6" className="mb-4 mb-md-0 logo_section">
                <div className="footer_logo"></div>

                <div className="socialMedia">
                  <MDBBtn
                    outline
                    color="none"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>

                  <MDBBtn
                    outline
                    color="none"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>

                  <MDBBtn
                    outline
                    color="none"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>

                  <MDBBtn
                    outline
                    color="none"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="linkedin-in" />
                  </MDBBtn>
                </div>
              </MDBCol>

              <MDBCol lg="2" md="6" className="mb-4 mb-md-0 footer_text">
                <h5 className="tittle">Company</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Why Choose us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Testimonial
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="2" md="6" className="mb-4 mb-md-0 footer_text">
                <h5 className="tittle">Resources</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Terms and Condition
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="2" md="6" className="mb-4 mb-md-0 footer_text">
                <h5 className="tittle">Product</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Project managment
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Time tracker
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Time schedule
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Lead generate
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Remote Collaboration
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Footer;
