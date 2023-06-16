import express from "express";
import TeamController from "../controllers/teamsController.js";

const router = express.Router();

router
    .get('/teams', TeamController.getTeams)
    .get('/teams/:id', TeamController.getTeamById)
    .put('/teams/:id', TeamController.updateTeam)
    .post('/teams', TeamController.postTeam)
    .delete('/teams/:id', TeamController.deleteTeam)

export default router;