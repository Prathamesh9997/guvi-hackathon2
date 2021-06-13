import axios from "axios";
import {
  CINEMAHALL_LIST_FAIL,
  CINEMAHALL_LIST_REQUEST,
  CINEMAHALL_LIST_SUCCESS,
} from "../Constants/cinemaHallConstants";
const url = "https://bookmyshow-pg.herokuapp.com";

export const listCinemaHalls = (city) => async (dispatch) => {
  dispatch({
    type: CINEMAHALL_LIST_REQUEST,
    payload: city,
  });
  try {
    const { data } = await axios.post(`${url}/api/cinema-halls`, { city });
    dispatch({ type: CINEMAHALL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CINEMAHALL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
