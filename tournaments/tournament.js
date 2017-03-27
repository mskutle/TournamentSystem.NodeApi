var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Team = require('../teams/team');

var Tournament = mongoose.model('Tournament', {
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    teams: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    tournamentType: {
        type: String,
        required: true
    }
});

module.exports = Tournament;