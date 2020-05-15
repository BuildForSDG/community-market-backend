require('dotenv-flow').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const router = require('./routes/router');
const PORT = 2020;

const app = express();

// using body parser.
app.use(express.urlencoded({ extended: true }));

//enable CORS
app.use(cors());

// using cookie-parser.
app.use(cookieParser());

// calls routes/router middleware.
app.use(router);
// server listening.
app.listen(PORT, () => {
  console.log(`node started at ${process.env.PORT}`);
});

module.exports = app;
