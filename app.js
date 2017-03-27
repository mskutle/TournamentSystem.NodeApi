var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var tournaments = require('./tournaments/routes');
var teams = require('./teams/routes');
var players = require('./players/routes');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/tournaments', tournaments);
app.use('/api/teams', teams);
app.use('/api/players', players);

mongoose.connect('mongodb://localhost/tournament-system');

module.exports = app;
