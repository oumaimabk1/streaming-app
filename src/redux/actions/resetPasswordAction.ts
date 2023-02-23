import { Dispatch } from "redux";
import { url } from './apiUrl';


export const sendResetPasswordEmail = (email: string):any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'RESET_PASSWORD',
    });

    try {
      const response = await fetch(`${url}api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
  
      if (response.ok) {
        dispatch({ type: 'RESET_PASSWORD_EMAIL_SENT', payload: data });
        
      } else {
        
        dispatch({ type: 'RESET_PASSWORD_EMAIL_FAILED' });
      }
    } catch (error:any) {
      dispatch({ type: 'RESET_PASSWORD_EMAIL_FAILED', payload: error });
    }
  };
};

export const updatePasswordEmail = (password: string,token:any):any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'UPDATE_PASSWORD',
    });
   
    try {
      const response = await fetch(`${url}api/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
     
      if (response.ok) {
        dispatch({ type: 'UPDATE_PASSWORD_EMAIL_SENT', payload: data });
        
      } else {
        
        dispatch({ type: 'UPDATE_PASSWORD_EMAIL_FAILED' });
      }
    } catch (error:any) {
      dispatch({ type: 'UPDATE_PASSWORD_EMAIL_FAILED', payload: error });
    }
  };
};