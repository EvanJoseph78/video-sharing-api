import express from "express";
import { addVideo, addView, random, sub, trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// cria video
router.post("/", verifyToken, addVideo);
router.put("/:id ", verifyToken, addVideo);
router.delete("/:id", verifyToken, addVideo);
router.get("/find/:id", addVideo);
router.get("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", sub);


export default router;