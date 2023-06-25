import players from "../models/Player.js";

class PlayerController {

    static getPlayers = async (req, res) => {
        try {
            const foundPlayers = await players.find().exec()
            res.status(200).json(foundPlayers)
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: `${err.message} - Erro ao buscar jogadores` })
        }
    }

    static getPlayerById = async (req, res) => {
        const { id } = req.params

        players.findById(id)
            .then(foundPlayer => {
                if (!foundPlayer) {
                    res.status(404).send({ message: "Jogador não encontrado em nossa base" })
                } else {
                    res.status(200).json(foundPlayer)
                }
            })
            .catch(err => {
                console.error(err)
                res.status(500).send({ message: `${err.message} - Falha ao encontrar jogador` })
            })
    }

    static updatePlayer = async (req, res) => {
        const { id } = req.params

        players.findByIdAndUpdate(id, { $set: req.body })
            .then(updatedPlayer => {
                if (!updatedPlayer) {
                    res.status(404).send({ message: "Jogador não encontrado em nossa base" })
                } else {
                    res.status(200).send({ message: "Jogador atualizado com sucesso" })
                }
            })
            .catch(err => {
                console.error(err)
                res.status(500).send({ message: `${err.message} - Falha ao atualizar jogador` })
            })
    }

    static deletePlayer = async (req, res) => {
        const { id } = req.params

        players.findByIdAndDelete(id)
            .then(deletedPlayer => {
                if (!deletedPlayer) {
                    res.status(404).send({ message: "Jogador não encontrado em nossa base" })
                } else {
                    res.status(200).send({ message: "Jogador removido" })
                }
            })
            .catch(err => {
                console.error(err)
                res.status(500).send({ message: `${err.message} - Erro ao remover jogador` })
            })
    }

    static postPlayer = async (req, res) => {
        const player = new players(req.body)

        try {
            if (!player.name || !player.country) {
                res.status(400).send("Name e country devem ser preenchidos")
            } else {
                player.save()
                    .then(() => {
                        res.status(201).send(player.toJSON())
                    })
            }

        } catch (err) {
            console.error(err)
            res.status(500).send({ message: `${err.message} Falha ao cadastrar jogador` })
        }
    }

}

export default PlayerController;