"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const spotifyRoute_1 = __importDefault(require("./routes/api/v1/spotifyRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "Unhurd Assessment BFF", app: "Unhurd Assessment" });
});
app.use("/api", spotifyRoute_1.default);
exports.default = app;