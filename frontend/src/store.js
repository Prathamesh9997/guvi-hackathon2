import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cinemaHallListReducer } from "./Reducers/cinemaHallReducers";
import {
  movieDetailsReducer,
  movieListReducer,
} from "./Reducers/movieReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./Reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  cinemaHallList: cinemaHallListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
