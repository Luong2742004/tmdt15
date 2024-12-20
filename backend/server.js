const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routers");

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();
router(app);

app.listen(5000, ()=>{
    console.log("Server run at port 5000");
})
