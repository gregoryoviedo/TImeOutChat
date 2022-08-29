//Library
import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import cors from "cors";

//Modulo Node js
import http from "http";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

//Config
import { PORT } from "./config.js";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  /* cors: {
    origin: "http://localhost:3000",
  }, */
});
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, "../client/build")));

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(8),
    });
  });
});

server.listen(PORT);
console.log(`server on port ${PORT}`);
