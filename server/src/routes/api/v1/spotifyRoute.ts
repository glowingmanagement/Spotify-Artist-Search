import express, { Request, Response } from "express";
import {
  getArtistData,
  searchById,
} from "../../../controllers/api/v1/spotifyController";

const router = express.Router();

router.route("/search").get(getArtistData);
router.route("/search/:id").get(searchById);

export default router;
