const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect(process.env.MONGO_URI); //COLOCAR MONGO_URI NO .env QUANDO CRIAR O BANCO DE DADOS NO MONGODB
    console.log("Banco de dados inicializado!");
}

module.exports = startDB;