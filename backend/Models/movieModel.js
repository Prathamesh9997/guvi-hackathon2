import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    language: { type: String, required: true },
    duration: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
