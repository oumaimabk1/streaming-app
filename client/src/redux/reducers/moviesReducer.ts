// Step 2: Define a reducer that will update the store with the movie response


interface movieState {
  movieData: any[];
}

const initialState: movieState = {
  movieData: [],
};
const initialMovie: any = {
  movieData: {},
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'MOVIE_DATA_RECEIVED':
      return { movieData: [
        ...state.movieData,
        ...action.payload] };
        case 'CLEAR_MOVIE_DATA':
          return { movieData: [] };
    
        
    default:
      return state;
  }
};
export const OnemovieReducer = (state = initialMovie, action: any) => {
  switch (action.type) {
    case 'ONE_MOVIE_RECEIVED':
      return { movieData: action.payload };
    default:
      return state;
  }
};