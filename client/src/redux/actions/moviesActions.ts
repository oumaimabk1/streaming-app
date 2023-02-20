import axios from 'axios';

// Step 1: Define an action that will make the API request
export const fetchMOVIEData = (page:number = 1,limit:number = 10):any  => {
  return async (dispatch: any) => {
    const response = await axios.get(`http://localhost:1337/api/getAllMovies?page=${page}&limit=${limit}`);
    dispatch({ type: 'MOVIE_DATA_RECEIVED', payload: response.data.results });
  };
};