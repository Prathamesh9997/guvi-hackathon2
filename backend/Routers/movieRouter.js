import express from "express";
import data from "../data.js";
import Movie from "../Models/movieModel.js";
import expressAsyncHandler from "express-async-handler";
const movieRouter = express.Router();

//Get all movies
movieRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.send(movies);
  })
);

//Insert initial records to db
movieRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdMovies = await Movie.insertMany(data.movies);
    res.send({ createdMovies });
  })
);

//Find movie by id
movieRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.send(movie);
    } else {
      res.status(404).send({ message: "Movie not found" });
    }
  })
);
export default movieRouter;
