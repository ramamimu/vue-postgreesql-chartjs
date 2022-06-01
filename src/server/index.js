const { Pool, Client } = require("pg");
// const { Server } = require("socket.io");
const express = require("express");
// const { default: axios, default: axios } = require("axios");
// const { json } = require("express/lib/response");
const app = express();
const axios = require("axios");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "pass123",
  port: 5432,
});

client.connect();
// wsServer.on("connect", function (socket) {
client.query("SELECT * from tutorial order by id", (err, res) => {
  if (!err) {
    console.log(res.rows);
    console.log(typeof res.rows);
    // socket.sendUTF(JSON.stringify(res.rows));
    let someObj = "sesuatu";
    someObj = JSON.stringify(res.rows);
    app.get("/", (req, res) => {
      res.send(someObj);
      console.log("success to send");
    });
  } else {
    console.log(err.message);
    // socket.sendUTF("message error");
  }
  // console.log(err, res);
  // client.end();
  // conn.sendUTF("apa ini yang masuk");
});

client.query("SELECT id from tutorial order by id", (err, res) => {
  if (!err) {
    console.log(res.rows);
    console.log(typeof res.rows);
    // socket.sendUTF(JSON.stringify(res.rows));
    let someObj = "sesuatu";
    someObj = JSON.stringify(res.rows);
    app.get("/user", (req, res) => {
      res.send(someObj);
      console.log("success to send");
    });
  } else {
    console.log(err.message);
    // socket.sendUTF("message error");
  }
  // console.log(err, res);
  // client.end();
  // conn.sendUTF("apa ini yang masuk");
});

app.listen(3002, function () {
  console.log("listen to server 3002");
});
