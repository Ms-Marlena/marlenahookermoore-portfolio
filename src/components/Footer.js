import React from "react";

const Footer = () => (
  <>
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left bg-body-tertiary">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3"></div>
          <div className="text-center py-3">
            <p>Connect with Marlena on</p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://https://github.com/Ms-Marlena"
              >
                Github
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/marlena-hooker-moore/"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/marlenahookermoore/"
              >
                Instagram
              </a>
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3"></div>
        </div>
      </div>

      <div
        className="footer-copyright text-center py-3"
        style={{ fontSize: "10px" }}
      >
        © 2020 Footer Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  </>
);
export default Footer;
