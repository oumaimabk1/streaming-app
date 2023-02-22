import { Dispatch } from "redux";
import { url } from "./apiUrl";


export const GENRE_REQUEST = "GENRE_REQUEST";
export const GENRE_SUCCESS = "GENRE_SUCCESS";
export const GENRE_FAILURE = "GENRE_FAILURE";

export const genre = ():any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GENRE_REQUEST,
    });

    try {
      const response = await fetch(`${url}api/getAllGenres`);

      const data = await response.json();
      
      if (response.ok) {
        dispatch({
          type: GENRE_SUCCESS,
          payload: { categories: data.results },
        });
        
      } else {
        dispatch({
          type: GENRE_FAILURE,
          payload: { error: data.message },
        });
      }
    } catch (error:any) {
      dispatch({
        type: GENRE_FAILURE,
        payload: { error: error.message },
      });
    }
  };
};

export const genreseries = ():any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GENRE_REQUEST,
    });

    try {
      const response = await fetch(`${url}api/getAllTVShowsGenres`);

      const data = await response.json();
      
      if (response.ok) {
        dispatch({
          type: "GENRESerie_SUCCESS",
          payload: { categories: data.results },
        });
        
      } else {
        dispatch({
          type: "GENRESerie_FAILURE",
          payload: { error: data.message },
        });
      }
    } catch (error:any) {
      dispatch({
        type: "GENRESerie_FAILURE",
        payload: { error: error.message },
      });
    }
  };
};
