var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = require('../teams/team').TeamSchema;

var Player = mongoose.model('Player', {
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dateOfBirth: Date,
    team: {
        type: TeamSchema
    }
});

module.exports = Player;