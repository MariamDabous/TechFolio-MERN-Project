// require('dotenv').config();

const dotenv = require("dotenv");
dotenv.config();


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
// const port = 8000;
const port = process.env.PORT || 3000;

// const mode = process.env.NODE_ENV


app.use(cookieParser());
// app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/user.routes')(app);

app.listen(port, () => console.log('Listening on port: ', port));







// const PORT = process.env.PORT || 5000


