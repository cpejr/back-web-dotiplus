const express = require("express");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use("*", (req, res) => {
    res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada.` });
});

module.exports = app;
