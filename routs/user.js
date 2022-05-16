const mongoose = require("mongoose");
const express = require("express");
const userRout = require("./routs/user");

const app = express();
mongoose.connect("mongodb://localhost:27017/home")
    .then(() => { console.log("mogodb is connected"); })
    .catch(er => { console.log(er) });

app.use(express.json());
app.use("/user", userRout);
app.listen(4500, () => { console.log("waiting") }