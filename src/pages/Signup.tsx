import { DKButton, INPUT_TYPE } from "deskera-ui-library";
import "../Css/signup.css";
import { useState } from "react";
import "react-phone-number-input/style.css";
import Login from "./Login";

const Signup = () => {
  const [switcher, setSwitcher] = useState(false);
  const formOuter = document.getElementsByClassName(
    "form-outer-signup"
  )[0] as HTMLElement;
  const formImage = document.getElementsByClassName(
    "form-image-signup"
  )[0] as HTMLElement;

  let transform = () => {
    if (!switcher) {
      formOuter.style.left = "0%";
      formImage.style.left = "50%";
    } else {
      formOuter.style.left = "50%";
      formImage.style.left = "0%";
    }
    setTimeout(() => {
      setSwitcher(switcher ? false : true);
    }, 1000);
  };
  return (
    <>
      {!switcher ? (
        <div
          className="signup"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="card">
            <div className="form-image-signup ">
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
                  borderTopLeftRadius: "25px",
                  borderBottomLeftRadius: "25px",
                }}
                alt="/"
              />
              <div
                style={{
                  zIndex: 111,
                  position: "relative",
                  overflow: "auto",
                  height: "100%",
                  boxSizing: "border-box",
                  padding: "50px 50px 50px 67px",
                }}
                className="text-white"
              >
                <p style={{ fontSize: "2.5rem", padding: "16px" }}>
                  Connect. Acquire. <br />
                  Delight. with <br />
                  SatteBazi Applications
                </p>
                <ul>
                  <li style={{ fontSize: "1.5rem" }}>30 days free trial</li>
                  <li style={{ fontSize: "1.5rem" }}>
                    No credit card required.
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-outer-signup">
              <div>
                <p
                  className="fs-xxxl "
                  style={{ marginBlockStart: "-5px", marginBlockEnd: "1rem" }}
                >
                  <b> Sign up </b> with your <br />
                  work email
                </p>
              </div>
              <form>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email Address"
                    aria-label=".form-control-lg example"
                    style={{
                      padding: "16px 40px 16px 9px",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  ></input>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div className="p-v-l">
                    <div
                      style={{ position: "relative", top: 0 }}
                      className="border-m border-radius-s"
                    >
                      <select
                        className="border-none p-h-s fs-l fw-r"
                        style={{
                          position: "absolute",
                          left: "3px",
                          top: "3px",
                          bottom: "3px",
                          outline: "none",
                        }}
                      >
                        <option>+1</option>
                      </select>
                      <input
                        style={{ paddingLeft: "65px", boxSizing: "border-box" }}
                        className="border-r p-v-l parent-size fs-m"
                        name="contact"
                        type={INPUT_TYPE.PHONE}
                        required={true}
                        placeholder={"Phone Number (Optional)"}
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: "15px 0px 15px 0px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <DKButton
                    title="Create Account"
                    className="bg-blue text-white justify-content-center"
                    style={{ padding: "13px" }}
                  />
                </div>
              </form>

              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="text-blue fs-l bg-gray"
                  style={{ border: "none", padding: "20px" }}
                >
                  Are you a book-keeper?{" "}
                  <b> Sign-up for SatteBazi Book-keeper </b>
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="text-blue fs-l bg-gray "
                  style={{ border: "none", padding: "20px" }}
                  onClick={() => {
                    transform();
                  }}
                >
                  &#129144; Already have an account? <b> Sign-in Now </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Signup;
