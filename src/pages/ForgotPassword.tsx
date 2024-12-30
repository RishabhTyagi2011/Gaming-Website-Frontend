import React, { useState, useRef } from "react";
import "../Css/signup.css";
import "../Css/forgotpassword.css";
import Signup from "./Signup";
import Login from "./Login";
import { DKButton, DKLabel } from "deskera-ui-library";

const ForgotPassword = () => {
  const [switcher, setSwitcher] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  let transform1 = () => {
    if (formRef.current && imageRef.current) {
      if (!switcher) {
        formRef.current.style.left = "50%";
        imageRef.current.style.left = "0%";
      } else {
        formRef.current.style.left = "0%";
        imageRef.current.style.left = "50%";
      }
      setTimeout(() => {
        setSwitcher(!switcher ? true : false);
      }, 1000);
    }
  };

  return (
    <>
      {!switcher ? (
        <div
          className="forgotpas"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showComponent ? (
            <div className="card">
              <div ref={formRef} className="form-outer-forgot">
                <div>
                  <DKLabel text="Deskera" className="desk text-blue " />
                  <p
                    className="fs-xxxl "
                    style={{ marginBlockStart: "-5px", marginBlockEnd: "1rem" }}
                  >
                    <b style={{ fontSize: "smaller" }}> Forgot Password</b>{" "}
                    <br />
                  </p>
                </div>
                <form>
                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      aria-label=".form-control-lg example"
                      style={{
                        padding: "16px 40px 16px 9px",
                        width: "100%",
                        boxSizing: "border-box",
                        marginBottom: "60px",
                      }}
                    ></input>
                  </div>
                </form>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <button
                    className="fs-l  bg-white "
                    type="button"
                    style={{
                      border: "1px solid  #dcdcdc",
                      padding: "17px 127px 12px 86px",
                      width: "48%",
                    }}
                    onClick={() => setShowComponent(!showComponent)}
                  >
                    Back
                  </button>

                  <DKButton
                    title="Submit"
                    className="bg-blue text-white justify-content-center"
                    style={{ padding: "15px", width: "50%" }}
                    onClick={() => {}}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="text-blue fs-l bg-white "
                    type="button"
                    style={{
                      border: "none",
                      padding: "20px",
                      marginBottom: "100px",
                    }}
                    onClick={() => {
                      transform1();
                    }}
                  >
                    Don't have any account? <b> Sign-up Now &#10132; </b>
                  </button>
                </div>
              </div>

              <div ref={imageRef} className="form-image-forgot ">
                <img
                  src={"/signin.png"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(0.7)",
                    position: "absolute",
                    top: 0,
                    borderBottomRightRadius: "20px",
                    borderTopRightRadius: " 20px",
                  }}
                  alt="/"
                />
                <div
                  style={{
                    zIndex: 111,
                    position: "relative",
                    overflow: "auto",
                    height: "100%",
                    padding: "20px",
                  }}
                  className="text-white"
                >
                  <p style={{ fontSize: "2.5rem", padding: "16px" }}>
                    The all-in-one <br />
                    Platform for small Business growth
                  </p>
                  <ul>
                    <li style={{ fontSize: "1.5rem" }}>
                      Powerful and intuitive suite of business solutions.
                    </li>
                    <li style={{ fontSize: "1.5rem" }}>
                      Makes digital transformation simple.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Login />
          )}
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
};
export default ForgotPassword;
