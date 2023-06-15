import players from "../models/Player.js";

class PlayerController {

    static getPlayers = async (req, res) => {
        try {
            const foundPlayers = await players.find().exec()
            res.status(200).json(foundPlayers)
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - Erro ao buscar jogadores`})
        }
    }

    static postPlayer = async (req, res) => {
        const player = new players(req.body)

        try {
            player.save()
                .then(() => {
                    res.status(200).send(player.toJSON())
                })
        } catch (err) {
            console.error(err)
            res.status(500).send({message : `${err.message} Falha ao cadastrar jogador`})
        }
    }

}

export default PlayerController;