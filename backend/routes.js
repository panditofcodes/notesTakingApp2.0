const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());

const { userRegistration } = require("./api/userManagement");

router.route("/api/userManagement/registerUser").post(userRegistration);

module.exports = router;
