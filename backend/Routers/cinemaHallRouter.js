import express from "express";
import data from "../data.js";
import CinemaHall from "../Models/cinemaHallModel.js";
import expressAsyncHandler from "express-async-handler";
const cinemaHallRouter = express.Router();

cinemaHallRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const cinemaHalls = await CinemaHall.find({ city: req.body.city });
    if (cinemaHalls) {
      res.send(cinemaHalls);
    }
    res.status(401).send({ message: "Cinema Halls Not Found" });
  })
);

cinemaHallRouter.get(
  "/seed",
  await expressAsyncHandler(async (req, res) => {
    const createdCinemaHalls = await CinemaHall.insertMany(data.cinemaHalls);
    res.send({ createdCinemaHalls });
  })
);

export default cinemaHallRouter;
