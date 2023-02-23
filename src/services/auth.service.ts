import axios from "axios";

const API_URL = "http://localhost:1337/api/";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "sessions", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name: string, email: string, password: string,passwordConfirmation:string) {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password,
      passwordConfirmation
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();