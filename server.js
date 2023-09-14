require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require('./models/connectToDb');
const routes = require('./routes/routes') 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes)

app.listen(PORT, () => console.log(`server up and running on port ${PORT}`));