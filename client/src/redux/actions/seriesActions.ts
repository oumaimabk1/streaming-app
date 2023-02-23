import axios from 'axios';
import { url } from './apiUrl';

// Step 1: Define an action that will make the API request
export const fetchSERIESData = (page: number = 1, limit: number = 10, name: string ="" , genre_ids: any[]=[] ): any => {
  console.log(page)
  return async (dispatch: any) => {
    dispatch({ type: 'SERIES_DATA_LOADING' });

    const response = await axios.post(`${url}api/SearchTVShows?page=${page}&limit=${limit}`,{ name, genre_ids }
    );
    dispatch({ type: 'SERIES_DATA_RECEIVED', payload: response.data.results });
  };

};
export const clearSERIESData = (): any => {
  return async (dispatch: any) => {
    dispatch({ type: 'CLEAR_SERIES_DATA', payload: [] });
  };
};
// Step 1: Define an action that will make the API request
export const getOneSERIES = (id: string): any => {
  return async (dispatch: any) => {
    const response = await axios.get(`${url}api/getOneTVshow/${id}`);
    console.log(response)
    dispatch({ type: 'ONE_SERIES_RECEIVED', payload: response.data.result });
  };
};