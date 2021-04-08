const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const api = require('./api');
const path = require('path');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/api', api);
module.exports = app;
