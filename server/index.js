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
  const signUpEmail = req.body.signUpEmail;
  const signUpPassword = req.body.signUpPassword;
  let first_name = null;
  let last_name = null;
  let username = null;
  if(fullName !== null){
    [first_name, last_name] = fullName.split(' ');
    if (last_name !== undefined){
      username = first_name[0].toLowerCase() + last_name.toLowerCase();
    } 
    else{
      username = first_name.toLowerCase();
    }
  }
    
  db.query(
    "INSERT INTO user (username, first_name, last_name, email, password) VALUES (?,?,?,?,?)",
    [username, first_name, last_name, signUpEmail, signUpPassword],
    (err, result) => {
      if(err){
        res.send(err);
      }
      else{
        res.send({result});
      }
    })
})

// LoginFunction

app.post('/logInFunction', (req, res) => {
  const loginEmail = req.body.loginEmail;
  const loginPassword = req.body.loginPassword;
  db.query(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [loginEmail, loginPassword],
    (err, result) => {
      if(err){
        res.send(err);
      }
      else{
        res.send(result);
      }
    })
})

// LoginFunctionend



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
    socket.join('123');
    socket.to('123').emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

server.listen(8080, () => {
  console.log("SERVER RUNNING");
});