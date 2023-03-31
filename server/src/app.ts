import express, { Request, Response } from "express";
import dotenv from "dotenv";
import spotifyRoute from "./routes/api/v1/spotifyRoute";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Unhurd Assessment BFF", app: "Unhurd Assessment" });
});

app.use("/api", spotifyRoute);

export default app;