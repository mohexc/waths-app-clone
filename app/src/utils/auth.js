import Axios from "axios";

const tokenKey = "token";

const instance = Axios.create({
  baseURL: window._env.REACT_APP_API_URL,
  headers: {
    Authorization: localStorage.getItem(tokenKey),
  },
});

const login = () => {};
const logout = () => {};
const register = () => {};
const getUserInfo = () => {};

const authenClient = {
  login,
  logout,
  register,
  getUserInfo,
  client: instance,
};
