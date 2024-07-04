const express = require("express");
const app = express();
const routes = require("./routes");
PORT = 8081;

require("./database");

app.get("/", (req, res) => {
  res.send("Hello from home");
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is live at ${PORT}`);
});
