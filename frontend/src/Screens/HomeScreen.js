import React, { useEffect } from "react";
import Movie from "../Components/Movie";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listMovies } from "../Actions/movieActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { loading, error, movies } = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {movies.map((movie) => {
            return <Movie key={movie._id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
