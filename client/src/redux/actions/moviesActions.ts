import axios from 'axios';
import { url } from './apiUrl';

// Step 1: Define an action that will make the API request
export const fetchMOVIEData = (page: number = 1, limit: number = 10, title: string , genre_ids: any[] ): any => {
  console.log(page)
  return async (dispatch: any) => {
    dispatch({ type: 'MOVIE_DATA_LOADING' });

    const response = await axios.post(`${url}api/searchmovies?page=${page}&limit=${limit}`,{ title, genre_ids }
    );
    dispatch({ type: 'MOVIE_DATA_RECEIVED', payload: response.data.results });
  };

};
export const clearMovieData = (): any => {
  return async (dispatch: any) => {
    dispatch({ type: 'CLEAR_MOVIE_DATA', payload: [] });
  };
};
// Step 1: Define an action that will make the API request
export const getOnemovie = (id: string): any => {
  return async (dispatch: any) => {
    const response = await axios.get(`${url}api/getOneMovie/${id}`);
    console.log(response)
    dispatch({ type: 'ONE_MOVIE_RECEIVED', payload: response.data.result });
  };
};

/* export const getVideomovie = (movieId:any):any  => {
  return async (dispatch: any) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=6cc1df6659017d51dec12febc2690279`);
    console.log(response.data)
    dispatch({ type: 'ONE_MOVIE_VIDEO', payload: response.data.results[0].key });
  };
}; */
