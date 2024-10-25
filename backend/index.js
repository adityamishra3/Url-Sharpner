const express = require('express');
const PORT = 3000;
const app = express();
const Urlrouter = require('./routes/urls');
const connectMongoDb = require('./connection');

app.use(express.json());
connectMongoDb("mongodb://localhost:27017/short-url").then(()=>console.log("Connected to mongoose!"));

app.use('/url',Urlrouter);
app.listen(PORT , ()=> console.log(`Server started at ${PORT}`));