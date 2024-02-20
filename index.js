import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config()

const connect = () => {
  mongoose.connect(process.env.MONGODB_CONNECT_URI).then(() => {
    console.log("Conectado ao banco de dados");
  }).catch(err => {
    throw err;
  });
}

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  connect();
  console.log("Conectado na porta: " + PORT);
})
