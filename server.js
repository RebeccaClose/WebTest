const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
