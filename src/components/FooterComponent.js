import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <React.Fragment>
      <div className=" top-footer pl-4 pt-4 pb-2">
        <div className="row">
          <div className="col-6 ">
            <h4>Stay Connected</h4>
            <p>Sign up for the newsletter!</p>
            <input type="email" placeholder="Email"></input>
            <Button>
              {" "}
              <a href="#">Sign Up</a>{" "}
            </Button>
          </div>
          <div className="col-3">
            <h4> Find A Store</h4>
          </div>
          <div className="col-3">
            <h4> Get In Touch</h4>
            <a href="tel:+12065551234">
              <i className="fa fa-phone" />
            </a>{" "}
            <a href="http://www.facebook.com/">
              <i className="fa fa-comment" />
            </a>{" "}
            <a href="mailto:notreal@notreal.co">
              <i className="fa fa-envelope" />
            </a>{" "}
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/directory">Directory</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <h5>Social</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
            </div>
            <div className="col-4 col-sm-2 offset-1">
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home">FAQ</Link>
                </li>
                <li>
                  <Link to="/directory">Shipping</Link>
                </li>
                <li>
                  <Link to="/aboutus">Returns</Link>
                </li>
                <li>
                  <Link to="/contactus">Track Package</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
