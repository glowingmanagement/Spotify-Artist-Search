import express, { Request, Response } from "express";
import dotenv from "dotenv";
const cors = require("cors");
import spotifyRoute from "./routes/api/v1/spotifyRoute";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Unhurd Assessment BFF", app: "Unhurd Assessment" });
});

app.use("/api", spotifyRoute);

export default app;
