const express = require('express');
const app = express();
const serverPort = require('./config').serverPort;

const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const banana = require('./routes/banana');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/banana', banana);

const port = process.env.PORT || serverPort;

app.listen(port, console.log(`listening to port ${port}`));