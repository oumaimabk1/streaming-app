import axios from 'axios';
import { url } from './apiUrl';

// Step 1: Define an action that will make the API request
export const fetchMOVIEData = (page:number = 1,limit:number = 10):any  => {
  return async (dispatch: any) => {
    const response = await axios.get(`${url}api/getAllMovies?page=${page}&limit=${limit}`);
    dispatch({ type: 'MOVIE_DATA_RECEIVED', payload: response.data.results });
  };
};

// Step 1: Define an action that will make the API request
export const getOnemovie = (id:string):any  => {
  return async (dispatch: any) => {
    const response = await axios.get(`${url}api/getOneMovie/${id}`);
    dispatch({ type: 'ONE_MOVIE_RECEIVED', payload: response.data.result });
  };
};

export const getVideomovie = (movieId:string):any  => {
  return async (dispatch: any) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=6cc1df6659017d51dec12febc2690279`);
    dispatch({ type: 'ONE_MOVIE_VIDEO', payload: response.data.results[0].key });
  };
};
