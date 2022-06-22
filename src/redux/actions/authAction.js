import api from "../../utils/api";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import { toast } from "react-toastify";
export const login = (body) => async (dispatch) => {
  try {
    const { email, password } = body;
    const res = await api.post(`/LoginAPI?Email=${email}&Password=${password}`);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(checkToken(3600));
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error("Email or password incorrect!");
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const checkToken = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
      console.log("token expired");
    }, expirationTime * 1000);
  };
};
