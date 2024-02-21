import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import auth from "./routes/auth.js";
import cookieParser from "cookie-parser";

// configs

const app = express();
app.use(cookieParser());
app.use(express.json());

dotenv.config()

const connect = () => {
  mongoose.connect(process.env.MONGODB_CONNECT_URI).then(() => {
    console.log("Conectado ao banco de dados");
  }).catch(err => {
    throw err;
  });
}

// routes

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", auth);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Erro interno!";
  return res.status(status).json({
    success: false,
    status,
    message
  })
});

// routes

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  connect();
  console.log("Conectado na porta: " + PORT);
})
