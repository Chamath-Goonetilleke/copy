const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const advertisementRouter =require('./Routes/Advertisements');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8989;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("MongoDB Connection Success!");
});

app.use('/advertisements', advertisementRouter);

app.listen(port, ()=>{
    console.log(`The App running on port: ${port}`);
});
