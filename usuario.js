import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    "name": String,
    "dataNascimento": Date,
    "email": String,
    "senha": String,
})
export default mongoose.model('usuario', usuarioSchema)