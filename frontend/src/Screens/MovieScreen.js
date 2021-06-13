import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../Components/MessageBox";
import LoadingBox from "../Components/LoadingBox";
import { detailsMovie } from "../Actions/movieActions";

const MovieScreen = (props) => {
  const dispatch = useDispatch();
  const movieId = props.match.params.id;
  const movieDetails = useSelector((state) => state.movieDetails);
  const { loading, error, movie } = movieDetails;

  useEffect(() => {
    dispatch(detailsMovie(movieId));
  }, [dispatch, movieId]);

  const bookingHandler = () => {
    props.history.push(`/signin?redirect=booking/${movieId}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="movie-row top">
            <div className="col-1">
              <img className="large" src={movie.image} alt={movie.name} />
            </div>
            <div className="col-2">
              <div className="movie-card movie-card-body">
                <ul>
                  <li>
                    <h1 className="movie-heading">{movie.name}</h1>
                  </li>
                  <li>Language: {movie.language}</li>
                  <li>Gerne: {movie.category}</li>
                  <li>Released on: {movie.releaseDate.split("T")[0]}</li>
                  <li>Duration: {movie.duration} hrs</li>
                  <li>
                    <span className="red">❤</span> {movie.likes}%
                  </li>
                </ul>
              </div>
              <button className="primary block" onClick={bookingHandler}>
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieScreen;
