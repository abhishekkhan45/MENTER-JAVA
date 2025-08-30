const express = require("express");
const app = express();
const path = require("path");
app.set("view engine");
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render(__dirname + "/view/index.ejs");
});

app.listen(5000, () => {
  console.log("server started..");
});
