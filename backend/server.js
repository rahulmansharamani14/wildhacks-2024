require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();
app.set('view engine', 'ejs');

require('dotenv').config();

const PORT = 4000;

app.use(cors());

const corsOptions = {
    origin: "http://localhost:3000"
};


const router = express.Router();
const index = require("./routes/index");
const organization = require("./routes/organization");

app.use("/", express.static(path.join(__dirname, "public")));

// …
app.use("/", index);
app.use("/", cors(corsOptions), organization);








app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});