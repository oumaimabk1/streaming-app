const initialState = {
    loading: false,
    error: null,
    success: false,
  };
  
  const passwordReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'RESET_PASSWORD':
        return {
          loading: true,
          error: null,
        };
      case 'RESET_PASSWORD_EMAIL_SENT':
        return { loading: false, success: true, error: null };
      case 'RESET_PASSWORD_EMAIL_FAILED':
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default passwordReducer;
  