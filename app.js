const express = require("express");
const app = express();
const port = 3030;
const path = require("path");

const publicPatch = path.resolve(__dirname, "./public");
app.use(express.static(publicPatch));

app.get("/", (req, res) => { res.sendFile(path.join(__dirname, "/views/home.html")) });

app.get("/register", (req, res) => { res.sendFile(path.join(__dirname, "/views/register.html")) });

app.get("/login", (req, res) => { res.sendFile(path.join(__dirname, "/views/login.html")) });

app.listen(port, () => console.log("Escuchando en puerto " + port));