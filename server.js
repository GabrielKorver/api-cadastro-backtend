//Com o mongo db 
//npm init -y
// instal express dotenv mongoose

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usuario from "./usuario.js";
import cors from 'cors'

dotenv.config();


const app = express();
const PORT = 3000;

app.use(cors()); 

// transforma tudo em json
app.use(express.json());

const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Deu erro ao conectar com o MongoDB", error);
    }
};

connetDB();


// Criando os usuários

app.post("/usuario", async (req, res) => {

    try {
        const novoUsuario = await usuario.create(req.body)
        res.json(novoUsuario)
    } catch (error) {
        res.json({ error: error })
    }
});


// Buscando os usuarios

app.get("/usuario", async (req, res) => {
    try {
        const TodosUsuarios = await usuario.find();
        res.json(TodosUsuarios)
    } catch (error) {
        res.json({ error: error })
    }
});


// Atualizando o usuario

app.put("/usuario/:id", async (req, res) => {
    try {
        const atualizarUsuarios = await usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(atualizarUsuarios);
    } catch (error) {
        res.json({ error: error });
    }
});

// Deletando usuario

app.delete("/usuario/:id", async (req, res) => {
    try {
        const deletarUsuarios = await usuario.findByIdAndDelete(
            req.params.id,
        );
        res.json(deletarUsuarios);
    } catch (error) {
        res.json({ error: error });
    }
});


app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));