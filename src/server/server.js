const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "FP_K06",
  password: "pass123",
  port: 5432,
});

client.connect();

app.post("/api", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from pengunjungBulanan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });

  console.log(request.body);
});

app.post("/pengunjung", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from pengunjungBulanan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });

  console.log(request.body);
});

app.post("/peminjam", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_jurusan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/pinjam_buku", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_bulan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.listen(port, function () {
  console.log("listening on port ", port);
});
