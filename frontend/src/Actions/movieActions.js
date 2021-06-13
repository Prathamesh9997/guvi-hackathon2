import axios from "axios";
import {
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../Constants/movieConstants";
const url = "https://bookmyshow-pg.herokuapp.com";

export const listMovies = () => async (dispatch) => {
  dispatch({
    type: MOVIE_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}/api/movies`);
    dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
  }
};

export const detailsMovie = (movieId) => async (dispatch) => {
  dispatch({
    type: MOVIE_DETAILS_REQUEST,
    payload: movieId,
  });
  try {
    const { data } = await axios.get(`${url}/api/movies/${movieId}`);
    dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
