import express from "express";
import PlayerController from "../controllers/playersController.js";

const router = express.Router();

router
    .get('/players', PlayerController.getPlayers)
    .get('/players/:id', PlayerController.getPlayerById)
    .put('/players/:id', PlayerController.updatePlayer)
    .post('/players', PlayerController.postPlayer)

export default router;