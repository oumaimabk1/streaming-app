import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../actions/loginActions";
  
  interface LoginState {
    loading: boolean;
    token: string | null;
    error: string | null;
  }
  
  const initialState: LoginState = {
    loading: false,
    token: null,
    error: null,
  };
  
  export const loginReducer = (
    state = initialState,
    action: any
  ): LoginState => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload.token,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          token: null,
          error: action.payload.message,
        };
      default:
        return state;
    }
  };