import {
    GENRE_REQUEST,
    GENRE_SUCCESS,
    GENRE_FAILURE,
  } from "../actions/searchActions";
  
  interface GENREState {
    loading: boolean;
    categories: any[] | null;
    error: string | null;
  }
  
  const initialState: GENREState = {
    loading: false,
    categories: null,
    error: null,
  };
  
  export const genreReducer = (
    state = initialState,
    action: any
  ): GENREState => {
    switch (action.type) {
      case GENRE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GENRE_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload.categories,
          error: null,
        };
      case GENRE_FAILURE:
        return {
          ...state,
          loading: false,
          categories: null,
          error: action.payload.message,
        };
      default:
        return state;
    }
  };