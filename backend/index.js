const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
PORT = 8080;

require("./database");

app.get("/", (req, res) => {
  res.send(`Hello! Server is live at: ${PORT}`);
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is live at ${PORT}`);
});
