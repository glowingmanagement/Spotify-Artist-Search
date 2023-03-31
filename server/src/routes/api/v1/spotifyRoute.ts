import express, { Request, Response } from "express";
import { getArtistData } from "../../../controllers/api/v1/spotifyController";

const router = express.Router();

router.route("/search").get(getArtistData);

export default router;