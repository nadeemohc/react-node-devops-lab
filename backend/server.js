const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors({
  origin: "http://127.0.0.1:8004"
}));
const PORT = 8005;

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello World from Node.js!",
    application: "React + Node.js DevOps Lab",
    status: "success"
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Node.js API running at http://127.0.0.1:${PORT}`);
});
