import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { DKLabel } from "deskera-ui-library";
import "./gogleLogin.css";
import "./signup.css";
import Cookies from "../Cookies";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "../apiController/sociallogin";
import Snackbar from "../components/Snackbar";

const GogleViaLogin = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();
  let positiveAction = (res: any) => {
    navigate("/admin");
    Cookies.setCookie("token", res.data.token, { expires: 7 });
  };
  let negetiveAction = () => {
    console.log("error with email");
  };

  const handleGoogle = (
    positiveAction: (res: any) => void,
    negetiveAction: () => void,
    unwantedAction: () => void
  ) => {
    GoogleLogin(positiveAction, negetiveAction, unwantedAction);
  };

  let unwantedAction = () => {
    setShowSnackbar(true);
  };

  return (
    <>
      <div
        className="gogleLogin"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card">
          <div className="form-outer-gogleLogin">
            <div>
              <DKLabel text="Deskera" className="desk text-blue " />
              <p
                className="fs-xxxl "
                style={{ marginBlockStart: "-5px", marginBlockEnd: "1rem" }}
              >
                <b> Sign in </b> for <br />
                Internal Application
              </p>
            </div>

            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                justifyContent: "space-between",
                width: "100%",
                marginTop: "100px",
                marginBottom: "20px",
              }}
            >
              <button
                className="fs-l p-s bg-white "
                type="button"
                style={{ border: "1px solid  #dcdcdc", width: "100%" }}
                onClick={() => {
                  handleGoogle(positiveAction, negetiveAction, unwantedAction);
                }}
              >
                <FcGoogle /> Google
              </button>
            </div>
          </div>

          <div className="form-image-gogleLogin ">
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
                borderBottomRightRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              alt="/"
            />
            <div
              style={{
                zIndex: 111,
                position: "relative",
                boxSizing: "border-box",
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
        {showSnackbar ? <Snackbar /> : <></>}
      </div>
    </>
  );
};
export default GogleViaLogin;
