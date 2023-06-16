import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        country: {type: String, required: true},
        creationDate: {type: Number}
    }
)

const teams = mongoose.model('teams', teamSchema);

export default teams;