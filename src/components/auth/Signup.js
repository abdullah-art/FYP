import React from "react";
import "../../assets/css/layout.css";
import { Modal } from "react-bootstrap";

export default function Signup({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="modal"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="title">SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="signup">
            <input
              type="text"
              id="username"
              class="fadeIn second"
              name="username"
              placeholder="Username"
            />
            <input
              type="text"
              id="login"
              class="fadeIn third"
              name="login"
              placeholder="Login ID"
            />
            <input
              type="password"
              id="password"
              class="fadeIn fourth"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              id="cpassword"
              class="fadeIn fifth"
              name="cpassword"
              placeholder="Confirm Password"
            />
            <input
              type="submit"
              id="btnSignUp"
              class="fadeIn sixth"
              value="Sign Up"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
