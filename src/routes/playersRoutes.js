import express from "express";
import PlayerController from "../controllers/playersController.js";

const router = express.Router();

router
    .get('/players', PlayerController.getPlayers)
    .get('/players/:id', PlayerController.getPlayerById)
    .post('/players', PlayerController.postPlayer)

export default router;