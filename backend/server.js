import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./Routers/userRouter.js";
import mongoose from "mongoose";
import movieRouter from "./Routers/movieRouter.js";
import cinemaHallRouter from "./Routers/cinemaHallRouter.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
const db_url = `mongodb+srv://prathamesh9997:${process.env.DBPASS}@cluster0.biui0.mongodb.net/bookmyshow?retryWrites=true&w=majority`;
mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/cinema-halls", cinemaHallRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

//Error handling
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log("server is up and running");
});
