const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")

dotenv.config({ path: "./config.env" });

const bookRouters = require("./Routes/Books");
const app = express();

app.use(express.json());
app.use(cors())
app.use(bookRouters);

const PORT = process.env.PORT || 3000;
const BOOK_STORE_LOCAL_DB_URL = process.env.BOOK_STORE_LOCAL_DB_URL;

mongoose.connect(BOOK_STORE_LOCAL_DB_URL)
    .then(() => {
        console.log("App Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch((error) => {
        console.log(error);
    });