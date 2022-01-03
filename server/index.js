const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mysql = require('mysql');
app.use(require('cors')());
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

  let username = "";
  if (last_name !== undefined){
    username = first_name[0].toLowerCase() + last_name.toLowerCase();
  } 
  else{
    username = first_name.toLowerCase();
  }
  
  db.query(
    "INSERT INTO user (username, first_name, last_name, email, password) VALUES (?,?,?,?,?)",
    [username, first_name, last_name, loginEmail, loginPassword]),
    (err, result) => {
      if(err)
      console.log(err);
      else
      res.send("Signup Success!")
    }
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