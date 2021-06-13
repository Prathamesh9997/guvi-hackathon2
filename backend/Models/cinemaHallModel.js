import mongoose from "mongoose";

const cinemaHallSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    shows: [
      {
        time: { type: String, required: true },
        movieId: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CinemaHall = mongoose.model("CinemaHall", cinemaHallSchema);
export default CinemaHall;
