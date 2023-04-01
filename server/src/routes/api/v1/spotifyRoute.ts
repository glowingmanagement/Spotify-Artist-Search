import express, { Request, Response } from "express";
import {
  getArtistData,
  searchById,
  getAlbumData,
} from "../../../controllers/api/v1/spotifyController";

const router = express.Router();

router.route("/search").get(getArtistData);
router.route("/search/:id").get(searchById);
router.route("/album/:id").get(getAlbumData);

export default router;
