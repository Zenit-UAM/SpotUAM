import { Pool } from "pg";
import express from "express";
import "dotenv/config";
const app = express();

app.use(express.json());

export const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "database", // El nombre del servicio en docker-compose
  database: process.env.DB_DB || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  port: process.env.DB_PORT || 5432,
});

pool.on("connect", () => {
  console.log("Conectado a la base de datos");
});

pool.on("error", (err) => {
  console.error("Error inesperado en el pool", err);
});
