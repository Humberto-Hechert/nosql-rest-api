import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        country: {type: String, required: true},
        team: {type: String},
        age: {type: Number}
    }
)

const players = mongoose.model('players', playerSchema);

export default players;