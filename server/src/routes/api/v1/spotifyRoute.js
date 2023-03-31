"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotifyController_1 = require("../../../controllers/api/v1/spotifyController");
const router = express_1.default.Router();
router.route("/search").get(spotifyController_1.getArtistData);
exports.default = router;
