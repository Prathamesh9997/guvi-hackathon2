import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
} from "../Constants/movieConstants";

export const movieListReducer = (
  state = { loading: true, movies: [] },
  action
) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true };
    case MOVIE_LIST_SUCCESS:
      return { loading: false, movies: action.payload };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieDetailsReducer = (
  state = { movie: {}, loading: true },
  action
) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { loading: true };
    case MOVIE_DETAILS_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
