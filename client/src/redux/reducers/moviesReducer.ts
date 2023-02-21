// Step 2: Define a reducer that will update the store with the movie response


interface movieState {
  movieData: any;
}

const initialState: movieState = {
  movieData: null,
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'MOVIE_DATA_RECEIVED':
      return { movieData: action.payload };
    case 'ONE_MOVIE_RECEIVED':
      return { movieData: action.payload };
    case 'ONE_MOVIE_VIDEO':
      return { movieVideo: action.payload };
    default:
      return state;
  }
};