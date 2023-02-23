import { Dispatch } from "redux";
import { url } from "./apiUrl";


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (email: string, password: string):any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    try {
      const response = await fetch(`${url}api/sessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { token: data.accessToken },
        });
        localStorage.setItem('token',data.accessToken)
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: { error: data.message },
        });
      }
    } catch (error:any) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.message },
      });
    }
  };
};
