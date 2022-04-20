const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "jade");

//create a route handler for the home path
app.get("/", function (req, res) {
  res.render("index", { title: "My page" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
console.log("listening at 3000");
