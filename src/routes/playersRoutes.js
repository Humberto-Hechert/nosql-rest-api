import express from "express";
import PlayerController from "../controllers/playersController.js";

const router = express.Router();

router
    .get('/players', PlayerController.getPlayers)

export default router;