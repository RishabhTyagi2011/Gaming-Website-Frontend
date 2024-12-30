import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React, { useRef, useState } from "react";
import "../Css/login.css";
import "../Css/signup.css";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Signup from "./Signup";
import Snackbar from "../components/Snackbar";
import { GoogleLogin } from "../apiController/sociallogin";
import Cookies from "../Cookies";
import RestApi from "../apiController/RestApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const [switcher, setSwitcher] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const navigate = useNavigate();
  const formOuterRef = useRef<HTMLDivElement | null>(null);
  const formImageRef = useRef<HTMLDivElement | null>(null);
  const passwordStyleRef = useRef<HTMLDivElement | null>(null);
  const emailStyleRef = useRef<HTMLDivElement | null>(null);

  const transform = () => {
    if (!switcher) {
      if (formOuterRef.current && formImageRef.current) {
        formOuterRef.current.style.left = "0%";
        formImageRef.current.style.left = "50%";
      }
    } else {
      if (formOuterRef.current && formImageRef.current) {
        formOuterRef.current.style.left = "50%";
        formImageRef.current.style.left = "0%";
      }
    }
    setTimeout(() => {
      setSwitcher(!switcher);
    }, 1000);
  };

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setInputEmail(value);
    if (!emailPattern.test(value)) {
      setEmailMessage(true);
      if (emailStyleRef.current) {
        emailStyleRef.current.style.borderColor = "red";
      }
    } else {
      setEmailMessage(false);
      if (emailStyleRef.current) {
        emailStyleRef.current.style.borderColor = "grey";
      }
    }
  };

  const handleInputPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setInputPass(value);
    if (!passwordPattern.test(value)) {
      setPasswordMessage(true);
      if (passwordStyleRef.current) {
        passwordStyleRef.current.style.borderColor = "red";
      }
    } else {
      setPasswordMessage(false);
      if (passwordStyleRef.current) {
        passwordStyleRef.current.style.borderColor = "grey";
      }
    }
  };

  const positiveAction = (res: any) => {
    navigate("/admin");
    Cookies.setCookie("token", res.data.token, { expires: 7 });
  };

  const negativeAction = () => {
    console.log("error with email");
  };

  const handleGoogle = (
    positiveAction: (res: any) => void,
    negativeAction: () => void,
    unwantedAction: () => void
  ) => {
    GoogleLogin(positiveAction, negativeAction, unwantedAction);
  };

  const unwantedAction = () => {
    setShowSnackbar(true);
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailMessage || passwordMessage) return;

    if (emailPattern.test(inputEmail) && passwordPattern.test(inputPass)) {
      RestApi.UserLogin(inputEmail, inputPass).then((res) => {
        if (res.status === 200) {
          navigate("/admin");
          Cookies.setCookie("token", res.data.token, { expires: 7 });
        } else {
          setPasswordCheck(!passwordCheck);
          if (passwordStyleRef.current) {
            passwordStyleRef.current.style.borderColor = "red";
          }
        }
      });
    }
  };
  return (
    <>
      {!switcher ? (
        <div
          className="login"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showComponent ? (
            <div className="card">
              <div className="form-outer-login">
                <div>
                  <p
                    className="fs-xxxl "
                    style={{ marginBlockStart: "-5px", marginBlockEnd: "1rem" }}
                  >
                    <b> Sign in </b> for <br />
                    Deskera Application
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    handleSignup(e);
                  }}
                >
                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <input
                      className="inputEmailStyle"
                      type="text"
                      placeholder="Email"
                      onChange={handleInputEmail}
                      value={inputEmail}
                    ></input>
                    {emailMessage ? (
                      <small className="text-red">
                        Please enter valid email
                      </small>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div
                    style={{ marginTop: "20px", position: "relative", top: 0 }}
                  >
                    <input
                      className="inputPasswordStyle"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={handleInputPass}
                      value={inputPass}
                    />
                    {passwordMessage ? (
                      <small className="text-red">Invalid Password</small>
                    ) : (
                      <></>
                    )}
                    {passwordCheck ? (
                      <small className="text-red">
                        Please enter valid password
                      </small>
                    ) : (
                      <></>
                    )}
                    <FontAwesomeIcon
                      style={{
                        position: "absolute",
                        top: "35%",
                        right: "10px",
                      }}
                      icon={showPassword ? faEye : faEyeSlash}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  <div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        justifyContent: "space-between",
                        padding: "20px 0px 27px 0px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label>Remember me</label>
                      </div>
                      <button
                        className=" fs-l bg-gray "
                        type="button"
                        style={{ border: "none", padding: "20px" }}
                        onClick={() => setShowComponent(!showComponent)}
                      >
                        Forget Password?
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-blue text-white justify-content-center"
                    style={{
                      padding: "13px",
                      border: "none",
                      width: "100%",
                      borderRadius: "6px",
                    }}
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
                <div
                  style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    padding: "-8px",
                  }}
                >
                  <p>Or login with</p>
                </div>
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
                    className="fs-l p-s bg-gray "
                    type="button"
                    style={{ border: "1px solid  #dcdcdc", width: "48%" }}
                    onClick={() => {
                      handleGoogle(
                        positiveAction,
                        negativeAction,
                        unwantedAction
                      );
                    }}
                  >
                    <FcGoogle /> Google
                  </button>
                  <button
                    className="fs-l p-s bg-gray"
                    style={{ border: "1px solid  #dcdcdc", width: "48%" }}
                  >
                    <FaApple /> Apple
                  </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="text-blue fs-l bg-gray "
                    type="button"
                    style={{ border: "none", padding: "20px" }}
                    onClick={() => {
                      transform();
                    }}
                  >
                    Don't have any account? <b> Sign-up Now &#10132; </b>
                  </button>
                </div>
              </div>

              <div className="form-image-login ">
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
              {showSnackbar ? <Snackbar /> : <></>}
            </div>
          ) : (
            <ForgotPassword />
          )}
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
};
export default Login;
