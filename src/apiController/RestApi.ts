import axios from "axios";
import Cookies from "../Cookies";
export default class RestApi {
  static BASE_URL = "http://localhost:8080";
  static UserLogin(inputEmail: any, inputPass: any) {
    return axios.post(`${this.BASE_URL}/login`, {
      email: inputEmail,
      password: inputPass,
    });
  }

  static getProfile() {
    return axios.get(`${this.BASE_URL}/fetchProfile`, {
      headers: {
        "x-access-token": Cookies.getCookie("token"),
      },
    });
  }

  static goLogin(userEmail: any) {
    return axios.post(`${this.BASE_URL}/gogleLogin`, {
      email: userEmail,
    });
  }
}
