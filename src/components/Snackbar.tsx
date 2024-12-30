import React, { useState } from "react";
import "../Css/snackbar.css";

const Snackbar = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(show ? false : false);
  }, 5000);
  function toggleSnackbar() {
    setShow(!show);
  }
  console.log("Snacbar called");

  return (
    <>
      {show ? (
        <div className="outer">
          <div>
            <h3>Error!</h3>
            <button
              type="button"
              className="snack-Button"
              onClick={toggleSnackbar}
            >
              <b style={{ fontSize: "20px", color: "white" }}> &#10006; </b>
            </button>
          </div>
          <div>
            <b>Please submit correct input</b>
          </div>
          <div />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Snackbar;
