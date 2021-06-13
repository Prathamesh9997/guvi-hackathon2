import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { listCinemaHalls } from "../Actions/cinemaHallActions";

const BookingScreen = (props) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("select");
  const [theatre, setTheatre] = useState("select");
  const [show, setShow] = useState("select");
  const [shows, setShows] = useState([]);
  let isShowAvailable = false;
  const movieId = props.match.params.id;

  const cinemaHallList = useSelector((state) => state.cinemaHallList);
  const { cinemaHalls } = cinemaHallList;

  useEffect(() => {
    dispatch(listCinemaHalls(city));
  }, [dispatch, city]);

  const theatreChangeHandler = (e) => {
    setTheatre(e.target.value);
    cinemaHalls.map((cinemaHall) => {
      if (cinemaHall.name === e.target.value && cinemaHall.city === city) {
        setShows(cinemaHall.shows);
      }
    });
  };

  return (
    <div>
      <div className="booking-filters">
        <FormControl className="city-dropdown">
          <Select
            variant="outlined"
            name="duration"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <MenuItem value="select">Select Place</MenuItem>
            <MenuItem value="Kolhapur">Kolhapur</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="theatre-dropdown">
          <Select
            variant="outlined"
            name="duration"
            value={theatre}
            onChange={theatreChangeHandler}
          >
            <MenuItem value="select">Select Theatre</MenuItem>
            {cinemaHalls &&
              cinemaHalls.map((cinemaHall) => {
                return (
                  <MenuItem key={cinemaHall._id} value={cinemaHall.name}>
                    {cinemaHall.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl className="show-dropdown">
          <Select
            variant="outlined"
            name="duration"
            value={show}
            onChange={(e) => {
              setShow(e.target.value);
            }}
          >
            <MenuItem value="select">Select Show</MenuItem>
            {shows &&
              shows.map((show) => {
                if (show.movieId === movieId) {
                  isShowAvailable = true;
                  return (
                    <MenuItem key={show._id} value={show.time}>
                      {show.time}
                    </MenuItem>
                  );
                }
              })}
          </Select>
        </FormControl>
      </div>
      <div className="seat-booking">
        {city !== "select" && theatre !== "select" && !isShowAvailable ? (
          <h1>No shows available</h1>
        ) : (
          city !== "select" &&
          theatre !== "select" &&
          show !== "select" && (
            <h1>Please select seats and proceed to payment</h1>
          )
        )}
      </div>
    </div>
  );
};

export default BookingScreen;
