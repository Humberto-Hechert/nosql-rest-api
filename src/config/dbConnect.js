import mongoose from "mongoose";
import { config } from 'dotenv';
config()

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sekjs4d.mongodb.net/footbal-stars`

mongoose.connect(uri)

let db = mongoose.connection;

export default db;