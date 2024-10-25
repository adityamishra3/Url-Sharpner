const express = require('express');
const app = express();
const PORT = 3000;
const connectMongoDb = require('./connection')
const urlRoute = require('./routes/urls')
app.use(express.json());
connectMongoDb("mongodb://localhost:27017/short-url").then(()=>console.log("MongoDB Connected!"));

app.use("/url",urlRoute);
app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
})