import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="card" key={movie._id}>
      <a href={`/movie/${movie._id}`}>
        <img className="medium" src={movie.image} alt={movie.name} />
      </a>
      <div className="card-body">
        <a href={`/movie/${movie._id}`}>
          <h2>{movie.name}</h2>
        </a>
        <div className="language"> {movie.language}</div>
        <div className="likes">
          <span className="red">❤</span> {movie.likes}%
        </div>
      </div>
    </div>
  );
};

export default Movie;
