const express = require("express");
const cors = require("cors");
const userSignUpRoute = require("./routes/userSignUp");
const app = express();
app.use(express.json());
app.use(cors());

require("./db/mongoose");

app.use("/", userSignUpRoute);

app.listen(5000, () => console.log("listening on port 5000"));
