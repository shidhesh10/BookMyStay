const express = require("express");
const mongoose = require("mongoose");
const app = express();

async function main() {
  await mongoose.connect("")
}

app.get("/", (req, res) => {
  res.send("✅ Express is working perfectly!");
});

app.listen(8080, () => {
  console.log("Server started: http://localhost:8080");
});
