import app from "./app.js";
import Loaders from "./Loaders/index.js";
import dotenv from "dotenv";

Loaders.start();
dotenv.config();

app.listen(process.env.PORT || 8000, () => console.log("Servidor Rodando!"));
