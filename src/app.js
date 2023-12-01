import express from "express";
import cors from "cors";
import routes from "./routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.urlencoded({ extended: true }));

app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada.` });
});

export default app;
