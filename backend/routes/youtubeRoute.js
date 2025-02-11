import express from "express";
import getYoutubeVideos from "../utility/youtube.js";
import returnYoutubeVideos from "../utility/youtube.js";

const youtubeRouter = express.Router();

youtubeRouter.get("/get/:query", returnYoutubeVideos);

export default youtubeRouter;
