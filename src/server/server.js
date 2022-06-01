const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());
app.post("/api", (req, res) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  console.log(req.body);
  res.json(temp);
});

app.listen(port, function () {
  console.log("listening on port ", port);
});
