"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtistData = void 0;
const axios_1 = __importDefault(require("axios"));
const getAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    if (!clientId || !clientSecret) {
        throw new Error("Client ID or Client Secret is missing in environment variables.");
    }
    const url = `https://accounts.spotify.com/api/token`;
    const response = yield axios_1.default.post(url, "grant_type=client_credentials", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        },
    });
    return response.data.access_token;
});
const getArtistData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistName = req.query.name;
    const accessToken = yield getAccessToken();
    const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    const response = yield axios_1.default.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    res.status(200).json(response.data);
});
exports.getArtistData = getArtistData;
