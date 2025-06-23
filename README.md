# 📦 CRUD de Usuários com Node.js, Express e MongoDB

Este é um projeto simples de API RESTful criado com **Node.js**, **Express** e **MongoDB**. A aplicação permite **criar**, **ler**, **atualizar** e **deletar usuários** (CRUD).

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Estrutura do Projeto

📂 seu-projeto/
├── usuario.js
├── .env
├── index.js
├── package.json
└── README.md

📌 Rotas da API

Método	Rota	Descrição
POST	/usuario	Cria um novo usuário
GET	/usuario	Lista todos os usuários
PUT	/usuario/:id	Atualiza um usuário pelo ID
DELETE	/usuario/:id	Deleta um usuário pelo ID



📨 Exemplo de JSON para criação de usuário

json
Copiar
Editar
{
  "nome": "Gabriel",
  "email": "gabriel@email.com",
  "idade": 30
}

🧪 Testando a API
Você pode utilizar ferramentas como o Postman ou o Insomnia para testar as rotas da API.

🧑‍💻 Autor
Desenvolvido por Gabriel Korver

