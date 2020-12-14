import React from "react";
import { Modal } from "react-bootstrap";
import "../../assets/css/layout.css";
import facebook from "../../images/facebook_icon.png";
import gmail from "../../images/gmail.png";
import icon from "../../images/icon.png";
import background from "../../assets/img/bg_hero_1.svg";

export default function Login({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="modal"
      >
        <Modal.Body>
          <div>
            <img
              src={icon}
              width="50px"
              height="50px"
              className="rounded mx-auto d-block"
            />
            <div className="d-flex justify-content-center">
              <h3 className="font-weight-bold font-italic">ZOO</h3>
            </div>
            <div className="mt-3 ">
              <p className="text-primary font-weight-bold">Sign In</p>
            </div>
            <div className="form-group mt-2 ">
              <input
                type="text"
                className="inp form-control color"
                placeholder="Username"
                id="username"
              />
            </div>
            <div className="form-group mt-4 ">
              <input
                type="text"
                className="inp form-control color"
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block button"
              >
                Login
              </button>
            </div>
            <div className="d-flex justify-content-center font-italic">
              <p>or sign in with</p>
            </div>
            <div className="row mt-2 d-flex justify-content-center">
              <img src={facebook} width="40px" height="40px" />
              <img src={gmail} width="40px" height="40px" />
            </div>
            <div className="row small mt-2">
              <a className="col-9">Don't Have An Account?</a>
              <a>Forget Password</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
