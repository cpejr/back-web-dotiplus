const app = require("./App");
const Loaders = require("./Loaders/index");
const dotenv = require("dotenv");

Loaders.start();
dotenv.config();

app.listen(process.env.PORT || 8000, () => console.log("Servidor Rodando!"));
