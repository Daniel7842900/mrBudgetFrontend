import axios from "axios";

const API_ENDPOINT = "a/api/user";

const login = async (data) => {
  // Get the user info by calling backend
  const response = await axios.post(API_ENDPOINT + "/login", data);
  console.log(response);

  // Store response in local storage in browser
  if (response.data.payload.token) {
    localStorage.setItem("user", JSON.stringify(response.data.payload.token));
  }

  return response;
};

const AuthService = {
  login: login,
};

export default AuthService;
