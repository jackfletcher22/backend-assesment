const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getNumber, getLetter, getSound} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/number", getNumber);
app.get("/api/letter", getLetter);
app.get("/api/sound", getSound);


app.listen(4000, () => console.log("Server running on 4000"));


