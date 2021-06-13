import {
  CINEMAHALL_LIST_FAIL,
  CINEMAHALL_LIST_REQUEST,
  CINEMAHALL_LIST_SUCCESS,
} from "../Constants/cinemaHallConstants";

export const cinemaHallListReducer = (
  state = { cinemaHalls: [], loading: true },
  action
) => {
  switch (action.type) {
    case CINEMAHALL_LIST_REQUEST:
      return { loading: true };
    case CINEMAHALL_LIST_SUCCESS:
      return { loading: false, cinemaHalls: action.payload };
    case CINEMAHALL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
