const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mysql = require('mysql');
app.use(cors());
app.use(express.json());


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "554151955",
  database: "chatbox"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/signUpFunction', (req, res) => {
  const fullName = req.body.fullName;
  const loginEmail = req.body.loginEmail;
  const loginPassword = req.body.loginPassword;

  const [first_name, last_name] = fullName.split(' ');
  console.log(last_name);

  db.query(
    "INSERT INTO user (user_id, username, date_CREATEd, status, about, phone_no, first_name, last_name, email, password) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [1, fullName, "9999-12-31", "active", "active", 0305555, first_name, last_name, loginEmail, loginPassword])
})

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data)
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(8080, () => {
  console.log("SERVER RUNNING");
});