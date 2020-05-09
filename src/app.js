const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

// using body parser.
app.use(bodyParser.urlencoded({ extended: true }));

//enable CORS
app.use(cors());

// using cookie-parser.
app.use(cookieParser());

// custom imports.
const router = require('./routes/router');
require('dotenv-flow').config();

// calls routes/router middleware.
app.use(router);
// server listening.
app.listen(process.env.PORT, () => {
  console.log(`node started at ${process.env.PORT}`);
});

module.exports = app;
