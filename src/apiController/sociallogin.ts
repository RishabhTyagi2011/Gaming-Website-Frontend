import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import RestApi from "./RestApi";

export let GoogleLogin = (
  positiveAction: any,
  negetiveAction: any,
  unwantedAction: any
) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      if (result.user.emailVerified && emailCheck(result.user.email)) {
        RestApi.goLogin(result.user.email).then((res) => {
          if (res.status == 200) {
            positiveAction(res);
          } else {
            console.log(res.status);
            negetiveAction();
          }
        });
      } else {
        unwantedAction();
        console.log("Email failed");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

function emailCheck(email: any) {
  return email.endsWith("@deskera.com") || email.endsWith("@deskera.org");
}
