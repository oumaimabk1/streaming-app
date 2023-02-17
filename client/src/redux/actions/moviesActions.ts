import axios from 'axios';

// Step 1: Define an action that will make the API request
export const fetchMOVIEData = (page:number):any  => {
  return async (dispatch: any) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6cc1df6659017d51dec12febc2690279&language=en-US&page=${page}`);
    dispatch({ type: 'MOVIE_DATA_RECEIVED', payload: response.data });
  };
};