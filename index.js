// import express from 'express'
const express = require('express')
require('dotenv').config()
const cors = require('cors');
// import 'dotenv/config'

const path = require("path");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src')));
app.set("view engine", "ejs",);


app.get("/", (req, res) => {
   res.render("test")
})


const port = process.env.PORT
app.listen(port, () =>{
   console.log("App running on : "+ port)
})