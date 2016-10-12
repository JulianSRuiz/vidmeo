const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const { strategy:FacebookStrategy } = require('passport-facebook');
const mongoose = require('mongoose');

const app = express();
const port = 5030;

app.use( express.static(`${__dirname}/public`) )

app.listen(port, () => console.log("listening on " + port));
