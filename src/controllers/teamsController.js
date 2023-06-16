import teams from "../models/Team.js";

class TeamController {

    static getTeams = async (req, res) => {
        try {
            const foundTeams = await teams.find().exec()
            res.status(200).json(foundTeams)
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - Falha ao encontrar times`})
        }
    }

    static getTeamById = async (req, res) => {
        const { id } = req.params

        teams.findById(id)
            .then(foundTeam => {
                if (!foundTeam) {
                    res.status(404).send({message: "Time não encontrado em nossa base de dados"})
                } else {
                    res.status(200).send(foundTeam)
                }
            })
            .catch (err => {
                console.error(err)
                res.status(500).send({message: `${err.message} - Falha ao encontrar time`})
            })
    }

    static updateTeam = async (req, res) => {
        const { id } = req.params

        teams.findByIdAndUpdate(id, {$set: req.body})
            .then(updatedTeam => {
                if (!updatedTeam) {
                    res.status(404).send({message: "Time não encontrado em nossa base de dados"})
                } else {
                    res.status(200).send({message: "Time atualizado com sucesso"})
                }
            })
            .catch (err => {
                console.error(err)
                res.status(500).send({message: `${err.message} - Falha ao atualizar time`})
            })
    }

    static postTeam = async (req, res) => {
        const team = new teams(req.body)

        try {
            team.save()
                .then(() => {
                    res.status(200).send(team.toJSON())
                })
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - Falha ao salvar time`})
        }
    }

    static deleteTeam = async (req, res) => {
        const { id } = req.params

        teams.findByIdAndDelete(id)
            .then(deletedTeam => {
                if (!deletedTeam) {
                res.status(404).send({message: "Time não encontrado em nossa base de dados"})
                } else {
                    res.status(200).send({message: "Time deletado com sucesso"})
                }
            })
            .catch (err => {
                console.error(err)
                res.status(500).send({message: `${err.message} - Falha ao deletar time`})
            })
    }

}

export default TeamController;