const express = require("express");
const app = express();
const routes = require("./routes");
PORT = 8081;

require("./database");
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello! Server is live at: ${PORT}`);
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is live at ${PORT}`);
});
