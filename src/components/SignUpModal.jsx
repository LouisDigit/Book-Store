import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const SignUpModal = () => {
  const { modalState, toggleModals } = useContext(UserContext);
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form action="" className="sign-up-form">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signUpEmail">
                        Email adress
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        required
                        id="signUpEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signUpPwd">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="pwd"
                        required
                        id="signUpPwd"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="repeatPwd">
                        Repeat Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="repeatPwd"
                        required
                        id="repeatPwd"
                      />
                      <p className="text-danger mt-1">Validation</p>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
